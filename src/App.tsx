import Footer from "./components/Footer";
import { servicePages } from "./data/data";
import ServicePage from "./pages/ServicePage";
import Services from "./pages/Services";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>,
    },
    {
      path: "/services/:serviceId",
      element: <ServicePage data={servicePages}/>,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
