import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.tcbtjaivikkisan.com",
      priority: 1,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/about",
      priority: 0.8,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/panchmahabhoot",
      priority: 0.9,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/vrikshayurveda",
      priority: 0.8,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/farming-methodology",
      priority: 0.8,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/success-stories",
      priority: 0.8,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/education",
      priority: 0.9,
    },
    {
      url: "https://www.tcbtjaivikkisan.com/education/terracefarming",
      priority: 0.9,
    },
  ];
}