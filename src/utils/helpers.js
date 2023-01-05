/* eslint-disable import/prefer-default-export */
import $ from 'jquery';

export const mergeEmptyCells = () => {
  const emptyCells = $('td:has(p:empty)');
  emptyCells.each((index, emptyCell) => {
    const row = $(emptyCell).parent();
    const cellIndex = $(row).children().index(emptyCell);
    let cellAbove = $(row).prev().children()[cellIndex];
    let rowSpan = 2;

    const isCellAboveEmpty = $.inArray(cellAbove, emptyCells) > 0;

    if (isCellAboveEmpty) {
      cellAbove = $(row).prev().prev().children()[cellIndex];
      rowSpan = 3;
    }

    $(cellAbove).attr('rowSpan', rowSpan);
  });
  $('td:has(p:empty)').remove();
};
