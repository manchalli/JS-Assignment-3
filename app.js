const movies = [
{
title: "Captain America: Civil War ",
genre: "action",
year: 2016,
image: "https://jmstevenson.files.wordpress.com/2016/05/marvel-civil-war-alternate-poster.jpg?w=838"
},
{
   title: "Spider-Man: No Way Home",
   genre: "action",
   year: 2021,
   image: "https://www.tbsnews.net/sites/default/files/styles/infograph/public/images/2021/12/20/3297b6ad-5b32-4e86-96c5-f82c5275fbe8_rw_1920_1.jpg"
   },
{
title: "Joker",
genre: "drama",
year: 2019,
image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
},
{
title: "Knives Out",
genre: "comedy",
year: 2019,
image: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qG59J1Q7rpBc1dvku4azbzcqo8h.jpg"
},
{
title: "The Nun",
genre: "horror",
year: 2018,
image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQKiSaP9uVzCb2clUf2eUAgkf_uzj8KMYs0g1hGvJP-SsqB6A0B"
},
{
title: "Harry Potter And The Cursed Child",
genre: "thrill",
year: 2016,
image: "https://upload.wikimedia.org/wikipedia/en/thumb/8/87/Cursed_Child_new_poster.jpg/220px-Cursed_Child_new_poster.jpg"
},
{
title: "The Jungle Book",
genre: "fantacy",
year: 2016,
image: "https://m.media-amazon.com/images/M/MV5BMTc3NTUzNTI4MV5BMl5BanBnXkFtZTgwNjU0NjU5NzE@._V1_.jpg"
},
];

const recommendBtn = document.getElementById("recommend-btn");
const movieList = document.getElementById("movie-list");

recommendBtn.addEventListener("click", () => {
// Get user's selected genre and year
const selectedGenre = document.getElementById("genre").value;
const selectedYear = document.getElementById("year").value;

// Filter movies based on user's selections
const recommendedMovies = movies.filter(movie => movie.genre === selectedGenre && movie.year == selectedYear);

// Clear the movie list
movieList.innerHTML = "";

// Display recommended movies
recommendedMovies.forEach(movie => {
   // Create movie card
   const movieCard = document.createElement("div");
   movieCard.classList.add("movie-card");

   // Create movie image
   const movieImg = document.createElement("img");
   movieImg.src = movie.image;

   // Create movie title
   const movieTitle = document.createElement("h2");
   movieTitle.textContent = movie.title;

   // Create movie description
   const movieDesc = document.createElement("p");
   movieDesc.textContent = `Genre: ${movie.genre} | Year: ${movie.year}`;

   // Add image, title, and description to movie card
   movieCard.appendChild(movieImg);
   movieCard.appendChild(movieTitle);
   movieCard.appendChild(movieDesc);

   // Add movie card to movie list
   movieList.appendChild(movieCard);
});
});