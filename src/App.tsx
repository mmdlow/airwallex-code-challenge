import { BrowserRouter, Route, RouteObject, Routes } from 'react-router';
import { Flex } from '@radix-ui/themes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Flex direction={'column'} height={'100vh'}>
          <Header />

          <Routes>
            {pages.map(page => (
              <Route key={page.path} path={page.path} element={page.element} />
            ))}
          </Routes>

          <Footer />
        </Flex>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
