import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Modules/Home/Home.component";
import Stories from "./Modules/Stories/Stories.component";
import HomeRoute from "./Routes/HomeRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeRoute />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "stories",
        element: <Stories />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />;
    </div>
  );
}

export default App;
