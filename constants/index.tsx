import { Bell, Home, Mail, MoreHorizontal, Search, User } from "lucide-react";
export const sidebarLinks = [
  {
    imgURL: <Home size={30} />,
    route: "/",
    label: "Home",
  },
  {
    imgURL: <Search size={30} />,
    route: "/search",
    label: "Explore",
  },
  {
    imgURL: <Bell size={30} />,
    route: "/activity",
    label: "Notifications",
  },
  {
    imgURL: <Mail size={30} />,
    route: "/create-thread",
    label: "Create Tweet",
  },
  {
    imgURL: <MoreHorizontal size={30} />,
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: <User size={30} />,
    route: "/profile",
    label: "Profile",
  },
];

export const profileTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];
