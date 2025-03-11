'use strict';

function getElementWidth(content, padding, border) {
  const result =
    Number.parseFloat(content) +
    Number.parseFloat(padding) * 2 +
    Number.parseFloat(border) * 2;
  return result;
}

console.log('Total element width:', getElementWidth('50px', '8px', '4px')); // 74
console.log('Total element width:', getElementWidth('60px', '12px', '8.5px')); // 101
console.log('Total element width:', getElementWidth('200px', '0px', '0px')); // 200
