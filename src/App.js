import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
// import { NotFounView } from 'views/notFoundView';
import { Loading } from 'components/Loader/Loader.js';

const HomePage = lazy(() => import('./views/HomePage'));
const MoviesPage = lazy(() => import('./views/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage'));

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
          {/* <Route path="*" element={<NotFounView />} /> */}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
