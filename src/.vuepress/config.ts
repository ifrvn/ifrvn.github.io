import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "摸鱼笔记",
      description: "咦，会有什么呢？",
    },
    "/en/": {
      lang: "en-US",
      title: "NoGA",
      description: "What's comming here?",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
