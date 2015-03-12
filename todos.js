//start...

/** Function Define.. **/

/**
 * Find HTML Dom Object by id
 *
 * @param id {String}
 * @returns {HTMLElement}
 */
function getDom(id) {
    return document.getElementById(id);
}


/** Init **/
var todoStringField = getDom("todo_string");
var todoForm = getDom("todo_form");

todoForm.addEventListener('keyup', function(ev) {
    //console.log(ev.keyCode);
    //console.log(todoStringField.value);
    if(ev.keyCode === 13) {
        console.log(todoStringField.value);
        var newTodo = todoStringField.value;
        todoStringField.value = "";
    }
});
