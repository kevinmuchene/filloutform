import React, { useState } from "react";

import { useSortable } from "@dnd-kit/sortable";
import { Page } from "./utils/types";
import { CSS } from "@dnd-kit/utilities";

export default function SortableStep({
  page,
  isActive,
  onSelect,
  onDelete,
  onDuplicate,
  onRename,
  onOpenMenu,
}: {
  page: Page;
  isActive: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onRename: (newTitle: string) => void;
  onOpenMenu: (e: React.MouseEvent) => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: page.id });

  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(page.title);
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={onSelect}
      className={`relative px-6 py-2 rounded-lg cursor-pointer select-none
                      flex items-center
                      ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "bg-gray-100 text-gray-700"
                      }`}
    >
      {editing ? (
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onBlur={() => {
            onRename(draft);
            setEditing(false);
          }}
          autoFocus
          className="border-b bg-transparent focus:outline-none w-24"
        />
      ) : (
        <div className="flex gap-2">
          <div className="flex items-center">{page.icon}</div>
          <div>{page.title}</div>
        </div>
      )}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onOpenMenu(e);
        }}
        className="absolute right-1 text-xl opacity-0 hover:opacity-100 cursor-pointer"
      >
        ⋮
      </button>
    </div>
  );
}
