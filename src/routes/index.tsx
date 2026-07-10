import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HopeBridge Foundation — Building Bridges of Hope" },
      {
        name: "description",
        content:
          "HopeBridge Foundation empowers communities through education, healthcare, women empowerment and sustainability programs.",
      },
      { property: "og:title", content: "HopeBridge Foundation" },
      {
        property: "og:description",
        content: "A nonprofit building bridges of hope across communities.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <iframe
      src="/hopebridge/index.html"
      title="HopeBridge Foundation"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        border: 0,
      }}
    />
  );
}
