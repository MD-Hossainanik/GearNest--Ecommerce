import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Pages
import MainLayout from "./layout/MainLayout.jsx";
import HomePage from "./page/HomePage.jsx";
import AboutPage from "./page/AboutPage.jsx";
import ContactPage from "./page/ContactPage.jsx";
import ProductsPage from "./page/ProductsPage.jsx";
import SingleProductPage from "./page/SingleProductPage.jsx";
import CartPage from "./page/CartPage.jsx";




//UI
import NotFound from "./ui/NotFound.jsx";

import { GlobalStyle } from "./GlobalStyle.jsx";
import { ThemeProvider } from "styled-components";
import { AppProvider } from "./context/ProductContext.jsx";
import FeatureProductPage from './page/FeatureProductPage';
import { FilterProvider } from "./context/Filter_Context.jsx";


function App() {

  const theme = {
    colors: {
      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",

      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",

      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",

      shadowSupport: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },

    media: {
      mobile: "768px",
      tab: "998px",
    },
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "featureProductPage/:tags?",
          element: <FeatureProductPage/>,
        },
        {
          path: "products",
          element: <ProductsPage />,
        },
        {
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "singleproduct/:id",
          element: <SingleProductPage />,
        },
        {
          path: "cart",
          element: <CartPage />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return (
    <>
      <AppProvider>
        <FilterProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router}></RouterProvider>
          </ThemeProvider>
        </FilterProvider>
      </AppProvider>
    </>
  );
}

export default App;
