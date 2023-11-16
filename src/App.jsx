import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Header from "./components/header"
import MenPage from "./page/men_page";
import ShopPage from "./page/shop_page";
import './css/app.css';
import WomenPage from "./page/women_page";
import KidsPage from "./page/kids_page";
import Footer from "./components/footer";
import NotFound from "./page/not_found";
import ProductDetailPage from "./page/product_detail_page";
import HomePage from "./page/home_page";
import CartPage from "./page/cart_page";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import LoginPage from "./page/login_page";
import SignUpPage from "./page/sign_up_page";

const router = createBrowserRouter([
  {
    path: '/',
    element: <> <Header /> <HomePage /> <Footer /> </>,
    children: [
      {
        index: true,
        element: <ShopPage />
      },
      {
        path: 'men',
        element: <MenPage />
      },
      {
        path: 'women',
        element: <WomenPage />
      },
      {
        path: 'kids',
        element: <KidsPage />
      },
      {
        path: 'cart',
        element: <CartPage />
      },
      {
        path: 'product/:product',
        element: <ProductDetailPage />
      },
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'signup',
        element: <SignUpPage />
      }
    ]
  },
  {
    path: '/*',
    element: <> <Header /> <NotFound /> <Footer/> </>
  }
])

const theme = createTheme({
  palette: {
    mode: 'dark',
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App
