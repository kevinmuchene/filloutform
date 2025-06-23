import { Page } from "@/components/Stepper/utils/types";

export type StepContentProps = {
  activeId: string;
  pages: Page[];
  onSelect: (id: string) => void;
};
