
/*       Получает список выбранных тегов                      */
export default function getCheckedTags(){
  let checkboxes = document.getElementsByClassName('tag');
  let checkboxesChecked = []; 

  for (let index = 0; index < checkboxes.length; index++) {

     if (checkboxes[index].checked) {
        checkboxesChecked.push(checkboxes[index].value); 
     }

  }
  return checkboxesChecked; 
}