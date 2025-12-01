import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const routerState = useRouterState();

  const items = [
    { to: "/", label: "Products", desc: "Manage products" },
    { to: "/calculator", label: "Kbju calculator", desc: "Calculator" },
  ];

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
        <div className="flex items-center px-3 py-3 border-b">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="flex items-center gap-3 p-1 rounded focus:outline-none hover:opacity-80"
            >
              <div className="text-left">
                <h3 className="text-lg font-semibold">Kbju app</h3>
                <p className="text-xs text-gray-500">products · calculator</p>
              </div>
            </Link>
          </div>
        </div>

        <nav
          className="p-2 flex-1 overflow-y-auto space-y-1"
          aria-label="Primary"
        >
          {items.map((it) => {
            const active = routerState.location.pathname === it.to;
            return (
              <Link
                key={it.to}
                to={it.to}
                aria-current={active ? "page" : undefined}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md transition ${
                  active
                    ? "bg-gray-900 text-white shadow"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                <div className="flex flex-col text-sm text-left">
                  <span className="font-medium">{it.label}</span>
                  {it.desc && (
                    <span className="text-xs text-gray-400">{it.desc}</span>
                  )}
                </div>
              </Link>
            );
          })}
        </nav>
      </aside>

      {open && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="relative w-72 max-w-full bg-white h-full shadow-xl">
            <div className="flex items-center justify-between px-4 py-3 border-b">
              <div className="text-left">
                <h3 className="text-lg font-semibold">Kbju app</h3>
                <p className="text-xs text-gray-500">products · calculator</p>
              </div>

              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="h-10 w-10 rounded-md bg-white/80 border flex items-center justify-center"
              >
                ✕
              </button>
            </div>

            <nav className="p-4 space-y-2">
              {items.map((it) => {
                const active = routerState.location.pathname === it.to;
                return (
                  <Link
                    key={it.to}
                    to={it.to}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`w-full text-left px-3 py-2 rounded-md flex items-center gap-3 transition ${
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
          </div>
        </div>
      )}
    </>
  );
}
