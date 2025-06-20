export default function InsertHandle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center focus:outline-none"
    >
      <span className="w-6 h-px bg-gray-300 group-hover:bg-gray-400" />
      <span
        className="mx-1 w-5 h-5 rounded-full border border-gray-400 flex items-center justify-center text-sm text-gray-500
                           bg-white group-hover:bg-blue-500 group-hover:text-white transition-colors"
      >
        +
      </span>
      <span className="w-6 h-px bg-gray-300 group-hover:bg-gray-400" />
    </button>
  );
}
