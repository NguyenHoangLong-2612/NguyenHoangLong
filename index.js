const TMDB_API_KEY = "9b7c3ede447b14c5e0e9d33a137ddac9"; 
const URL_TRENDING_MOVIE = "https://api.themoviedb.org/3/trending/movie/week"; 

const movieTrendingRow = document.querySelector(".movie-trending-row");
console.log(movieTrendingRow)

const data = fetch(URL_TRENDING_MOVIE + "?api_key="+TMDB_API_KEY)
.then(function(response) {
    let data = response.json()
    return data
}).then(function(data) {
    const dsMovieTrending = data.results;
    let output ="";
    for (let index=0;index <=  5;index+=1) {
      let movie = dsMovieTrending[index];
        output += `
            <div class="col-lg-2">
                <div class="movie">
                    <div class="movie-image">
                        <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" alt="">
                    </div>
                    <div class="movie-desc">
                        <p>${movie.original_title}</p>
                    </div>
                </div>
            </div>
            `;


    }    
    movieTrendingRow.innerHTML= output;

})
const movieTrendingPopular = document.querySelector(".movie-popular-row");

fetch("./json/db.json")
  .then(function(response) {
    let data = response.json()
    return data;
  })
  .then(function(data) {
    const dsMoviePopular = data;
    let output = "";
    for (let index = 0; index <= 5; index += 5) {
      let movie = dsMoviePopular[index];
      output += `
      <div class="col-lg-2">
        <div class="shop">
          <div class="shop-image">
            <img src="${movie.images_url}" alt="">
          </div>
          <div class="shop-desc">
            <p>${movie.title}</p>
          </div>
        </div>
      </div>
      `;
    }
    movieTrendingPopular.innerHTML = output;
  });
  fetch("./json/movie-trending.json")
  .then(function(response) {
    let data = response.json();
    return data;
  })
  .then(function(data) {
    console.log(data);
  });



