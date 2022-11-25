'use strict';
document.write("EXERCISE 8");
document.write("</br>");

function concat(list) {
    for (let i = 0; i< list.length; i++) {
        document.write(list[i]);
    }
}
let list = ["a", "b", "c", "d"];
concat(list);
