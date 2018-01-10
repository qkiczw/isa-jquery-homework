$(function() {

const $body = $('body');


$('<div></div>').addClass('container').prependTo($body);



const createRows = (rowsNum) => {
    for ( let i = 0; i < rowsNum; i++ ) {
        $('<div></div>').addClass('row').appendTo('.container');

    }
};


const createCol = (rowNum, colNum) => {
        for (let i = 0; i < colNum; i++) {
            $('.row').eq(rowNum).append('<div></div>');

        }
    };

createRows(3);
createCol(0,3);
createCol(1,2);
createCol(2,3);

const $row = $('.row');
const $colInRow = $('.row div');





const addColResAndSize = (scrRes, size) => {
    return 'col-' + scrRes + '-' + size;
}


$colInRow.eq(5).addClass( addColResAndSize('md', 6) ).attr('id', 'value');


});

