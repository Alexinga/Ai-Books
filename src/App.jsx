import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PremiumPage = lazy(() => import("./pages/PremiumPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AppLayout = lazy(() => import("./pages/AppLayout"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));
const JournalPage = lazy(() => import("./pages/JournalPage"));
// import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";
// import PremiumPage from "./pages/PremiumPage";
// import LoginPage from "./pages/LoginPage";
// import AppLayout from "./pages/AppLayout";
// import ErrorPage from "./pages/ErrorPage";
// import CollectionPage from "./pages/CollectionPage";
// import JournalPage from "./pages/JournalPage";
import { BookProvider } from "./context/BookContext";
import BookItem from "./components/BookItem";
import BooksContainer from "./components/BooksContainer";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";
import FullPageSpinner from "./components/FullPageSpinner";
function App() {
  return (
    <AuthProvider>
      <BookProvider>
        <BrowserRouter>
          <Suspense fallback={<FullPageSpinner />}>
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="about" element={<AboutPage />}></Route>
              <Route path="premium" element={<PremiumPage />}></Route>
              <Route path="Login" element={<LoginPage />}></Route>
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayout />
                  </ProtectedRoute>
                }
              >
                <Route
                  index
                  path="book-list"
                  element={<BooksContainer />}
                ></Route>
                <Route path="collection" element={<CollectionPage />}></Route>
                <Route path="journal" element={<JournalPage />}></Route>
                <Route path="id" element={<BookItem />}></Route>
              </Route>
              <Route path="*" element={<ErrorPage />}></Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </BookProvider>
    </AuthProvider>
    // <BookProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<HomePage />}></Route>
    //       <Route path="about" element={<AboutPage />}></Route>
    //       <Route path="premium" element={<PremiumPage />}></Route>
    //       <Route path="Login" element={<LoginPage />}></Route>
    //       <Route path="app" element={<AppLayout />}></Route>
    //       <Route path="app/:id" element={<BookItem />}></Route>
    //       <Route path="collection" element={<CollectionPage />}></Route>
    //       <Route path="journal" element={<JournalPage />}></Route>
    //       <Route path="*" element={<ErrorPage />}></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </BookProvider>
  );
}

export default App;
