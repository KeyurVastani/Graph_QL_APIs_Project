import CreateQuote from "./components/CreateQuote";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";
import Home from "./components/Home";

export const router = [
  { path: "/", element: <Home /> },
  { path: "/create-quote", element: <CreateQuote /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/profile", element: <Profile /> },
];
