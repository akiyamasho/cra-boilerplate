import Home from "../home/container";
import SearchResults from "../search-results/container";

export const HOME_PATH = "home";

export const mainRoutes = [
    {
        path: `/${HOME_PATH}`,
        exact: false,
        component: Home,
    },
    {
        path: "/",
        exact: false,
        component: SearchResults,
    },
];
