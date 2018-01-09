$(function() {

const $body = $('body');


$('<div></div>').addClass('container').prependTo($body);



const createRows = (num) => {
    for(let i = 0; i <= num; i++){
        $('<div></div>').addClass('row').appendTo('.container');

    }
};

createRows(2);


});