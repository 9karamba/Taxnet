
/*       Рендерит фильм                      */
export default function renderFilm(id_film, name_film, place = 'films') {
	let check = localStorage.getItem("film_" + id_film) === name_film ? "checked" : "";

	let film = document.createRange().createContextualFragment(`
		<div class="films" id="`+ id_film +`">
			<input ` + check +` id="film_`+ id_film +`" type="checkbox" 
				onchange="setBookmark(`+ id_film +`,'`+ name_film +`')"; />

			<label for="film_`+ id_film +`">`+ name_film +`</label>
		</div>
		`);

	document.getElementById(place).appendChild(film);
}