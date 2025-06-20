function MenuItem({
  label,
  onClick,
  danger = false,
}: {
  label: string;
  onClick: () => void;
  danger?: boolean;
}) {
  return (
    <li>
      <button
        onClick={onClick}
        className={`flex w-full items-center px-3 py-1.5 rounded
                      hover:bg-gray-100 ${
                        danger ? "text-red-600" : "text-gray-800"
                      }`}
      >
        {label}
      </button>
    </li>
  );
}
export default MenuItem;
