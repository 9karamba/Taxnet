import getCheckedTags from './getCheckedTags.js';
import renderFilm from './renderFilm.js';
const films = require('../jsons/films.json');

/*       Получает список фильмов                      */
export default function getFilms(render = true) {
	document.getElementById("show-more1").style.display = "block";
	let search_value = new RegExp ('^'+document.getElementById('search-form').value, 'i');
	let checkboxes   = getCheckedTags();
	let child 		 = 0;
	let count_films  = 0; 

/*       Если не нажата кнопка "показать еще", то ищет подходящие фильмы
		 Если нажата, то выводит остальные фильмы
*/
	if(render){
		document.getElementById('bookmarks').innerHTML = "";
		document.getElementById('films').innerHTML = "";
	}
	else{
		count_films = parseInt(document.getElementById("films").children[document.getElementById("films").children.length-1].id) + 1;
	}

	while(count_films < films.length && child !== 15){
		let film = films[count_films];

		if (search_value.test(film.title)){

			if (checkboxes.length !== 0){

				outer: for (let i = 0; i < checkboxes.length; i++) {
					for (let j = 0; j < film.tags.length; j++) {

						if (film.tags[j]===checkboxes[i]){
							renderFilm(count_films, film.title);
							child++;
							break outer;
						}

					}
				}

			}
			else{
				renderFilm(count_films, film.title);
				child++;
			}
		}
		count_films++;
	}
	
	if(count_films === films.length)
		document.getElementById("show-more1").style.display = "none";


}