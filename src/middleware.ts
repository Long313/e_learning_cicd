import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["eng", "vie", "kor", "jap"],

  // Used when no locale matches
  defaultLocale: "eng",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(|vi|ko|ja|en)/:path*"],
};
