# Callbacks

Callbacks em JavaScript são **funções passadas como argumento** para outras funções e que são executadas em um momento posterior.

Eles são uma maneira fundamental de lidar com operações assíncronas.

## Exemplo JavaScript

```
function greet(name, callback) {
  console.log(`Hello, ${name}!`);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
```

