import { createBrowserRouter } from "react-router-dom";
import { Account } from "./pages/Account";
import { Auth } from "./pages/Auth";
import { Checkout } from "./pages/Checkout";
import { Home } from "./pages/Home";
import { Register } from "./pages/Register";
import { Subscribe } from "./pages/Subscribe";
import { SubscriptionAfterReg } from "./pages/SubscriptionAfterReg";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/auth',
    element: <Auth />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/join',
    element: <SubscriptionAfterReg />,
  },
  {
    path: '/subscribe',
    element: <Subscribe />,
  },
  {
    path: '/account',
    element: <Account />,
  },
  {
    path: '/checkout',
    element: <Checkout />,
  },
])
