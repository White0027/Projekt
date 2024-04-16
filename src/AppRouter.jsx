import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import { GroupClassificationPage, GroupPage, SemesterPage, UserClassificationPage, UserPage } from "./Pages";
import { SearchPage } from "./Pages/SearchPage";
import { EventPage } from "./Pages/EventPage";
import { EventEditPage } from "./Pages/EventEditPage";
import { AccreditationPage } from "./Pages/AccreditationPage";
import { SubjectPage } from "./Pages/SubjectPage";
// import { UserPage, GroupPage } from "./Pages";

export const Routes = [
    {
        path: "/",
        errorElement: <SearchPage />,
        element: <SearchPage />
    },
    {
        path: "/user/:id",
        element: <UserPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/view/:id",
        element: <EventPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/event/edit/:id",
        element: <EventEditPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/accreditation/view/:id",
        element: <AccreditationPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/subject/view/:id",
        element: <SubjectPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/semester/view/:id",
        element: <SemesterPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/userclassification/view/:id",
        element: <UserClassificationPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/groupclassification/view/:id",
        element: <GroupClassificationPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/group/:id",
        element: <GroupPage />,
        errorElement: <SearchPage />,
    },
    {
        path: "/search",
        element: <SearchPage />,
        errorElement: <SearchPage />,
    },
    {
    path: "/search/:phrase",
    element: <SearchPage />,
    errorElement: <SearchPage />,
    },    
]

const router = createBrowserRouter(Routes, {basename: "/granting"});
// const router = createBrowserRouter(Routes);

export const AppRouter = () => <RouterProvider router={router} />