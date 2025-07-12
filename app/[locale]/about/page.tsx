export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default function AboutPage() {
  return (
    <main>
      <h1>About Uss</h1>
      <p>This is the About page for locale</p>
    </main>
  );
}
