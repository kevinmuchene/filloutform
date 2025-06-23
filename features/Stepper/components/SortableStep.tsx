import React from "react";

import { useSortable } from "@dnd-kit/sortable";
import { Page } from "../types";
import { CSS } from "@dnd-kit/utilities";
import { CiMenuKebab } from "react-icons/ci";

export default function SortableStep({
  page,
  isActive,
  onSelect,
  onOpenMenu,
  disabled = false
}: {
  page: Page;
  isActive: boolean;
  onSelect: () => void;
  onOpenMenu: (e: React.MouseEvent) => void;
  disabled?:boolean
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: page.id , disabled });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  const dragProps = disabled ? {} : { ...attributes, ...listeners }
  return (
    <div
      ref={setNodeRef}
      style={style}
      {...dragProps}
      {...attributes}
      {...listeners}
      onClick={onSelect}
      className={`relative flex items-center justify-center w-26 h-10 px-2 cursor-pointer select-none rounded-lg border border-gray-300
                      ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
    >
      {isActive && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpenMenu(e);
          }}
          className="absolute left-1 text-xl opacity-0 hover:opacity-100 cursor-pointer"
        >
          <CiMenuKebab />
        </button>
      )}

      <div className="flex gap-1">
        <div className="flex items-center">{page.icon}</div>
        <p className="text-sm">{page.title}</p>
      </div>
    </div>
  );
}
