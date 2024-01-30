window.addEventListener('DOMContentLoaded', () => {
    document.body.append(
        div([
            div({ text: simpleMultiplication() }),
        ])
    )
});

const el = (tag, options) => {
    const el = document.createElement(tag);

    if (Array.isArray(options)) {
        el.append(...options);
    } else {
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

    return el;
}

const div = (options) => el('div', options);
const span = (options) => el('span', options);

const fraction = (sup, sub) => {
    return div([
        span({ text: sup }),
        span({ text: '/' }),
        span({ text: sub }),
    ])
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
            return `${fraction(z, 'x')} = ${y}`;
        case 3:
            return `${z} = ${y}x`;
        default:
            throw new Error('Whoaa!');
    }
}