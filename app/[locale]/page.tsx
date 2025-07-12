import { useTranslations } from "next-intl";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fa" }];
}

export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main>
      <h1>{t("welcome")}</h1>
      <h2>dsdsdsd</h2>
    </main>
  );
}
