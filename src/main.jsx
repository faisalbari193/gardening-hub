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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: Home },
      { path: "/signin", Component: SignIn },
      { path: "/signup", Component: SIgnUp },
      {
        path: "/share-tips",
        element: (
          <PrivateRoute>
            {" "}
            <ShareTips></ShareTips>{" "}
          </PrivateRoute>
        ),
      },
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
        path: "/my-tips",
        element: (
          <PrivateRoute>
            {" "}
            <MyTips />{" "}
          </PrivateRoute>
        ),
      },
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
