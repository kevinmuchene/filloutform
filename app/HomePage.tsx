"use client";
import { useState } from "react";
import Stepper from "../components/Stepper/Stepper";
import FormsPage from "@/components/FormsPage";
import { CiCircleInfo } from "react-icons/ci";
import { FaRegNewspaper } from "react-icons/fa";
import { FcViewDetails } from "react-icons/fc";
import { MdDone } from "react-icons/md";
import { FaPlus } from "react-icons/fa";

type FormSchema = {
  name: string;
  email: string;
  age: number;
  notes: string;
};

type Page = {
  id: string;
  title: string;
  icon: React.ReactNode;
};

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
          onDelete={(id) => setPages(pages.filter((p) => p.id !== id))}
          onDuplicate={(id) => {
            const idx = pages.findIndex((p) => p.id === id);
            if (idx === -1) return;
            const copy = { ...pages[idx], id: `page-${Date.now()}` };
            const next = [...pages];
            next.splice(idx + 1, 0, copy);
            setPages(next);
          }}
          onRename={(id, newTitle) => {
            setPages(
              pages.map((p) => (p.id === id ? { ...p, title: newTitle } : p))
            );
          }}
        />
      </div>
      <div>
        <FormsPage activeId={activeId} />
      </div>
    </div>
  );
}
