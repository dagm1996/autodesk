import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import TableauDashboard from "./pages/TableauDashboard";
import SignIn from "./components/SignIn/SignIn";
import PageLayout from "./components/Layout/PageLayout";
import ResearchCard from "./components/Research/ResearchCard";
import Research from "./components/Research/Research";
import Blog from "./components/Blog/Blog";
import ResearchDisplay from "./components/Research/ResearchDisplay";
import BlogDisplay from "./components/Blog/BlogDisplay";
import MainLayout from "./components/Layout/MainLayout";
import SideBar from "./components/SideBar/SideBar";
import ResearchList from "./components/ResearchList/ResearchList";
import BlogList from "./components/BlogList/BlogList";
import UsersList from "./components/UserList/UsersList";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import AdminLanding from "./components/AdminPanel/AdminLanding";
import TableuTiles from "./components/TableuTiles/TableuTiles";
import ManageDashboard from "./components/ManageDashboard/ManageDashboard";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <PageLayout />
      </>
    ),
    children: [
      {
        path: "/",
        element: <TableuTiles />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "research",
        element: <Research />,
      },
      {
        path: "admin",
        element: <AdminPanel />,
        children: [
          {
            path: "",
            element: <AdminLanding />,
          },
          {
            path: "researches",
            element: <ResearchList />,
          },
          {
            path: "blogs",
            element: <BlogList />,
          },
          {
            path: "manage-dashboard",
            element: <ManageDashboard />,
          },
          {
            path: "users",
            element: <UsersList />,
          },
        ],
      },
    ],
  },
  {
    path: "/research/:researchId",
    element: (
      <MainLayout>
        <ResearchDisplay />
      </MainLayout>
    ),
  },
  {
    path: "/blog/:blogId",
    element: (
      <MainLayout>
        <BlogDisplay />
      </MainLayout>
    ),
  },
  {
    path: "/headcount",
    element: (
      <TableauDashboard
        val="HeadcountDashboard-New&#47;Summary"
        pageName={"Headcount"}
      />
    ),
  },
  {
    path: "/attrition",
    element: (
      <TableauDashboard
        val="AttritionDashboard-New&#47;Summary-New"
        pageName={"Attrition"}
      />
    ),
  },
  {
    path: "/compensation-planning",
    element: (
      <TableauDashboard
        val="CompPlanning-Sample&#47;Summary"
        pageName={"Compensation Planning"}
      />
    ),
  },
  {
    path: "/talent-acquisition",
    element: (
      <TableauDashboard
        val="TADashboard&#47;TADashboard-Summary&#47;3f2361b1-0f5e-48f3-990d-513af59e47ca&#47;7cfda2fa-256e-4d08-bc31-989276f88350"
        pageName={"Talent Acquisition"}
      />
    ),
  },
  {
    path: "/recruiter-efficiency",
    element: (
      <TableauDashboard
        val="AttritionDashboard_16801321616130&#47;Summary-New"
        pageName={"Recruiter Efficiency"}
      />
    ),
  },
  {
    path: "/organization-review",
    element: (
      <TableauDashboard
        val="AttritionDashboard_16801321616130&#47;Summary-New"
        pageName={"Organization Review"}
      />
    ),
  },
  {
    path: "/diversity",
    element: (
      <TableauDashboard
        val="AttritionDashboard-New&#47;Summary-New"
        pageName={"Diversity"}
      />
    ),
  },
  {
    path: "/learning",
    element: (
      <TableauDashboard
        val="AttritionDashboard_16801321616130&#47;Summary-New"
        pageName={"Compensation Planning"}
      />
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
