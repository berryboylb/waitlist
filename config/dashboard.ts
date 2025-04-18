import { DashboardConfig } from "@/types";

export const dashboardConfig: DashboardConfig = {
  landingNav: [],
  mainNav: [],
  sidebarMain: [
    {
      title: "Overview",
      href: "/dashboard/home",
      icon: "home",
    },

    {
      title: "Guidelines",
      href: "/dashboard/guidelines",
      icon: "line",
    },

    {
      title: "Tips",
      href: "/dashboard/tips",
      icon: "board",
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: "board",
    },
  ],
};
