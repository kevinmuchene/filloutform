export default function InsertHandle({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Insert new step"
      className="
        group 
        flex flex-col items-center
        md:flex-row md:items-center
        focus:outline-none
      "
    >
      <span
        className="
          w-px h-3 bg-gray-300
          md:w-6 md:h-px
        "
      />

      <span
        className="
         hidden group-hover:inline-flex
         my-0.5 md:mx-1
         w-4 h-4 md:w-5 md:h-5
         rounded-full border border-gray-400
         items-center justify-center
         text-xs md:text-sm text-gray-500
         bg-white
         hover:bg-blue-500 hover:text-white
         transition-all duration-150 ease-in-out
         cursor-pointer
      "
      >
        +
      </span>

      <span
        className="
          w-px h-3 bg-gray-300
          md:w-6 md:h-px
        "
      />
    </button>
  );
}
