<div align="center" style="margin-bottom:10px">
  <img alt="Get Recipes"
    src="src/assets/jobs.png"
  />

</div>

<h2 align="center" style="margin:50px">
   Jobs Assign
</h2>

<div align="center">

  <img alt="language version" src="https://img.shields.io/badge/Node-v_12.13.1-339933?logo=node.js">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Fred-Reis/react-native-wmelonapp">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/Fred-Reis/react-native-wmelonapp">

  <img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/Fred-Reis/react-native-wmelonapp">

</div>

<hr/>

<br/>

<p align="center">
  <a href="#-sobre">Sobre</a> &nbsp;&nbsp;
  <a href="#-requisitos">Requisitos</a> &nbsp;&nbsp;
  <a href="#-extras">Extras</a> &nbsp;&nbsp;
  <a href="#-como-foi-desenvolvido-">Como foi desenvolvido?</a> &nbsp;&nbsp;
  <a href="#-tecnologias-e-bibliotecas">Tecnologias e Bibliotecas</a> &nbsp;&nbsp;
  <a href="#-demo">Demo</a> &nbsp;&nbsp;
  <a href="#-roadmap">Roadmap</a> &nbsp;&nbsp;
  <a href="#-baixando-e-instalando">Baixando e instalando</a> &nbsp;&nbsp;
  <a href="#-autor">Autor</a>
</p>

<br/>

# 💡 Sobre

Esse projeto foi desenvolvido como um teste técnico.
O projeto deveria apresentar um modal para uma assinatura (de algum tipo de plano/pacote por exemplo) após clicar em um botão em uma tela inicial.

<br/>

# ⛑ Requisitos

- A aplicação deveria ser desenvolvida utilizando React Native e Typescript.
- Criar uma tela inicial com um botão para abrir um modal.
- Criar um modal com um botão que concluisse a "Assinatura".
- Após a assinatura o modal deveria ser fechado e o botão para abrir o modal bloqueado, evitando uma nova assinatura.
- Armazenar a informacão de assinatura em um banco de dados.
- Utilizar alguma biblioteca de gerenciamento de estado global.

<br/>

# 🔥 Como foi desenvolvido?

- Foi criado um banco de dados utilizando [Watermelon DB](https://github.com/Nozbe/WatermelonDB), que é um framework reativo que roda sobre o [SQLite](https://www.sqlite.org/index.html). E nele foi criado uma tabela de usuário no seguinte modelo:

```JSON
  {
    "assigned": "boolean",
    "created_at": "timestamp"
  }
```

> O watermelon DB associa um id para cada entrada de forma automática, portanto não foi nescessário criar esse campo.

- Como não existia nenhum tipo de cadastro prévio na aplicação, após cada assinatura um novo usuário é gerado e registrado no DB com o campo `assigned` como `true`.

- Após a assinatura o usuário é redirecionado para a tela principal e o status de sua assinatura, assim como o banco de dados atualizado é armazenado no estado global da aplicação.

- Para fazer o gerenciamento do estado global da aplicacão foi utilizado o [Zustand](https://github.com/pmndrs/zustand), pois é super performatico e simple de se utilizar.

- O botão que abre o modal de assinatura fica habilitado baseado no status da assinatura do usuário atual.

<br/>

# ⭐ Extras

- Foi ciado uma nova tela para listagem de todos os usuários cadastrados.
- E foi criado um novo botão que te oferece a possibilidade de fazer um novo registro como um novo usuário.

<br/>

# 🛠 Tecnologias e Bibliotecas

- [**zustand**](https://github.com/pmndrs/zustand);
- [**typescript**](https://www.typescriptlang.org/);
- [**Styled Components**](https://styled-components.com/);
- [**@nozbe/watermelondb**](https://nozbe.github.io/WatermelonDB);

<br/>

# 👀 Demo

<h1 align="center">
  <img src="src/assets/jobs.gif"/>
</h1>

<h4 align="center">
 ⚠️ &nbsp;&nbsp;🚨 &nbsp;&nbsp;🚧 &nbsp;&nbsp;<a alt="Frederico Reis" href="https://github.com/Fred-Reis/react-native-wmelonapp/raw/main/android/app/build/outputs/apk/release/app-release.apk"> download the release.apk file to test on your device here</a> &nbsp;&nbsp;🚧 &nbsp;&nbsp;🚨 &nbsp;&nbsp;⚠️
</h4>

<br/>

# 🗺 Roadmap

[] Criar uma tela de cadastro e um fluxo de login
[] Permitir alterações nos usuários
[] Testes unitários e de integração

<br/>

# 🏁 Baixando e instalando

1 - Para rodar pela primeira vez o seu projeto será necessário a criação de uma pasta.

```bash
$ mkdir <nome-da-pasta>
```

2 - Agora entre na pasta criada.

```bash
$ cd <nome-da-pasta>
```

3 - Vamos clonar o repositório

```bash
$ git clone https://github.com/Fred-Reis/react-native-wmelonapp
```

4 - Execute o comando a seguir para a criação da pasta `node_modules`

```bash
$ yarn install
```

5 - Para instalar as dependencias no ios usando cocoa pods

```bash
$ cd ios

$ pod install
```

6 - Agora para iniciar o projeto em modo de desenvolvimento rode o seguinte comando usando a plataforma desejada

```bash
$ yarn <plataforma-escolhida>
```

7 - mas se preferir você pode [baixar e instalar o arquivo apk no seu smartphone Android nesse link]("https://github.com/Fred-Reis/react-native-wmelonapp/raw/main/android/app/build/outputs/apk/release/app-release.apk")

<br/>

😃 Se você chegou até aqui é sinal que tudo deu certo e você agora já pode fazer o seu cadastro e fazer a sua assinatura. 🚀

<br/>

<br/>

<h4 align="center">
😃  <strong>BE HAPPY!</strong>
</h4>

<h4 align="center">
  "Stay hungry stay foolish!"
</h4>

<br/>

# 🚨 Autor

<br/>

<h3 align="center">
Author: <a alt="Fred-Reis" href="https://github.com/Fred-Reis">Frederico Reis</a>
</h3>

<p align="center">

  <a alt="Frederico Reis" href="https://www.linkedin.com/in/frederico-reis-dev/">
    <img src="https://img.shields.io/badge/LinkedIn-Frederico_Reis-0077B5?logo=linkedin"/></a>
  <a alt="Frederico Reis" href="https://github.com/Fred-Reis ">
  <img src="https://img.shields.io/badge/Fred_Reis-GitHub-000?logo=github"/></a>

</p>

Made with ♥️ 2021

<!-- <h4 align="center">
  🚧 &nbsp;&nbsp; Project README &nbsp;&nbsp; 🚀  &nbsp;&nbsp;under construction... &nbsp;&nbsp; 🚧
</h4> -->
