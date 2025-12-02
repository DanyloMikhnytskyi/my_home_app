import type { SidebarItem } from "./SidebarNav.types";
import { SidebarHeader } from "./SidebarHeader";
import { SidebarNav } from "./SidebarNav";

interface MobileSidebarProps {
  items: SidebarItem[];
  open: boolean;
  onClose: () => void;
}

export function MobileSidebar({ items, open, onClose }: MobileSidebarProps) {
  if (!open) return null;

  return (
    <div className="md:hidden fixed inset-0 z-50 flex">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-72 max-w-full bg-white h-full shadow-xl">
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <SidebarHeader />

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="h-10 w-10 rounded-md bg-white/80 border flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <SidebarNav items={items} onItemClick={onClose} />
      </div>
    </div>
  );
}
