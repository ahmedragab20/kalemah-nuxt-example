import ar from "@/localizations/ar";
import en from "@/localizations/en";
import {
  Doc
} from "kalemah";

export default defineNuxtPlugin(() => {
  const doc = new Doc({
    default: "en",
    localizations: [
      {
        name: "en",
        dir: "ltr",
        content: en
      },
      {
        name: "ar",
        dir: "rtl",
        content: ar
      },
    ],
  });
})
