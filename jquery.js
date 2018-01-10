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
            $('.row').eq(rowNum).append('<div><p>');

        }
    };

createRows(3);
createCol(0,3);
createCol(1,2);
createCol(2,3);

const $row = $('.row');
const $colInRow = $('.row div');
const $paragraph = $colInRow.find('p')
const $colInFirstRow = $row.eq(0).find('div');
const $colInSecondRow = $row.eq(1).find('div');
const $colInThirdRow = $row.eq(2).find('div');

$paragraph.addClass('description');

const addColResAndSize = ( scrRes, size ) => {
    return 'col-' + scrRes + '-' + size;
};

$colInFirstRow.addClass( addColResAndSize('sm', 4) );
$colInSecondRow.addClass( addColResAndSize('xs', 6) );
$colInThirdRow.addClass( addColResAndSize('md', 3) );

$colInFirstRow.eq(0).attr('id', 'aaa')
$colInFirstRow.eq(1).attr('id', 'ccc');
$colInFirstRow.eq(2).attr('id', 'ooo');

$colInSecondRow.eq(0).css('color', 'red');
$colInSecondRow.eq(1).css('color', 'red');

$colInThirdRow.eq(0).attr('data-product', '300');
$colInThirdRow.eq(1).attr('data-product', '400');
$colInThirdRow.eq(2).attr('data-product', '500');


$paragraph.eq(0).text('Jeden');
$paragraph.eq(1).text('Dwa');
$paragraph.eq(2).text('Trzy');
$paragraph.eq(3).text('Cztery');
$paragraph.eq(4).text('Pięć');
$paragraph.eq(5).text('Sześć');
$paragraph.eq(6).text('Siedem');
$paragraph.eq(7).text('Osiem');
});

