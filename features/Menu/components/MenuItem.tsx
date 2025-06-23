import React from "react";
import { MenuItemProps } from "../types";

function MenuItem({ label, onClick, icon, danger = false }: MenuItemProps) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`
          flex w-full items-center px-3 py-1.5 rounded
          hover:bg-gray-100
          ${danger ? "text-red-600" : "text-gray-800"}
        `}
      >
        {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
        <span>{label}</span>
      </button>
    </li>
  );
}

export default MenuItem;
