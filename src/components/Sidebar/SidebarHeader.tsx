import { Link } from "@tanstack/react-router";

export function SidebarHeader() {
  return (
    <div className="flex items-center px-3 py-3 border-b">
      <Link
        to="/"
        className="flex items-center gap-3 p-1 rounded hover:opacity-80"
      >
        <div className="text-left">
          <h3 className="text-lg font-semibold">Kbju app</h3>
          <p className="text-xs text-gray-500">products · calculator</p>
        </div>
      </Link>
    </div>
  );
}
