import { createFileRoute } from "@tanstack/react-router";
import financeAsset from "@/assets/boulder-finance.jpg.asset.json";
import { BranchPage } from "@/components/branch-page";

export const Route = createFileRoute("/branche/finance")({
  head: () => ({
    meta: [
      { title: "Finance vacatures | Boulder Detachering" },
      { name: "description", content: "Vind jouw volgende financefunctie in controlling, reporting of accountancy via Boulder Finance." },
      { property: "og:title", content: "Finance vacatures | Boulder" },
      { property: "og:description", content: "Financevacatures en persoonlijke begeleiding voor financials die verder willen." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FinancePage,
});

const vacancies = [
  {
    slug: "senior-business-controller",
    title: "Senior Business Controller",
    place: "EDSN · Amersfoort",
    hours: "Fulltime",
    tag: "Vast",
    description: "Vertaal cijfers naar scherp advies en maak als stevige businesspartner impact in het hart van de energiesector.",
  },
  {
    slug: "teamleider-finance",
    title: "Teamleider Finance",
    place: "Zwolle",
    hours: "Fulltime",
    tag: "Vast",
    description: "Geef richting aan een financieel team en bouw aan betrouwbare, efficiënte en toekomstbestendige processen.",
  },
];

function FinancePage() {
  return (
    <BranchPage
      branch="Finance"
      title="Cijfers met"
      accent="betekenis."
      intro="Boulder verbindt HBO- en WO-professionals met financiële functies waarin inzicht en ondernemerschap samenkomen. Van reporting tot business control."
      image={financeAsset.url}
      imageAlt="Financeprofessionals van Boulder in persoonlijk overleg"
      disciplines={["Business controlling", "Financial controlling", "Reporting en grootboek", "Project control en accountancy"]}
      vacancies={vacancies}
      contactName="Het Finance-team"
    />
  );
}