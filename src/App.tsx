import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import SignUp from './ui/(auth)/signup';
import AuthLayout from './layout/AuthLayout';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
