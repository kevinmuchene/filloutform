import { Page } from "@/features/Stepper/types";

export type StepContentProps = {
  activeId: string;
  pages: Page[];
  onSelect: (id: string) => void;
};
