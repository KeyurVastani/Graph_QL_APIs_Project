import "./App.css";
import NavBar from "./components/NavBar";
import { useRoutes } from "react-router-dom";
import { router } from "./router";

function App() {
  const element = useRoutes(router);

  return (
    <div className="App">
      <NavBar />
      {element}
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <Profile /> */}
      {/* <CreateQuote /> */}
      {/* <Home /> */}
    </div>
  );
}

export default App;
