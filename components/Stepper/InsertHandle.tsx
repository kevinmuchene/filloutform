export default function InsertHandle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col items-center md:flex-row md:items-center focus:outline-none"
    >
      <span className="w-px h-3 bg-gray-300 group-hover:bg-gray-400 md:w-6 md:h-px" />
      <span
        className="
        my-0.5
        md:mx-1
        w-4 h-4 
        md:w-5 md:h-5
        rounded-full border border-gray-400
        flex items-center justify-center
        text-xs text-gray-500
        md:text-sm
        bg-white group-hover:bg-blue-500 group-hover:text-white
        transition-colors
      "
      >
        +
      </span>
      <span className="w-px h-3 bg-gray-300 group-hover:bg-gray-400 md:w-6 md:h-px" />
    </button>
  );
}
