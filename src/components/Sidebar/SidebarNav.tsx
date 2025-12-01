import { Link, useRouterState } from "@tanstack/react-router";
import type { SidebarItem } from "./types";

interface SidebarNavProps {
  items: SidebarItem[];
  onItemClick?: () => void;
}

export function SidebarNav({ items, onItemClick }: SidebarNavProps) {
  const routerState = useRouterState();

  return (
    <nav className="space-y-1 p-2 flex-1 overflow-y-auto">
      {items.map((it) => {
        const active = routerState.location.pathname === it.to;

        return (
          <Link
            key={it.to}
            to={it.to}
            onClick={onItemClick}
            aria-current={active ? "page" : undefined}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition ${
              active
                ? "bg-gray-900 text-white shadow"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <div className="flex flex-col text-sm">
              <span className="font-medium">{it.label}</span>
              {it.desc && (
                <span className="text-xs text-gray-400">{it.desc}</span>
              )}
            </div>
          </Link>
        );
      })}
    </nav>
  );
}
