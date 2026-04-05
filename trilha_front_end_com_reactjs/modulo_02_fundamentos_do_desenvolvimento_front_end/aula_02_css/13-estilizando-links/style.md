/* Customização Básica */
        .link {
            color: green;
            text-decoration: none;
            font-weight: bold;
        }

        .link:hover {
            color: red;
            text-decoration: underline;
        }

        /* Estilo de botão */
        .btn-link {
            background-color: red;
            color: white;
            padding: 8px;
            text-decoration: none;
        }

        .btn-link:hover {
            background-color: darkred;
            cursor: pointer;
        }

        /* Estilos para links não visitados */
        .link-default:link {
            color: blue; /* Links não visitados terão cor azul */
            text-decoration: none; /* Remove o sublinhado dos links */
        }

        /* Estilos para links já visitados */
        .link-default:visited {
            color: purple; /* Links visitados terão cor roxa */
        }

        /* Estilos para links quando o mouse passa por cima */
        .link-default:hover {
            color: red; /* Cor vermelha ao passar o mouse */
            text-decoration: underline; /* Adiciona sublinhado no hover */
        }

        /* Estilos para links no momento em que são clicados */
        .link-default:active {
            color: green; /* Cor verde enquanto o link está sendo clicado */
        }

        /* Estilos para links quando estão focados (via teclado, por exemplo) */
        .link-default:focus {
            outline: 2px solid orange; /* Adiciona uma borda laranja ao link focado */
        }