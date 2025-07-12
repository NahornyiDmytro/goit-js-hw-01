function getElementWidth (content, padding, border) {
    const numContent = parseFloat(content);
    const numPadding = parseFloat(padding);
    const numBorder = parseFloat(border);
    const fullBox = (numPadding + numBorder) *2;
    const sumWidth = fullBox + numContent;
    return sumWidth;
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200