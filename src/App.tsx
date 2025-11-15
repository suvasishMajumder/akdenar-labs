import Footer from "./components/Footer";
import Header from "./components/Header";
import { servicePages } from "./data/data";
import NotFoundPage from "./pages/NotFoundPage";
import ServicePage from "./pages/ServicePage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
       
          <div>Hello World</div>
     
        </>
      ),
    },
    {
      path: "/services/:serviceId",
      element: (
        <>

          <ServicePage data={servicePages} />

        </>
      ),
    },

    {
path:"*",
element:(

  <>
  <NotFoundPage />
  </>
)

    }
  ]);

  return (
    <>
    <Header />
      <RouterProvider router={router} />
      <Footer />
    </>
  );
};

export default App;
