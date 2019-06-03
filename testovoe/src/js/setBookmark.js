import getFilms    from './getFilms.js';
import getBookmarks from './getBookmarks.js';

/*       Добавление и удаление из закладок                      */
export default function setBookmark(id_film, name_film) {
	let id = "film_" + id_film;
	
	if(localStorage.getItem(id) && localStorage.getItem(id) !== undefined){
		localStorage.removeItem(id);
		document.getElementById("tab1").checked ? getFilms() : getBookmarks();
	}
	else{
		localStorage.setItem(id, name_film);
	}
}