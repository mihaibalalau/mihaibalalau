<x-layout>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>

    <p>
        When
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>a</mi>
            <mo>&#x2260;</mo>
            <mn>0</mn>
        </math>,
        there are two solutions to
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mi>a</mi>
            <msup>
                <mi>x</mi>
                <mn>2</mn>
            </msup>
            <mo>+</mo>
            <mi>b</mi>
            <mi>x</mi>
            <mo>+</mo>
            <mi>c</mi>
            <mo>=</mo>
            <mn>0</mn>
        </math>
        and they are
        <math xmlns="http://www.w3.org/1998/Math/MathML" display="block">
            <mi>x</mi>
            <mo>=</mo>
            <mrow>
                <mfrac>
                    <mrow>
                        <mo>&#x2212;</mo>
                        <mi>b</mi>
                        <mo>&#x00B1;</mo>
                        <msqrt>
                            <msup>
                                <mi>b</mi>
                                <mn>2</mn>
                            </msup>
                            <mo>&#x2212;</mo>
                            <mn>4</mn>
                            <mi>a</mi>
                            <mi>c</mi>
                        </msqrt>
                    </mrow>
                    <mrow>
                        <mn>2</mn>
                        <mi>a</mi>
                    </mrow>
                </mfrac>
            </mrow>
            <mtext>.</mtext>
        </math>
    </p>

    @vite(['resources/js/app.js', 'resources/css/app.css'])
</x-layout>
