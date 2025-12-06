# Fixando...

Siga os passos abaixo usando apenas o terminal (Git Bash) :
1. Descubra onde você está
```
$ pwd
```

2. Vá até a área de trabalho e crie uma pasta de nome fixando_terminal
```
$ cd desktop
$ mkdir fixando_no_terminal
```

3. Dentro da pasta fixando_terminal, crie uma outra pasta chamada pasta_interna
```
$ cd fixando_no_terminal
$ mkdir pasta_interna
```

4. Acesse a pasta_interna e crie um arquivo chamado primeiro_arquivo.txt
```
$ cd pasta_interna
$ touch primeiro_arquivo.txt
```

5. Volte pasta fixando_terminal e crie 3 arquivos chamados full.txt, mobi.txt e dados.txt
```
$ cd ..
touch {full,mobi.dados}.txt
```

6. Pesquise sobre as áreas fullstack, mobile e dados. Escreva em cada arquivo o resultado da sua pesquisa, de acordo
com a respectiva área

7. Copie o arquivo full.txt para a pasta pasta_interna
```
$ cp -r full.txt pasta_interna
```

8. Volte para a pasta fixando_terminal e delete o arquivo dados.txt
Fixando...
```
$ cd ..
$ rm -r dados.txt
```

