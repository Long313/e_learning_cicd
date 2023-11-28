"use client";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
function Unit() {
  const t = useTranslations("Index");
  const languageCurrent = useSelector(
    (state: any) => state?.language?.language
  );
  console.log("language current", languageCurrent);
  return <div className="text-white">{t("hello")}</div>;
}

export default Unit;
