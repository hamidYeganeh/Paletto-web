import { Button } from "@paletto/ui";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations({ locale: "en" });
  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold bg-primary-500">{t("hello")}</h1>
      <Button>Primary</Button>
    </div>
  );
}
