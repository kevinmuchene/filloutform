import MenuItem from "../MenuItem";
import { menuItems } from "./utils/menuItems";
import { StepperContextMenuProps } from "./utils/types";

export default function StepperContextMenu({
  menu,
  setMenu,
}: StepperContextMenuProps) {
  if (!menu) return null;
  return (
    menu && (
      <ul
        style={{ top: menu.y, left: menu.x }}
        className="fixed z-50 w-48 rounded-md border border-gray-200
                   bg-white shadow-lg p-1 text-sm select-none"
        onClick={(e) => e.stopPropagation()}
      >
        {menuItems.map((item) =>
          item.divider ? (
            <li key={item.key}>
              <div className="my-1 h-px bg-gray-100" />
            </li>
          ) : (
            <MenuItem
              key={item.key}
              label={item.label}
              icon={item.icon}
              danger={item.danger}
              onClick={() => {
                item.onClick?.();
                setMenu(null);
              }}
            />
          )
        )}
      </ul>
    )
  );
}
