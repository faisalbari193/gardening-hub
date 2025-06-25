import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./Layout/MainLayout";
import AuthProvider from "./Provider/AuthProvider";
import SignIn from "./pages/SignIn";
import SIgnUp from "./pages/SIgnUp";
import ShareTips from "./pages/ShareTips";
import TipDetails from "./pages/TipDetails";
import PrivateRoute from "./Provider/PrivateRoute";
import BrowseTips from "./pages/BrowseTips";
import MyTips from "./pages/MyTips";
import UpdateTip from "./pages/UpdateTip";
import ExploreGardeners from "./pages/ExploreGardeners";
import { ThemeProvider } from "./Provider/ThemeContext";
import ErrorPage from "./pages/ErrorPage";
import ShareTip from "./pages/ShareTips";
import DashboardLayout from "./pages/DashboardLayout";
import EventDetails from "./components/EventDetails";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/aboutUs", Component: AboutUs },
      { path: "/contact", Component: Contact },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SIgnUp },
      {
        path: "/tip-details/:id",
        element: (
          <PrivateRoute>
            <TipDetails></TipDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gardening-server-coral.vercel.app/tipsall/${params.id}`
          ),
      },
      { path: "/browse-tips", Component: BrowseTips },
      {
        path: "/update-tip/:id",
        element: (
          <PrivateRoute>
            <UpdateTip />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://gardening-server-coral.vercel.app/tipsall/${params.id}`
          ),
      },
      {
        path: "/explore",
        Component: ExploreGardeners,
        loader: () =>
          fetch("https://gardening-server-coral.vercel.app/gardener"),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "share-tip",
        element: <ShareTip />,
      },
      {
        path: "my-tips",
        element: <MyTips />,
      },
      {
        path: "event/:id", // ✅ Add this route for event details
        element: <EventDetails />,
      },
    ],
  },
  { path: "*", Component: ErrorPage },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </ThemeProvider>
  </StrictMode>
);
