"use client";
import { useState } from "react";
import Stepper from "../features/Stepper/components/Stepper";
import StepContent from "@/features/StepsContent/pages/StepContent";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { Page } from "@/features/Stepper/types";

const MAX_STEPS = 7;

export default function MultiStepForm() {
  const [pages, setPages] = useState<Page[]>([
    { id: "info", title: "Info", icon: <CiCircleInfo /> },
    { id: "details", title: "Details", icon: <FaRegNewspaper /> },
    { id: "other", title: "Other", icon: <FcViewDetails /> },
    { id: "ending", title: "Ending", icon: <MdDone /> },
  ]);
  const [activeId, setActiveId] = useState(pages[0].id);

  function handleAdd(index: number) {
    if (pages.length >= MAX_STEPS) {
      alert(`You can only have up to ${MAX_STEPS} steps.`);
      return;
    }

    const next = [...pages];
    const endingIdx = next.findIndex((p) => p.id === "ending");
    const insertAt = index >= pages.length - 1 ? endingIdx : index + 1;

    next.splice(insertAt, 0, {
      id: `page-${Date.now()}`,
      title: "New Page",
    });
    setPages(next);
  }

  return (
    <div className="flex flex-col gap-12 mt-6">
      <div>
        <Stepper
          pages={pages}
          activeId={activeId}
          onReorder={setPages}
          onAdd={handleAdd}
          onSelect={setActiveId}
          maxSteps={MAX_STEPS}
        />
      </div>
      <div>
        <StepContent activeId={activeId} pages={pages} onSelect={setActiveId} />
      </div>
    </div>
  );
}
