"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import { AppProps } from "next/app";

interface RootLayoutProps extends AppProps {
  children: ReactNode;
  params: ParamProps;
}

interface ParamProps {
  locale: string;
}

export default function Home({
  children,
  params: { locale },
}: RootLayoutProps) {
  console.log("locale", locale);
  const t = useTranslations("Index");
  const router = useRouter();
  const currentUser = useSelector((state: any) => state.auth.login.currentUser);
  if (currentUser) {
    const { user, token, refreshToken } = currentUser;
    localStorage.setItem("userInfor", JSON.stringify(user));
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("refreshToken", JSON.stringify(refreshToken));
  }
  useEffect(() => {
    const tokenString: string | null = localStorage.getItem("token");
    if (tokenString) {
      const token: string = JSON.parse(tokenString);
    } else {
      router.push(`/${locale}/login`);
    }
  }, []);
  return (
    <main className="flex ">
      <h1 className="text-white">{t("hello")}</h1>
      <div>

      </div>
    </main>
  );
}
