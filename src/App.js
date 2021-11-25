import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { HomePage } from './views/HomePage';
import { MoviesPage } from 'views/MoviesPage';
// import { NotFounView } from 'views/notFoundView';
// import './App.css';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        {/* <Route path="/moviespage" element={<NotFounView />} /> */}
      </Routes>
    </>
  );
}

export default App;

// export default App;
// '/' - компонент <HomePage>, домашняя страница со списком популярных кинофильмов.
// '/movies' - компонент <MoviesPage>, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент <MovieDetailsPage>, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент <Cast>, информация о актерском составе. Рендерится на странице <MovieDetailsPage>.
// /movies/:movieId/reviews - компонент <Reviews>, информация об обзорах. Рендерится на странице <MovieDetailsPage>.
