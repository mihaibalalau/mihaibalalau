const style = `
.fraction {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    letter-spacing: 0.001em;
    text-align: center;
}
.fraction > span:nth-child(1) {
    display: block;
    padding: 0.1em;
}
.fraction > span:nth-child(2) {
    border-top: thin solid black;
}
.fraction > span:nth-child(3) {
    display: none;
} 
`;

window.addEventListener('DOMContentLoaded', () => {
    document.body.append(style);

});

const el = (tag, options) => {
    const el = document.createElement(tag);

    if (options.class) {
        el.classList.push(options.class)
    }

    if (options.children) {
        el.append(...options.children);
    }

    if (options.text) {
        el.innerText = options.text;
    }
}

const fraction = (sup, sub) => {
    return el('div', {
        children: [
            el('span', { text: sup }),
            el('span', { text: '/' }),
            el('span', { text: sub }),
        ]
    })
}

/*
(x+1)^2 =

(x+1)(x-1) = x^2 - 1;

*/

const random = (min = 0, max = 100) => Math.floor(Math.random() * (1 + max - min) + min);

const simpleMultiplication = () => {
    const format = random(1, 3);
    const x = random();
    const y = random();
    const z = x * y;

    switch (format) {
        case 1:
            return `${z} = ${y}x`;
        case 2:
            return `${fraction(z,'x')} = ${y}`;
        case 3:
            return `${z} = ${y}x`;
        default:
            throw new Error('Whoaa!');
    }
}