"use client";
import { useState } from "react";
import Stepper from "../components/Stepper/Stepper";
import FormsPage from "@/components/Steps/StepContent";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { Page } from "@/components/Stepper/utils/types";

export default function HomePage() {
  const [pages, setPages] = useState<Page[]>([
    { id: "info", title: "Info", icon: <CiCircleInfo /> },
    { id: "details", title: "Details", icon: <FaRegNewspaper /> },
    { id: "other", title: "Other", icon: <FcViewDetails /> },
    { id: "ending", title: "Ending", icon: <MdDone /> },
  ]);
  const [activeId, setActiveId] = useState(pages[0].id);

  return (
    <div className="flex flex-col gap-12 mt-6">
      <div>
        <Stepper
          pages={pages}
          activeId={activeId}
          onReorder={setPages}
          onAdd={(index) => {
            const next = [...pages];
            next.splice(index + 1, 0, {
              id: `page-${Date.now()}`,
              title: "New Page",
              icon: <FaPlus />,
            });
            setPages(next);
          }}
          onSelect={setActiveId}
        />
      </div>
      <div>
        <FormsPage activeId={activeId} pages={pages} onSelect={setActiveId} />
      </div>
    </div>
  );
}
