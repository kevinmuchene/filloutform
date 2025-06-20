export type Page = { id: string; title: string; icon: React.ReactNode };

export type ContextMenuState = { id: string; x: number; y: number } | null;

export interface StepperProps {
  pages: Page[];
  activeId: string;
  onReorder: (newPages: Page[]) => void;
  onAdd: (afterIndex: number) => void;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onDuplicate: (id: string) => void;
  onRename: (id: string, newTitle: string) => void;
}
