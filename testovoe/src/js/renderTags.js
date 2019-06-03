const tags = require('../jsons/tags.json');

/*       Рендерит теги                      */
export default function renderTags(){

	for (let i = 0; i < tags.length; i++) {
		let tag = document.createRange().createContextualFragment(`
			<div class="tags">
				<input id="tag_`+ i +`" type="checkbox" class="tag" 
					onchange="getFilms()" value="`+ tags[i] +`"; />

				<label for="tag_`+ i +`">`+ tags[i] +`</label>
			</div>
		`);

		document.getElementById('tags').appendChild(tag);
	}

}
