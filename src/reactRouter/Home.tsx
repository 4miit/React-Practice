import About from "./About";
import Contact from "./Contact";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import Login from "./Login";

export default function Home() {
  const route = createBrowserRouter([
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>ReactRouter</h1>
      <div>
        <Nav />
        <RouterProvider router={route} />
      </div>
    </>
  );
}
