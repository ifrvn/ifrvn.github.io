import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "NoGA",
      description: "What's comming here?",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "摸鱼笔记",
      description: "咦，会有什么呢？",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
