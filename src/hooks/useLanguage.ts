import { LanguageContext } from "@/components/providers/LanguageProvider";
import { useContext } from "react";

// 1. This hook is used to access the locale and setLocale values from the Language Provider.
// 2. It also ensures that the context is not null,and helps keep the code
// cleaner by avoiding repetitive calls to useContext manually!

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context)
    throw new Error(
      "useLanguage's hook must be used within the Language Provider!"
    );
  return context;
}
