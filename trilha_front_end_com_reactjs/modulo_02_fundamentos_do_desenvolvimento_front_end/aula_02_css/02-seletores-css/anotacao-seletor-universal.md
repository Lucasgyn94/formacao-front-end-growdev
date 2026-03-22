# Seletores CSS
## Seletor Universal
* Seletor usado para aplicar estilos a todos os elementos dentro de um documento HTML.

* Geralmente usado para aplicar margin, padding e border-box

* __Exemplo:__
```
* {

	/*Estilos para todos os elementos*/
}
```

* __Exemplo 2:__
```
/*Seleciona todos os elementos*/

* {
	color: green
}
```

## Seletor de Tipo
* Seleciona __todos os elementos que possuem um determinado tipo__ de elemento no HTML.
* __Exemplo:__
```
div {
	color: orange;
}
```

## Seletor de Classe
* Seleciona __todos os elementos que possuem a mesma classe.__

* __Classes podem ser utilizadas por vários elementos.__

* __Exemplo__
```
.nome-da-classe {
	font-weight: bold;
}
```

## Seletor de ID
* Seleciona __o elemento que possui id específico.__

* id = Identificador único

* __Exemplo__
```
#nome-do-id {
	color: orange;
}
```

## Seletor Lista
* Quando vários seletores compartilham as mesmas declarações de estilo, eles podem ser agrupados em uma lista separada por vírgulas.

__Exemplo 1:__
```
elemento1, elemento2 {
	/*Estilos para elemento1 e elemento2*/
}
```

__Exemplo 2:__
```
span, 
div {
	border: red 2px solid;	
}
```

## Seletor Descentente
* Aplica estilos a elementos que estão aninhados dentro de outros elementos

* __Exemplo 1__
```
pai filho {
	/*Estilos para o elemento filho*/
}
```
* __Exemplo 2__
```
div span {
	color: blue;
}
```

## Seletor Filho Direto
* Aplica os estilos apenas aos elementos que estão diretamente dentro do elemento pai, sem considerar a profundidade adicional.

* __Exemplo 1__
```
pai > filho {
	/*Estilos para o elemento filho*/
}
```
* __Exemplo 2__
```
ul > li {
	padding: 10px;
}
```

## Seletor Adjacente Direto
* Seleciona um elemento que é imediatamente precedido por outro elemento.

* Útil quando deseja-se aplicar estilos apenas a elementos que seguem diretamente outro elemento específico.

* __Exemplo 1__
```
elemento1 + elemento2 {
	/*Estilos para o elemento*/
}
```
* __Exemplo 2__
```
h1 + p {
	color: blue;
}
```

## Seletor de Irmãos Gerais
* Seleciona todos os elementos que são irmão diretos de um elemento específico.

* Útil quando deseja-se aplicar estilos a elementos que seguem.

* __Exemplo 1__
```
elemento ~ elemento_irmao {
	/*Estilos para o elemento_irmao*/
}
```
* __Exemplo 2__
```
img ~ p {
	color: red;
}
```

