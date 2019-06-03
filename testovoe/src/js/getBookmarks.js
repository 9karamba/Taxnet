import renderFilm from './renderFilm.js';
let count_films  = 0; 

/*       Получает список фильмов добаленных  закладки               */
export default function getBookmarks(render = true) {
	document.getElementById("show-more2").style.display = "block";
	let child = 0;

	if(render){
		document.getElementById('bookmarks').innerHTML = "";
		document.getElementById('films').innerHTML = "";
		count_films  = 0;
	}

    for(count_films; count_films < localStorage.length; count_films++){
		let id = localStorage.key(count_films);

		if(child === 15) break;

		if(id.indexOf("film_") === 0){
			renderFilm(id.replace("film_",""), localStorage.getItem(id), "bookmarks");
			child++;
		}
	}

	if(count_films === localStorage.length){
		document.getElementById("show-more2").style.display = "none";
	}

}