# RODANDO CÓDIGO JAVASCRIPT NO NAVEGADOR
* Existem duas abordagens:
  * **script interno**: injetado diretamente na página **.html** atráves da tag __<script>__
```
<script>
   console.log('Olá mundo!');
</script>
```
  * **script externo**: injetado em um arquivo externo à pagina **.html**, para isso colocamos dentro do body:
```
<script src="./index.js" defer></script>
```
__index.js__:
```
console.log("Olá mundo");
```
