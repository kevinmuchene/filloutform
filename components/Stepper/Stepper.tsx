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
import MenuItem from "../MenuItem";
import InsertHandle from "./InsertHandle";
import AddPageButton from "./AddPageButton";
import SortableStep from "./SortableStep";
import { StepperProps, ContextMenuState } from "./utils/types";

export default function Stepper({
  pages,
  activeId,
  onReorder,
  onAdd,
  onSelect,
  onDelete,
  onDuplicate,
  onRename,
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
      {/* <div className="md:hidden p-2">
        <select
          value={activeId}
          onChange={(e) => onSelect(e.target.value)}
          className="w-full border rounded p-1"
        >
          {pages.map((p) => (
            <option key={p.id} value={p.id}>
              {p.title}
            </option>
          ))}
        </select>
      </div> */}
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
      >
        <SortableContext
          items={pages.map((p) => p.id)}
          strategy={horizontalListSortingStrategy}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center sapyce-y-2 md:space-x-3 md:space-y-0 overflow-auto ">
            {pages.map((p, idx) => (
              <React.Fragment key={p.id}>
                <SortableStep
                  page={p}
                  isActive={p.id === activeId}
                  onSelect={() => onSelect(p.id)}
                  onDelete={() => onDelete(p.id)}
                  onDuplicate={() => onDuplicate(p.id)}
                  onRename={(title) => onRename(p.id, title)}
                  onOpenMenu={(e) =>
                    setMenu({ id: p.id, x: e.clientX, y: e.clientY })
                  }
                />

                {idx < pages.length - 1 && (
                  <InsertHandle onClick={() => onAdd(idx)} />
                )}
              </React.Fragment>
            ))}
            <AddPageButton onClick={() => onAdd(pages.length - 1)} />
          </div>
          {menu && (
            <ul
              style={{ top: menu.y, left: menu.x }}
              className="fixed z-50 w-48 rounded-md border border-gray-200
                       bg-white shadow-lg p-1 text-sm select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <MenuItem
                label="Set as first page"
                onClick={() => {
                  alert("Set as first page clicked");
                }}
              />
              <MenuItem
                label="Rename"
                onClick={() => {
                  alert("Rename clicked");
                }}
              />
              <MenuItem
                label="Copy"
                onClick={() => {
                  alert("Copy clicked");
                }}
              />
              <MenuItem
                label="Duplicate"
                onClick={() => {
                  alert("Duplicate clicked");
                }}
              />
              <div className="my-1 h-px bg-gray-100" />
              <MenuItem
                label="Delete"
                danger
                onClick={() => {
                  alert("Delete clicked");
                }}
              />
            </ul>
          )}
        </SortableContext>
      </DndContext>
    </>
  );
}
