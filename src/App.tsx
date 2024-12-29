import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import SignUp from './ui/(auth)/sign-up';
import AuthLayout from './layout/AuthLayout';
import Signin from './ui/(auth)/sign-in';
import { Provider } from 'react-redux';
import store from './redux/store';
import NotFound from './pages/NotFound';
import DashboardLayout from './layout/DashboardLayout';
import Dashboard from './pages/Dashboard';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </>
    )
  );
  return (
    <Provider store={store}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  );
}

export default App;
