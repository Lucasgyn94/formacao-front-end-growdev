# NPX (Node Package Executer)

**O que é?**

NPX é uma ferramenta incluída junto com o NPM (a partir da versão 5.2) que permite executar pacotes diretamente no terminal sem precisar instalá-los primeiro.

É como um "**executador**" que você pode usar para rodar comandos temporários e testar pacotes rapidamente.

*(Imagem ilustrativa no lado direito mostrando uma caixa com a marca do **npx**)*

**Para que serve?**

O NPX é útil quando você quer rodar pacotes uma vez ou realizar uma tarefa rápida, sem precisar instalar o pacote no seu projeto.

Por exemplo, se você quer usar uma ferramenta para criar um novo projeto ou para executar um comando específico, pode fazer isso com o NPX.

Isso economiza tempo e mantém seu projeto mais limpo, pois você não precisa instalar pacotes desnecessários.

*(Imagem ilustrativa no lado direito mostrando uma pessoa correndo ao lado de uma caixa com o logotipo do Node.js)*

**Diferença entre NPM e NPX**

* **NPM:** É o gerenciador de pacotes que permite **instalar** pacotes no seu projeto ou globalmente. Com o NPM, você instala pacotes que vai utilizar repetidamente.
* **NPX:** É uma ferramenta para **executar** pacotes sem precisar instalá-los permanentemente. O NPX permite rodar pacotes temporários, facilitando testes e execuções rápidas.

*(Logotipos do **npm** e **npx** lado a lado no canto direito)*

**Resumindo...**

Em resumo, o NPM serve para instalar e gerenciar pacotes, enquanto o NPX permite executar pacotes diretamente, economizando tempo e espaço no projeto.

## Exemplo de uso com npx
* Vamos exemplificar com o pacote **cowsay**, podemos utilizar o mesmo dentro do nosso projeto sem instalar com o comando:
```
npx cowsay "Olá Growdevers"
```
