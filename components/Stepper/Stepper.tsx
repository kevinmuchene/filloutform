import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import React, { useState, useEffect } from "react";
import InsertHandle from "./InsertHandle";
import AddPageButton from "./AddPageButton";
import SortableStep from "./SortableStep";
import { StepperProps, ContextMenuState } from "./utils/types";
import StepperContextMenu from "./StepperContextMenu";

export default function Stepper({
  pages,
  activeId,
  onReorder,
  onAdd,
  onSelect,
}: StepperProps) {
  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 5 } })
  );
  const [menu, setMenu] = useState<ContextMenuState>(null);

  useEffect(() => {
    function handleGlobalClick() {
      if (menu) setMenu(null);
    }
    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, [menu]);

  function handleDragEnd(event: any) {
    const { active, over } = event;
    if (over && active.id !== over.id) {
      const oldIndex = pages.findIndex((p) => p.id === active.id);
      const newIndex = pages.findIndex((p) => p.id === over.id);
      onReorder(arrayMove(pages, oldIndex, newIndex));
    }
  }

  return (
    <>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={pages.map((p) => p.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div
            className="flex flex-col md:flex-row not-first:md:items-center
  "
          >
            {pages.map((p, idx) => (
              <div
                key={p.id}
                className="flex flex-col items-center md:flex-row md:items-center not-first:md:space-x-3
            "
              >
                <SortableStep
                  page={p}
                  isActive={p.id === activeId}
                  onSelect={() => onSelect(p.id)}
                  onOpenMenu={(e) =>
                    setMenu({ id: p.id, x: e.clientX, y: e.clientY })
                  }
                />

                {idx < pages.length - 1 && (
                  <InsertHandle onClick={() => onAdd(idx)} />
                )}
              </div>
            ))}
            <div className="flex flex-col items-center mt-4 md:mt-0 md:ml-3">
              <AddPageButton onClick={() => onAdd(pages.length - 1)} />
            </div>
          </div>
          <StepperContextMenu menu={menu} setMenu={setMenu} />
        </SortableContext>
      </DndContext>
    </>
  );
}
