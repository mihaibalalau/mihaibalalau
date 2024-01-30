window.addEventListener('DOMContentLoaded', () => {
    document.body.append(
        div([
            div({ text: simpleMultiplication() }),
            div({ text: simpleMultiplication() }),
            div({ text: simpleMultiplication() }),
            div({ text: simpleMultiplication() }),
            div({ text: simpleMultiplication() }),
        ])
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
    let expression = '';

    switch (format) {
        case 1:
            expression = `${z} = ${y} * x`;
            break;
        case 2:
            expression = `${z} / x = ${y}`;
            break;
        case 3:
            expression = `${z} / ${y} = x`;
            break;
        default:
            throw new Error('Whoaa!');
    }

    return mathWrapper(expression);
}

const mathWrapper = (expression) => `$$${expression}$$`;