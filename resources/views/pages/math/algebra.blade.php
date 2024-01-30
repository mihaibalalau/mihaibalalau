<x-layout>
    <x-slot:head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.0/katex.min.css"
            integrity="sha384-R4558gJ3+9R5D1A+Hw3PDXCG+QG4Swhp0vYhIMpK8ENSOwEnClIDZZAM+SBh8Q1F" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.0/katex.min.js"
            integrity="sha384-fWURyB/6aPcIcKjRTPVFbETlFtRqNgp2krv4pJ5f6kPtJ8KDxK2e5IvRbUR7GxBI" crossorigin="anonymous">
        </script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.13.0/contrib/auto-render.min.js"
            integrity="sha384-Um5gpz6DOz3U6bD8PIdDWS+SZib7A5GLIz5k8m8wRlYg3Gx2hY+0Jp3R+hBfjN8U" crossorigin="anonymous">
        </script>

    </x-slot>
    <span id="math-equation">x + 12 = 3, \quad x = ?</span>

    @vite(['resources/js/app.js', 'resources/css/app.css'])
</x-layout>
