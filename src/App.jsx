import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UsersList from "./components/UsersList";
import ErrorPage from "./components/ErrorPage";
import Idea from "./pages/Idea";

const router = createBrowserRouter([
  { path: "/", element: <UsersList />, errorElement: <ErrorPage /> },
  { path: "/idea/:id", element: <Idea /> },
]);

function App() {
  return (
    <div className="px-3 md:lg:xl:px-40 py-20">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
