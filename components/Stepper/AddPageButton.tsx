export default function AddPageButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-2 py-2 md:px-4 rounded-lg border border-gray-300 bg-white
                     text-gray-800 hover:bg-gray-50 shadow-sm"
    >
      <span className="mr-1 cursor-pointer">＋Add page</span>
    </button>
  );
}
