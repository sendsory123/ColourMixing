const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const mixedColor = document.getElementById('mixedColor');

const colors = [
    '#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#00FFFF',
    '#0000FF', '#8B00FF', '#FF00FF', '#FF1493', '#FF69B4',
    '#FFD700', '#ADFF2F', '#32CD32', '#20B2AA', '#808080',
    '#000000', '#800000', '#800080', '#008000', '#008080',
    '#000080', '#FFFFFF', '#FFC0CB', '#FFFACD', '#F5F5F5',
    '#A9A9A9', '#D3D3D3', '#DCDCDC', '#F0F8FF', '#FAEBD7'
];

color1.style.backgroundColor = colors[0];
color2.style.backgroundColor = colors[1];
mixedColor.style.backgroundColor = mixColors(colors[0], colors[1]);

color1.addEventListener('dragstart', dragStart);
color2.addEventListener('dragstart', dragStart);
mixedColor.addEventListener('dragover', dragOver);
mixedColor.addEventListener('drop', drop);

function dragStart(event) {
    event.dataTransfer.setData('color', event.target.style.backgroundColor);
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    const color1 = event.dataTransfer.getData('color');
    const color2 = event.target.style.backgroundColor;
    mixedColor.style.backgroundColor = mixColors(color1, color2);
}

function mixColors(color1, color2) {
    const c1 = hexToRgb(color1);
    const c2 = hexToRgb(color2);
    const mixedColor = {
        r: Math.floor((c1.r + c2.r) / 2),
        g: Math.floor((c1.g + c2.g) / 2),
        b: Math.floor((c1.b + c2.b) / 2)
    };
    return rgbToHex(mixedColor);
}

function hexToRgb(hex) {
    return {
        r: parseInt(hex.substring(1, 3), 16),
        g: parseInt(hex.substring(3, 5), 16),
        b: parseInt(hex.substring(5, 7), 16)
    };
}

function rgbToHex(color) {
    return "#" + componentToHex(color.r) + componentToHex(color.g) + componentToHex(color.b);
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
