<svelte:head>
	<link href="//cdn.quilljs.com/1.3.7/quill.snow.css" rel="stylesheet">
</svelte:head>

<script>
  import { getContext, onDestroy, onMount } from "svelte"
  import { quill } from 'svelte-quill'
  import { miniToolbar, normalToolbar, fullToolbar } from "./toolbarModes"

  export let field
  export let label
  export let placeholder
  export let toolbarmode 

  let editor

  const { styleable } = getContext("sdk")
  const component = getContext("component")
  const formContext = getContext("form");
  const formStepContext = getContext("form-step");
  const fieldGroupContext = getContext("field-group");

  const options = { 
      placeholder: placeholder,
      modules: { 
        toolbar: []
      }
    }
	
  $: {
      switch(toolbarmode) {
        case "mini":
          options.modules.toolbar = miniToolbar;
          break;
        case "normal":
          options.modules.toolbar = normalToolbar;
          break;
        case "full":
          options.modules.toolbar = fullToolbar;
          break;
      } 
  }

  let fieldApi;
  let fieldState;

  const formApi = formContext?.formApi;
  const labelPos = fieldGroupContext?.labelPosition || "above";
  $: formStep = formStepContext ? $formStepContext || 1 : 1;
  $: formField = formApi?.registerField(
    field,
    "field/longform",
    "",
    false,
    null,
    formStep
  );

  $: unsubscribe = formField?.subscribe((value) => {
    fieldState = value?.fieldState;
    fieldApi = value?.fieldApi;
  });

  $: labelClass =
    labelPos === "above" ? "" : `spectrum-FieldLabel--${labelPos}`;

  $: if (formField) {
      const container = editor?.getElementsByClassName("ql-editor")[0];
      if (container) container.innerHTML = fieldState?.value;
    }

  const handleChange = e => {
      fieldApi?.setValue(e.detail.html)
    }

  onDestroy(() => {
    fieldApi?.deregister();
    unsubscribe?.();
  });

  // Styling Overrides
  const css_overrides = "<style> .ql-formats .ql-picker, .ql-formats ql-script { color: var(--navTextColor); !important } .ql-fill {fill: var(--navTextColor) !important;} .ql-stroke {stroke: var(--navTextColor) !important;} .ql-color-picker .ql-picker-item { color: var(--navTextColor) !important; border: 2px solid var(--spectrum-global-color-gray-200) !important; border-radius: 50% !important; } .ql-picker-options { background-color: var(--spectrum-alias-background-color-secondary) !important; } </style>"
</script>


{#key toolbarmode}
  <div class="spectrum-Form-item" use:styleable={$component.styles}>
    {#if !formContext}
      <div class="placeholder"> Form components need to be wrapped in a form </div>
    {:else}
      <label
      class:hidden={!label}
      for={fieldState?.fieldId}
      class={`spectrum-FieldLabel spectrum-FieldLabel--sizeM spectrum-Form-itemLabel ${labelClass}`}
      >
        {label || " "}
    </label>
        {@html css_overrides}
        <div bind:this={editor} class="editor" use:quill={options} on:text-change={handleChange} />  
    {/if}
  </div>
{/key}

