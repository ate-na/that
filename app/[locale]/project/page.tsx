export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default function ProjectPage() {
  return (
    <main>
      <h1>Projects</h1>
      <p>This is the Project page for locale</p>
    </main>
  );
}
