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
import LibraryLayout from './layout/LibraryLayout';
import Library from './pages/Library';
import { Slide, ToastContainer } from 'react-toastify';
import ProtectedRoute from './routes/ProtectedRoutes';
import { getUser } from './redux/features/auth/authSlice';
import ShareMessageProvider from './context/ShareMessageProvider';

store.dispatch(getUser());

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<AuthLayout />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<Signin />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>

        <Route element={<LibraryLayout />}>
          <Route
            path="/library"
            element={
              <ProtectedRoute>
                <Library />
              </ProtectedRoute>
            }
          />
        </Route>
      </>
    )
  );
  return (
    <ShareMessageProvider>
      <Provider store={store}>
        <ToastContainer position="bottom-right" transition={Slide} />
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </ShareMessageProvider>
  );
}

export default App;
