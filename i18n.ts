import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  const selectedLocale = locale ?? "fa";

  return {
    messages: (await import(`./messages/${selectedLocale}.json`)).default,
    now: new Date(),
    timeZone: "Europe/Vienna",
    locale: selectedLocale,
  };
});
