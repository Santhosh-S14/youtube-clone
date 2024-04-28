import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Watch from "./components/Watch";
import MainContainer from "./components/MainContainer";
import SearchResultsPage from "./components/SearchResultsPage";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watch />,
        },
        {
          path: "/results",
          element: <SearchResultsPage />,
        },
      ],
    },
  ]);
  return (
    <KindeProvider
      clientId={process.env.REACT_APP_VITE_KINDE_CLIENT_ID}
      domain={process.env.REACT_APP_VITE_KINDE_DOMAIN}
      redirectUri={process.env.REACT_APP_VITE_KINDE_REDIRECT_URL}
      logoutUri={process.env.REACT_APP_VITE_KINDE_LOGOUT_URL}
    >
      <div>
        <Provider store={appStore}>
          <Header />
          <RouterProvider router={appRouter} />
        </Provider>
      </div>
    </KindeProvider>
  );
}

export default App;
