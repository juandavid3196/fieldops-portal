import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { mockCopy, type MockCopy } from "@/content/mock-copy";
import { hasLocale, type Locale } from "./config";
import { en } from "./en";
import { es, type Dictionary } from "./es";

const dictionaries: Record<Locale, Dictionary> = { es, en };

/** Current locale from the `[lang]` root segment (Server Components only). */
export async function getLocale(): Promise<Locale> {
  const value = await lang();
  if (!hasLocale(value)) notFound();
  return value;
}

/** Dictionary for the current request's locale (Server Components only). */
export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}

/** Copy for the product mock-ups in the current request's locale (Server Components only). */
export async function getMockCopy(): Promise<MockCopy> {
  return mockCopy(await getLocale());
}

export type { Dictionary, MockCopy };
