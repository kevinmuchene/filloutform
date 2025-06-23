import { CiFlag1 } from "react-icons/ci";
import { MdDriveFileRenameOutline, MdDeleteOutline } from "react-icons/md";
import { FaRegCopy } from "react-icons/fa";
import { HiOutlineDuplicate } from "react-icons/hi";
import { MenuItemsDef } from "../../Stepper/types";

export const stepperMenuItems: MenuItemsDef[] = [
  {
    key: "first",
    label: "Set as first page",
    icon: <CiFlag1 className="text-blue-600" />,
    onClick: () => {
      alert("Set first page option clicked");
    },
  },
  {
    key: "rename",
    label: "Rename",
    icon: <MdDriveFileRenameOutline className="text-gray-600" />,
    onClick: () => {
      alert("Rename option clicked");
    },
  },
  {
    key: "copy",
    label: "Copy",
    icon: <FaRegCopy className="text-gray-600" />,
    onClick: () => {
      alert("Copy option clicked");
    },
  },
  {
    key: "duplicate",
    label: "Duplicate",
    icon: <HiOutlineDuplicate className="text-gray-600" />,
    onClick: () => {
      alert("Duplicate option clicked");
    },
  },
  { key: "divider-1", divider: true },
  {
    key: "delete",
    label: "Delete",
    icon: <MdDeleteOutline className="text-red-600" />,
    danger: true,
    onClick: () => {
      alert("Delete option clicked");
    },
  },
];
