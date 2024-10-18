import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { ALL_ROUTES } from "./utils/route";

const App = () => {
  const router = createBrowserRouter(ALL_ROUTES());
  console.log(ALL_ROUTES());

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
