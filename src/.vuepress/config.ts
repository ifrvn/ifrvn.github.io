import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "摸鱼笔记",
  description: "咦，会有什么呢？",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
