# Material UI — Instalação e Utilização Básica

## 1. O que é o Material UI?

O **Material UI (MUI)** é uma biblioteca de componentes para React que permite construir interfaces utilizando elementos prontos, como botões, campos de texto, menus e cartões.

Sua principal vantagem é acelerar o desenvolvimento e manter a consistência visual da aplicação.

Documentação oficial: https://mui.com/material-ui/getting-started/

## 2. Instalação

Em um projeto React que utiliza npm, execute:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Para instalar a biblioteca de ícones:

```bash
npm install @mui/icons-material
```

- `@mui/material`: componentes visuais do Material UI.
- `@emotion/react` e `@emotion/styled`: dependências utilizadas para estilização.
- `@mui/icons-material`: biblioteca de ícones do MUI.

## 3. Utilização básica de componentes

Para utilizar um componente, importe-o e insira-o no JSX.

### Exemplo com Button

```jsx
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <h1>Minha aplicação</h1>

      <Button variant="contained">
        Clique aqui
      </Button>
    </div>
  );
}

export default App;
```

**Explicação:**

- `import`: importa o componente da biblioteca.
- `Button`: representa um botão pronto para utilização.
- `variant="contained"`: define o estilo preenchido do botão.
- JSX: permite utilizar o componente diretamente na interface React.

## 4. Variantes de botões

O MUI oferece diferentes estilos por meio da propriedade `variant`.

```jsx
<Button variant="contained">Preenchido</Button>

<Button variant="outlined">Contornado</Button>

<Button variant="text">Texto</Button>
```

As principais variantes são:

- `contained`: botão preenchido.
- `outlined`: botão com contorno.
- `text`: botão sem preenchimento ou contorno destacado.

## 5. Personalização com props

Os componentes podem receber propriedades (`props`) para modificar sua aparência e seu comportamento.

```jsx
<Button
  variant="contained"
  color="primary"
  size="large"
>
  Enviar
</Button>
```

Nesse exemplo:

- `variant`: define o estilo visual.
- `color`: define a cor conforme o tema.
- `size`: controla o tamanho do botão.

## 6. Utilizando campos de texto

O componente `TextField` permite criar campos de entrada com estilos prontos.

```jsx
import TextField from '@mui/material/TextField';

function Formulario() {
  return (
    <TextField
      label="Nome"
      variant="outlined"
      fullWidth
    />
  );
}

export default Formulario;
```

- `label`: texto que identifica o campo.
- `variant`: define o estilo do campo.
- `fullWidth`: faz o componente ocupar toda a largura disponível.

## 7. Boas práticas

- Consulte a documentação oficial para conhecer as propriedades disponíveis.
- Importe apenas os componentes necessários.
- Aproveite os estilos e temas do MUI antes de criar personalizações complexas.
- Mantenha os componentes organizados e reutilizáveis.
- Verifique a compatibilidade das dependências com a versão do React do projeto.

## 8. Resumo para revisão

O Material UI pode ser instalado com npm e utilizado por meio de componentes importados diretamente no React. Suas propriedades permitem personalizar estilos, cores, tamanhos e comportamentos.

**Conceito-chave:** instalar a biblioteca, importar o componente e configurá-lo por meio de `props` é o fluxo básico de utilização do Material UI.
