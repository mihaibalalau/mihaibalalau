window.addEventListener('DOMContentLoaded', () => {
    document.body.append(
        ol({
            className: 'column',
            children: Array(10).fill(0).map(
                () => li({
                    children: [
                        simpleMultiplication()
                    ]
                })
            )
        })
    );

    renderMathInElement(document.body, {
        delimiters: [{
            left: '$$',
            right: '$$',
            display: true
        },
        {
            left: '$',
            right: '$',
            display: false
        },
        {
            left: '\\(',
            right: '\\)',
            display: false
        },
        {
            left: '\\[',
            right: '\\]',
            display: true
        }
        ],
        // • rendering keys, e.g.:
        throwOnError: false
    });
});

const el = (tag, options) => {
    const el = document.createElement(tag);

    if (options.className) {
        el.className = options.className
    }

    if (options.children) {
        el.append(...options.children);
    }

    if (options.text) {
        el.innerText = options.text;
    }

    return el;
}

const div = (options) => el('div', options);
const row = (options) => el('div', { ...options, className: 'row ' + (options.className ?? '') });
const column = (options) => el('div', { ...options, className: 'column ' + (options.className ?? '') });
const ol = (options) => el('ol', options);
const li = (options) => el('li', options);


/*
(x+1)^2 =

(x+1)(x-1) = x^2 - 1;

*/

const random = (min = 0, max = 100) => Math.floor(Math.random() * (1 + max - min) + min);

const simpleMultiplication = () => {
    const format = random(1, 3);
    const x = random(0, 50);
    const y = random(0, 50);
    const z = x * y;
    let expression = '';

    switch (format) {
        case 1:
            expression = `${z} = ${y} * x`;
            break;
        case 2:
            expression = `\\frac{${z}}{x} = ${y}`;
            break;
        case 3:
            expression = `\\frac{${z}}{${y}} = x`;
            break;
        default:
            throw new Error('Whoaa!');
    }

    return mathWrapper(expression);
}

const mathWrapper = (expression) => `$$${expression}, x = ?$$`;