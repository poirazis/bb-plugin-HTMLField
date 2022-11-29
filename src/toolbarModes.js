const spectrumColors = 
[
    "var(--spectrum-global-color-red-400)",
    "var(--spectrum-global-color-orange-400)",
    "var(--spectrum-global-color-yellow-400)",
    "var(--spectrum-global-color-green-400)",
    "var(--spectrum-global-color-seafoam-400)",
    "var(--spectrum-global-color-blue-400)",
    "var(--spectrum-global-color-indigo-400)",

    "var(--spectrum-global-color-red-500)",
    "var(--spectrum-global-color-orange-500)",
    "var(--spectrum-global-color-yellow-500)",
    "var(--spectrum-global-color-green-500)",
    "var(--spectrum-global-color-seafoam-500)",
    "var(--spectrum-global-color-blue-500)",
    "var(--spectrum-global-color-indigo-500)",

    "var(--spectrum-global-color-red-600)",
    "var(--spectrum-global-color-orange-600)",
    "var(--spectrum-global-color-yellow-600)",
    "var(--spectrum-global-color-green-600)",
    "var(--spectrum-global-color-seafoam-600)",
    "var(--spectrum-global-color-blue-600)",
    "var(--spectrum-global-color-indigo-600)",

    "var(--spectrum-global-color-red-700)",
    "var(--spectrum-global-color-orange-700)",
    "var(--spectrum-global-color-yellow-700)",
    "var(--spectrum-global-color-green-700)",
    "var(--spectrum-global-color-seafoam-700)",
    "var(--spectrum-global-color-blue-700)",
    "var(--spectrum-global-color-indigo-700)",

    "var(--spectrum-global-color-gray-50)",
    "var(--spectrum-global-color-gray-75)",
    "var(--spectrum-global-color-gray-100)",
    "var(--spectrum-global-color-gray-200)",
    "var(--spectrum-global-color-gray-300)",
    "var(--spectrum-global-color-gray-400)",
    "var(--spectrum-global-color-gray-500)",
    "var(--spectrum-global-color-gray-600)",
    "var(--spectrum-global-color-gray-700)",
    "var(--spectrum-global-color-gray-800)",
    "var(--spectrum-global-color-gray-900)",
    "white",
    "black"
]

export const miniToolbar = [    
    [{ 'font': [] }, { 'size': [] }],
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ 'color': spectrumColors }, { 'background': [] }]
]

export const normalToolbar = [    
    [{ 'font': [] }, { 'size': [] }],
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
    [{ 'color': spectrumColors }, { 'background': spectrumColors }]
]

export const fullToolbar = [
    [{ 'font': [] }, { 'size': [] }],
    [ 'bold', 'italic', 'underline', 'strike' ],
    [{ 'color': spectrumColors }, { 'background': spectrumColors }],
    [{ 'script': 'super' }, { 'script': 'sub' }],
    [{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
    [{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
    [ 'direction', { 'align': [] }],
    [ 'link', 'image', 'video', 'formula' ],
    [ 'clean' ]
]