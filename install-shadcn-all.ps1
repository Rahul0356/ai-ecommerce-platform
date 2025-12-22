# PowerShell script to install all shadcn/ui components
$components = @(
    "accordion",
    "alert",
    "alert-dialog",
    "aspect-ratio",
    "avatar",
    "badge",
    "breadcrumb",
    "calendar",
    "card",
    "carousel",
    "chart",
    "checkbox",
    "collapsible",
    "command",
    "context-menu",
    "dialog",
    "drawer",
    "dropdown-menu",
    "form",
    "hover-card",
    "input",
    "label",
    "menubar",
    "navigation-menu",
    "pagination",
    "popover",
    "progress",
    "radio-group",
    "resizable",
    "scroll-area",
    "select",
    "separator",
    "sheet",
    "skeleton",
    "slider",
    "sonner",
    "switch",
    "table",
    "tabs",
    "textarea",
    "toast",
    "toggle",
    "toggle-group",
    "tooltip"
)

Write-Host "Installing all shadcn/ui components..." -ForegroundColor Green

foreach ($component in $components) {
    Write-Host "Installing $component..." -ForegroundColor Yellow
    npx shadcn-ui@latest add $component --yes
}

Write-Host "All components installed!" -ForegroundColor Green














