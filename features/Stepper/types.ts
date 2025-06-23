export type Page = { id: string; title: string; icon?: React.ReactNode };
export type ContextMenuState = { id: string; x: number; y: number } | null;

export interface StepperProps {
  pages: Page[];
  activeId: string;
  onReorder: (newPages: Page[]) => void;
  onAdd: (afterIndex: number) => void;
  onSelect: (id: string) => void;
  maxSteps: number;
}

export interface MenuItemsDef {
  key: string;
  label?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  divider?: boolean;
  danger?: boolean;
}

export interface StepperContextMenuProps {
  menu: ContextMenuState | null;
  setMenu: React.Dispatch<React.SetStateAction<ContextMenuState | null>>;
}
