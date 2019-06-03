import './scss/style.scss'

import getFilms    from './js/getFilms.js';
import renderTags  from './js/renderTags.js';
import setBookmark from './js/setBookmark.js';
import getBookmarks from './js/getBookmarks.js';

renderTags();
getFilms();

window.getFilms = getFilms;
window.setBookmark = setBookmark;
window.getBookmarks = getBookmarks;