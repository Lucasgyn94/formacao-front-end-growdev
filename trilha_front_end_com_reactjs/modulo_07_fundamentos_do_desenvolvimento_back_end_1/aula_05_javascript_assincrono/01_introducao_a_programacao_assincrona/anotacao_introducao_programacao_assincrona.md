# Programação Assíncrona

Normalmente, o código de um programa é executado de forma direta, com uma coisa acontecendo por vez (modelo síncrono).

Se uma função depende do resultado de outra função, ela tem que esperar o seu retorno. Enquanto isso o programa inteiro praticamente para de funcionar da perspectiva do usuário.

Na programação assíncrona, esse comportamento muda.

A programação assíncrona é um paradigma que permite executar tarefas sem bloquear o fluxo principal.

Assim ela é excelente para uma execução mais rápida em aplicações que são bloqueadas por operações de I/O ou comunicações com serviços externos.

É a base do Node.js, uma vez que o Node é uma ferramenta single-thread e baseada em eventos.

Pense numa corrida de revezamento 4x100. Antes que o bastão seja passado, o corredor que vai recebê-lo começa a tomar posição e a correr antes de realmente tê-lo em mãos.

Esse é o conceito da programação assíncrona: uma forma de executar o código sem que o programa fique preso em uma ou outra transação mais demorada

# Quando usar?

Exemplos de processos onde a programação assíncrona pode ser útil:

* Chamadas a serviços externos, como banco de dados.
* Comunicação com APIs.
* Leitura e escrita em arquivos.
* Processamento paralelo de operações independentes.
* Streaming de dados.
