"use client";
import { Button } from "@paletto/ui";
import { ApiClient } from "@paletto/apis";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations();
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold bg-primary-500">{t("hello")}</h1>
      <Button>Primary</Button>
    </div>
  );
}
