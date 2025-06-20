import React from "react";
import InfoStep from "@/components/Steps/InfoStep";
import DetailsPage from "@/components/Steps/DetailsPage";
import EndingPage from "@/components/Steps/EndingPage";
import OtherPage from "@/components/Steps/OtherPage";

function FormsPage({ activeId }: { activeId: string }) {
  return (
    <>
      <section className="mt-1">
        {activeId === "info" && <InfoStep />}
        {activeId === "details" && <DetailsPage />}
        {activeId === "other" && <OtherPage />}
        {activeId === "ending" && <EndingPage />}
      </section>
      {activeId === "ending" && (
        <button
          type="submit"
          className="mt-6 rounded bg-blue-600 px-6 py-2 text-white disabled:opacity-50"
        >
          Submit
        </button>
      )}
    </>
  );
}

export default FormsPage;
