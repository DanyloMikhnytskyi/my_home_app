import type { SidebarItem } from "./types";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";

interface DesktopSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export function DesktopSidebar({ items, className }: DesktopSidebarProps) {
  return (
    <aside
      className={`hidden md:flex flex-col w-64 border-r bg-white ${
        className || ""
      }`}
    >
      <SidebarHeader />
      <SidebarNav items={items} />
    </aside>
  );
}
