import {
  Router,
  RouterProvider,
  Route,
  RootRoute,
  Outlet,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { Products } from "@/components/Products";
import { Planner } from "@/components/Planner";
import { Sidebar } from "@/components/Sidebar";

function RootLayout() {
  const navigate = useNavigate();
  const routerState = useRouterState();

  const currentView =
    routerState.location.pathname === "/calculator" ? "calculator" : "products";

  const handleChangeView = (view: "products" | "calculator") => {
    if (view === "products") {
      navigate({ to: "/" });
    } else {
      navigate({ to: "/calculator" });
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar currentView={currentView} onChangeView={handleChangeView} />
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
