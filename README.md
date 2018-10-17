# Quero

## Estrutura

    .
    ├── src/
    |   ├── index.html
    |   ├── assets/
    |   |   ├── fonts/
    |   |   ├── images/
    |   |   └── svgs/
    |   ├── js/
    |   ├── sass/
    |   |   ├── base/
    |   |   ├── layout/
    |   |   ├── modules/
    |   |   └── main.scss
    |   └── js/
    ├── dist/
    |   ├── css/
    |   |   └── main.css
    |   ├── js/
    |   |   └── main.js
    |   ├── assets/
    |   |   ├── fonts/ 
    |   |   ├── images/ 
    |   |   └── svgs/ 
    |   └── index.html
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── gulpfile.js
    ├── .eslintrc.yml
    ├── .sasslint.yml
    ├── .editorconfig
    └── .gitignore


## Principais tasks

`npm run dev`: Entra no modo de desenvolvimento com *watch* e *live reload* na porta **8080**


`npm run build`: Faz um *build* da aplicação gerando a pasta **dist**

`npm run deploy`: Faz um *deploy* da aplicação no [Github Pages](https://vitebo.github.io/quero/)

