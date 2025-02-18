import { BrowserRouter, Route, RouteObject, Routes } from 'react-router';
import { Flex } from '@radix-ui/themes';
import Header from './views/layout/Header';
import Footer from './views/layout/Footer';
import LandingPage from './views/landing/LandingPage';
import Error404 from './views/404';

const pages = [
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '*',
    element: <Error404 />,
  },
] satisfies RouteObject[];

function App() {
  return (
    <BrowserRouter>
      <Flex direction={'column'} width={'100vw'} height={'100vh'}>
        <Header />

        <Routes>
          {pages.map(page => (
            <Route key={page.path} path={page.path} element={page.element} />
          ))}
        </Routes>

        <Footer />
      </Flex>
    </BrowserRouter>
  );
}

export default App;
