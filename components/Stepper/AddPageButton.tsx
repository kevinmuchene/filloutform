export default function AddPageButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center px-4 py-2 rounded-lg border border-gray-300 bg-white
                     text-gray-800 hover:bg-gray-50 shadow-sm"
    >
      <span className="mr-1 text-lg">＋</span> Add page
    </button>
  );
}
