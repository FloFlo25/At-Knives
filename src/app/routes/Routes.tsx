import { RouteObject } from "react-router-dom";
import { CreateLobby } from "../../features/home/narator/CreateLobby/CreateLobby";
import { Home } from "../../features/home/Home";
import { JoinLobby } from "../../features/home/player/JoinLobby/JoinLobby";
import { NoMatch } from "../../shared/components/NoMatch";
import { getEnvVarUrl } from "../helperFunctions";

const baseURL = getEnvVarUrl();

export const routes: RouteObject[] = [
  {
    path: baseURL,
    element: <Home />,
  },
  {
    path: "join",
    element: <JoinLobby />,
  },
  {
    path: "create",
    element: <CreateLobby />,
  },
  { path: "*", element: <NoMatch /> },
];
