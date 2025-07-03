import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server"; // ✅ Import this!

export const locales = ["fa", "en"];
export const defaultLocale = "fa";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localeDetection: false,
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  if (!request.cookies.has("NEXT_LOCALE")) {
    response.cookies.set("NEXT_LOCALE", defaultLocale, {
      path: "/",
      sameSite: "lax",
      secure: false, // 🔒 set to true only in production
    });
  }

  return response;
}

export const config = {
  matcher: ["/", "/(fa|en)/:path*", "/((?!_next|_vercel|.*\\..*).*)"],
};
