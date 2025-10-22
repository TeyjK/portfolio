import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://teyj.dev", lastModified: new Date() },
    { url: "https://teyj.dev/#projects", lastModified: new Date() },
    { url: "https://teyj.dev/#skills", lastModified: new Date() },
    { url: "https://teyj.dev/#education", lastModified: new Date() },
    { url: "https://teyj.dev/#contact", lastModified: new Date() }
  ];
}