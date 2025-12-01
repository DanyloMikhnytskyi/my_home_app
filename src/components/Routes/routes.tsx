import {
  Router,
  RouterProvider,
  Route,
  RootRoute,
  Outlet,
} from "@tanstack/react-router";
import { Products } from "@/components/Products";
import { Planner } from "@/components/Planner";
import { Sidebar } from "@/components/Sidebar";

function RootLayout() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

const rootRoute = new RootRoute({
  component: RootLayout,
});

const productsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Products />,
});

const calculatorRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/calculator",
  component: () => <Planner />,
});

const router = new Router({
  routeTree: rootRoute.addChildren([productsRoute, calculatorRoute]),
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export function AppRouter() {
  return <RouterProvider router={router} />;
}
