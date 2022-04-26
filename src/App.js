
import { Login } from "./components/Login";
import { Suspense, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes'
import Home from "./components/Home";
import Search from "./components/Search/Search";
import NavBar from "./components/NavBar/NavBar";
import { MenuProvider } from "./context/menuContext";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import useToken from "./hooks/useToken";

function App() {


  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="h-100">
      <MenuProvider>
        <BrowserRouter>
          <Suspense fallback={<p>Loading...</p>}>
            <NavBar />
            <Routes>
              <Route exact path={ROUTES.MENU} element={<Home />} />
              <Route exact path={ROUTES.SEARCH} element={<Search />} />
              <Route exact path={ROUTES.NOT_FOUND} element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </MenuProvider>
    </div>



  );
}

export default App;
