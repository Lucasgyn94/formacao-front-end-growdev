## Animações CSS
* Animações CSS são mudanças visuais dinâmicas que tornam interfaces mais interativas e atraentes.

### Por que usar?
* Melhorar a experiência do usuário (UX) e podem guiar a atenção visual.

## Transições vs Animações
__Transições__: Mudanças suaves entre dois estados (ex.: mudar cor).

__Animações__: Permitem criar moviementos complexos e personalizáveis.

### Exemplo
```
button {
    background-color: blue;
    border: none;
    padding: 12px 24px;
    border-radius: 8px;
    color: white;
    transition: background-color 0.5s, border-radius 0.3s, transform 0.3s;
}

button:hover {
    background-color: green;
    transform: scale(1.1);
    border-radius: 18px;
}
```

## KeyFrames
__@keyframes__: Define os passos.

### Propriedades da animação
* Controlam execução (nome, duração, etc).

### Exemplo
<head>
    <style>
        div {
            width: 100px;
            height: 100px;
            background: blue;
            position: relative;
            animation: DivAnimada 5s infinite;
        }

        @keyframes DivAnimada {
            from {
                left: 0px;
            }

            to {
                left: 200px;
            }
        }
    </style>
</head>

### Explicação dos elementos destacados
* DivAnimada → Nome da animação.
* 5s → Tempo de duração da animação (5 segundos).
* infinite → A animação será repetida infinitamente.
* from → Estado inicial da animação.
* left: 0px; → Valor inicial da propriedade.
* to → Estado final da animação.
* left: 200px; → Valor final da propriedade.

## Propriedades de Animação
* __animation-name__: Nome da animação
* __animation-duration__: Duração da execução
* __animation-timing-function__: Ritmo da transição
* __animation-delay__: Tempo antes de começar
* __animation-iteration-count__: Número de repetições
* __animation-direction__: Sentido do movimento.

## Timing functions
* __ease__: Início/fim suaves, meio rápido.
* __linear__: Velocidade constante.
* __ease-in__: Começa devagar.
* __ease-out__: Termina devagar.
* __ease-in-out__: Início/fim suaves.

## Quando Usar Animações
* __Feedback ao usuário__: Realce ao clicar
* __Chamadas de atenção__: Para elementos importantes
* __Estética__: Tornar interfaces mais atrativas

## Boas Práticas
* Evite excesso para não prejudicar a experiência.
* Teste o desempenho em dispositivos variados.
* Torne acessível (respeite usuários com problemas de visão).

## Ferramentas Úteis
* CSS Animation Generator
* Cubic Bezier Generator
* Animista

