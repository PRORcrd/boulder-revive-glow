import { createFileRoute } from "@tanstack/react-router";
import engineeringAsset from "@/assets/boulder-engineering.jpg.asset.json";
import { BranchPage } from "@/components/branch-page";

export const Route = createFileRoute("/branche/engineering")({
  head: () => ({
    meta: [
      { title: "Engineering vacatures | Boulder Detachering" },
      { name: "description", content: "Vind jouw volgende technische opdracht in installatie-, elektro- of werktuigbouwkunde via Boulder Engineering." },
      { property: "og:title", content: "Engineering vacatures | Boulder" },
      { property: "og:description", content: "Technische vacatures en persoonlijke begeleiding voor engineers en projectprofessionals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EngineeringPage,
});

const vacancies = [
  {
    slug: "projectleider-bouwkunde",
    title: "Projectleider Bouwkunde",
    place: "Regio Amersfoort",
    hours: "32–40 uur",
    tag: "Tijdelijk",
    description: "Stuur het projectteam aan en bewaak budget, planning en kwaliteit van bouwkundige projecten in de energietransitie.",
  },
  {
    slug: "werkvoorbereider-installatietechniek",
    title: "Werkvoorbereider Installatietechniek",
    place: "Regio Amsterdam",
    hours: "32–40 uur",
    tag: "Tijdelijk",
    description: "Word de organisatorische motor achter duurzame werktuigbouwkundige en elektrotechnische installatieprojecten.",
  },
  {
    slug: "projectleider-werktuigbouwkunde",
    title: "Projectleider Werktuigbouwkunde",
    place: "Rotterdam",
    hours: "Fulltime",
    tag: "Tijdelijk",
    description: "Leid technische projecten van ontwerp tot oplevering en houd grip op teams, planning, budget en kwaliteit.",
  },
];

function EngineeringPage() {
  return (
    <BranchPage
      branch="Engineering"
      title="Techniek die"
      accent="vooruitgaat."
      intro="Boulder bemiddelt MBO- en HBO-professionals in elektro- en werktuigbouwkundige installatietechniek. Van werkvoorbereiding tot projectleiding."
      image={engineeringAsset.url}
      imageAlt="Boulder-professionals in gesprek over een technisch project"
      disciplines={["Installatietechniek", "Elektrotechniek", "Werktuigbouwkunde", "Bouwkunde en projectleiding"]}
      vacancies={vacancies}
      contactName="Het Engineering-team"
    />
  );
}