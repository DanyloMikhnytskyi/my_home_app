import { useState } from "react";
import type { SidebarItem } from "./SidebarNav.types";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";
import { MobileSidebar } from "./MobileSidebar";

interface DesktopSidebarProps {
  items: SidebarItem[];
  className?: string;
}

export function DesktopSidebar({ items, className }: DesktopSidebarProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="md:hidden p-2">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="h-10 w-10 rounded-md bg-white/80 border shadow flex items-center justify-center"
        >
          ☰
        </button>
      </div>

      <aside
        className={`hidden md:flex flex-col w-64 border-r bg-white ${
          className || ""
        }`}
      >
        <SidebarHeader />
        <SidebarNav items={items} />
      </aside>
      <MobileSidebar items={items} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
