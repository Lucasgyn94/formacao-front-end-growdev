# Introdução ao Material UI (MUI) — ReactJS

## 1. O que é o Material UI?

O **Material UI (MUI)** é uma biblioteca de componentes para React que implementa princípios do Material Design, sistema de design desenvolvido pelo Google.

Ela disponibiliza componentes prontos, como botões, campos de formulário, menus, tabelas e diálogos, facilitando a criação de interfaces modernas e responsivas.

Documentação oficial: https://mui.com/material-ui/getting-started/

## 2. Principais vantagens

- **Componentes prontos:** reduzem a necessidade de criar elementos do zero.
- **Personalização:** permite alterar cores, tamanhos, estilos e temas.
- **Responsividade:** oferece recursos para adaptar interfaces a diferentes telas.
- **Consistência visual:** ajuda a manter um padrão de design.
- **Acessibilidade:** disponibiliza recursos que auxiliam na criação de interfaces acessíveis.

## 3. Instalação

Em um projeto React que utiliza npm, execute:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

O Emotion é utilizado pelo MUI como mecanismo de estilização padrão.

Para utilizar ícones:

```bash
npm install @mui/icons-material
```

## 4. Exemplo de utilização

```jsx
import Button from '@mui/material/Button';

function App() {
  return (
    <div>
      <h1>Minha aplicação React</h1>

      <Button variant="contained">
        Clique aqui
      </Button>
    </div>
  );
}

export default App;
```

### Entendendo o exemplo

- `Button`: componente de botão fornecido pelo MUI.
- `variant="contained"`: aplica um estilo de botão preenchido.
- O componente pode receber propriedades para personalizar sua aparência e comportamento.

## 5. Variantes de botões

O MUI disponibiliza diferentes variantes:

```jsx
<Button variant="contained">Principal</Button>

<Button variant="outlined">Contornado</Button>

<Button variant="text">Texto</Button>
```

- `contained`: botão preenchido.
- `outlined`: botão com contorno.
- `text`: botão com aparência de texto.

## 6. Personalização com propriedades

Os componentes aceitam propriedades (`props`) para controlar sua aparência e seu comportamento.

Exemplo:

```jsx
<Button
  variant="contained"
  color="primary"
  size="large"
>
  Enviar
</Button>
```

Nesse caso:
- `color`: define a cor conforme o tema.
- `size`: define o tamanho do botão.
- `variant`: determina o estilo visual.

## 7. Resumo para revisão

O Material UI é uma biblioteca de componentes para React baseada no Material Design. Ele facilita a criação de interfaces consistentes, responsivas e personalizáveis.

**Conceito-chave:** o MUI permite utilizar componentes prontos no React, configurando sua aparência e seu comportamento por meio de propriedades e temas.

