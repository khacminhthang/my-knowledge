export interface MenuNode {
    text: string;
    icon: string;
    routerLink?: string;
    children?: MenuNode[];
}

// Backward-compatible aliases for existing imports.
export type IMenu = MenuNode;
export type IMenuItem = MenuNode;