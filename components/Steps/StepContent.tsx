import React from "react";
import InfoStep from "@/components/Steps/InfoStep";
import DetailsPage from "@/components/Steps/DetailsPage";
import EndingPage from "@/components/Steps/EndingPage";
import OtherPage from "@/components/Steps/OtherPage";
import { StepContentProps } from "./utils/types";

function StepContent({ activeId, pages, onSelect }: StepContentProps) {
  const currentIdx = pages.findIndex((p) => p.id === activeId);
  const isLast = currentIdx === pages.length - 1;
  const nextPage = !isLast ? pages[currentIdx + 1] : null;

  console.log(isLast);
  return (
    <>
      <section className="mt-1">
        {(() => {
          switch (activeId) {
            case "info":
              return <InfoStep />;
            case "details":
              return <DetailsPage />;
            case "other":
              return <OtherPage />;
            case "ending":
              return <EndingPage />;
            default: {
              const page = pages.find((p) => p.id === activeId);
              return (
                <div className="p-4 bg-gray-50 rounded">
                  <h2 className="text-lg font-semibold mb-2">
                    {page?.title || "Untitled Page"}
                  </h2>
                  <p>New Page Content</p>
                </div>
              );
            }
          }
        })()}
        <div className="mt-4  flex justify-start">
          <button
            onClick={() => nextPage && onSelect(nextPage.id)}
            disabled={!nextPage}
            className="
            px-4 py-2 bg-blue-600 text-white rounded cursor-pointer
            
            hover:disabled:bg-gray-300 hover:bg-blue-700
            transition
          "
          >
            {isLast ? "Done" : "Next"}
          </button>
        </div>
      </section>
    </>
  );
}

export default StepContent;
