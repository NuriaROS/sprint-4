// Exercise 1: Get the array of all directors.

// S'ha de mostrar per pantalla a l'usuari/ària només els directors de les pel·lícules.
// Per obtenir l'array de directors/es, has de crear la funció getAllDirectors().
// No has de fer el renderitzat del resultat en aquesta funció, ha de retornar l'array de directors. L'objectiu és mantenir cada funció amb una única responsabilitat.
// Ajuda: hauràs d'implementar un bucle.map que recorri tot l'array de pel·lícules, extraient només el camp director de cadascuna (no oblidis que cada pel·lícula és un objecte, que conté el camp que ens interessa "director").

function getAllDirectors(movies) {
  // arreglo.map(function(elementoActual, indice, arregloOriginal) {  ... código });
  const result = movies.map((directores) => directores.director);

  return result;
}

// Exercise 2: Get the films of a certain director

function getMoviesFromDirector(movies, director) {
  const peliculasDirector = movies.filter((pelis) => pelis.director == director);
  return peliculasDirector;
}
// Exercise 3: Calculate the average of the films of a given director.

// Genial!, ja tens l'array de pel·lícules per a un/a determinat/da director/a.
// Per a tenir més informació d'aquest/a director/a, es demana calcular la mitjana de les puntuacions de les seves pel·lícules.
// Per a això, hauràs d'implementar la funció moviesAverage(), la qual rep un array de pel·lícules i retorna la nota mitjana, amb dos decimals.
// Ajuda: com vols obtenir un únic valor, el mètode .reduce() pot ser d'utilitat.

function moviesAverageOfDirector(movies, director) {
  const peliculas = movies.filter((pelis) => pelis.director == director);
  return moviesAverage(peliculas);
}

function moviesAverage(peliculas) {
  const mediascore = peliculas.reduce((media, film) => {
      return (media += film.score.toFixed(2) / peliculas.length);
  }, 0);
  return +mediascore.toFixed(2);
}
// Exercise 4:  Alphabetic order by title

// Ara en aquest exercici i el següent implementaràs la lògica per a ordenar les pel·lícules, part fonamental en qualsevol eina de visualització de dades.
// En aquest apartat, hauràs de crear una funció, que rebent un array de pel·lícules, el retorni ordenat alfabèticament per títol.
// Només s'han de retornar les 20 primeres pel·lícules ordenades.
// Ajuda: Per a saber si has de retornar un array amb tota la informació de les pel·lícules o un array que contingui només el nom de les pel·lícules, analitza l'arxiu amb els tests anomenat "films.spec.js" i revisa els tests de l'exercici 4.

function orderAlphabetically(movies) {
  //con array
  const newArray = movies.map((movie) => movie.title);
  const sortTitle = newArray.sort();
  sortTitle.length = 20;
  return sortTitle;

  //con objeto
  //   const newArray = array.map((movie) => movie);
  //   sortTitle = array.sort((a, b) => {
  //       if (a.title.toLowerCase() < b.title.toLowerCase()) {
  //           return -1;
  //       }
  //       if (a.title.toLowerCase() > b.title.toLowerCase()) {
  //           return 1;
  //       }
  //       return 0;
  //   });
  //   sortTitle.slice(0, 20);
  //   return sortTitle;
}

// Exercise 5: Order by year, ascending

// En aquesta ocasió, hauràs d'implementar una funció que rebent un array de pel·lícules, retorna un array de pel·lícules ordenades per any.
// Com podràs observar, hi ha moltes pel·lícules que coincideixen en un mateix any. Per a ordenar aquestes pel·lícules que tenen el mateix any, s'ha de fer per ordre alfabètic del títol.

function orderByYear(movies) {
  const newArray = movies.map((movie) => movie);
  const sortYear = newArray.sort((a, b) => {
    if (a.year < b.year) {
      return -1;
    } else if (a.year > b.year) {
      return 1;
    } else if (a.year == b.year) {
      if (a.title < b.title) {
        return -1;
      } else if (a.title > b.title) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  return sortYear;
}

// Exercise 6: Calculate the average of the movies in a category

// Hauràs de crear una funció que rebi una categoria de pel·lícula,  i calculi la mitjana de nota d'aquesta categoria (sobre l'array de totes les pel·lícules).
// Per a facilitar-te la implementació, hauràs d'usar la funció creada en l'exercici 3. Primer has d'obtenir les pel·lícules d'una determinada categoria, i després cridar a moviesAverage(), per a calcular la seva mitjana.
// Aquí radica la potència de les funcions, pots reutilitzar-les tantes vegades com vulguis!

function moviesAverageByCategory(movies, category) {
  const encontrados = [];
  const resultMap = movies.map((buscarGenero) => {
    const buscarCategoria = buscarGenero.genre;
    const result = buscarCategoria.filter((filtrarGenero) => {
      if (filtrarGenero.toLowerCase() === category.toLowerCase()) {
        console.log('encontrado');
        encontrados.push(buscarGenero);
      } else {
        console.log('no encontrado');
      }
    });
    console.log(encontrados);
  });
  return moviesAverage(encontrados);
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
