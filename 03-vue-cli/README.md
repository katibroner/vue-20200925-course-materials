# @Vue/cli; SFC

## Современный Frontend

- Минимум - скринкасты и учебник:
    - Скринкаст по Nodejs. Рекомендуется ознакомиться с видео в Части 1: 01-09.  
    [https://learn.javascript.ru/screencast/nodejs](https://learn.javascript.ru/screencast/nodejs)
    - Скринкаст по Webpack (+ babel). Он не очень свежий, но концептуально всё осталось таким же.  
    [https://learn.javascript.ru/screencast/webpack](https://learn.javascript.ru/screencast/webpack)
    - Полифилы, babel: [https://learn.javascript.ru/polyfills](https://learn.javascript.ru/polyfills)
- Интересные статьи:
    - Каково оно учить JavaScript в 2016:  
    [https://habr.com/ru/post/312022/](https://habr.com/ru/post/312022/)
    - Объясняем современный JavaScript динозавру:  
    [https://habr.com/ru/company/mailru/blog/340922/](https://habr.com/ru/company/mailru/blog/340922/)
- Доклады:
    - HolyJS 2017 Moscow | Михаил Башуров – Yarn, npm v5 или pnpm — кто круче? (доклад не очень свежий, но затрагивает основные отличия и интересные аспекты):  
    [https://www.youtube.com/watch?v=hq-gIihAs5A](https://www.youtube.com/watch?v=hq-gIihAs5A)
    - HolyJS 2017 Moscow | Модульный CSS — Андрей Оконечников:  
    [https://www.youtube.com/watch?v=vYmSYsj-s5w](https://www.youtube.com/watch?v=vYmSYsj-s5w) 
    - HolyJS 2018 Moscow | Стас Курилов — Глубокое погружение в webpack:  
    [https://www.youtube.com/watch?v=aiYkJOPD9v8](https://www.youtube.com/watch?v=aiYkJOPD9v8)
    - HolyJS 2019 Moscow | Nicolò Ribaudo — @babel/how-to:  
    [https://www.youtube.com/watch?v=UeVq_U5obnE](https://www.youtube.com/watch?v=UeVq_U5obnE)
- Инструменты:
    - NodeJS: [https://nodejs.org/](https://nodejs.org/)
    - NPM: [https://www.npmjs.com/](https://www.npmjs.com/)
        - Документация по package.json: [https://docs.npmjs.com/configuring-npm/package-json.html](https://docs.npmjs.com/configuring-npm/package-json.html)
        - Документация по CLI: [https://docs.npmjs.com/cli-documentation/cli](https://docs.npmjs.com/cli-documentation/cli)
    - LESS, SASS: [http://lesscss.org/](http://lesscss.org/), [https://sass-lang.com/](https://sass-lang.com/)
    - PostCSS: [https://postcss.org/](https://postcss.org/), [https://github.com/postcss/postcss](https://github.com/postcss/postcss)
    - Babel: [https://babeljs.io/](https://babeljs.io/)
    - Browserslist: [https://github.com/browserslist/browserslist](https://github.com/browserslist/browserslist), [https://browserl.ist/](https://browserl.ist/)
    - Webpack: [https://webpack.js.org/](https://webpack.js.org/)
    - Webpack DevServer: [https://webpack.js.org/configuration/dev-server/](https://webpack.js.org/configuration/dev-server/)
    - ESLint: [https://eslint.org/](https://eslint.org/)
    - Prettier: [https://prettier.io/](https://prettier.io/)
    - regenerator-runtime: [https://www.npmjs.com/package/regenerator-runtime](https://www.npmjs.com/package/regenerator-runtime)
    - core-js: [https://www.npmjs.com/package/core-js](https://www.npmjs.com/package/core-js)

## Однофайловые компоненты (Single-File Components, SFC)

Однофайловый компонент - файл с расширением Vue, в котором в отдельных блоках хранится шаблон, скрипт и стили компонента.

- Кратко в гайде: [https://vuejs.org/v2/guide/single-file-components.html](https://vuejs.org/v2/guide/single-file-components.html)
- Подробно про SFC: [https://vue-loader.vuejs.org/spec.html](https://vue-loader.vuejs.org/spec.html)
- vue-loader: [https://vue-loader.vuejs.org/guide/](https://vue-loader.vuejs.org/guide/)

### Инкапсуляция стилей

Vue предлагает 2 механизма инкапсуляции стилей (ограничения действия стилей одним компонентом):
- `Scoped Styles`: элементам в компоненте устанавливается атрибут `data-v-hash` и добавляется в селекторы в стилях;
- `CSS Modules`: имена классов меняются на случайные (настраивается), а затем доступны в `this.$style.className`.

Подробнее:
- [https://vue-loader.vuejs.org/guide/scoped-css.html](https://vue-loader.vuejs.org/guide/scoped-css.html);
- [https://vue-loader.vuejs.org/guide/css-modules.html](https://vue-loader.vuejs.org/guide/css-modules.html).

## @vue/cli

С этого момента мы будем использовать `@vue/cli` -- систему для разработки на Vue.js. Первое, что требуется сделать -- это установить его:
```bash
npm i -g @vue/cli
```

**ВАЖНО:** не путать `@vue/cli` (версии 3+) с `vue-cli` (версия 2). Всё ещё много статей на старый `vue-cli`, который отличался кардинально.

`@vue/cli` включает:
- Непосредственно глобальную утилиту `vue`.  
  Она используется для интерактивной генерации проектов, а также интеграции в него новой функциональности через @vue/cli плагины.
- `@vue/cli-service` (`vue-cli-service`) - зависимость проекта, предоставляющая мощную систему сборки над `webpack`.
- `vue ui` - графический интерфейс для `@vue/cli` (запускается через команду `vue ui`).

**Рекомендуется прочитать весь Guide от начала до конца: [https://cli.vuejs.org/](https://cli.vuejs.org/). Он не большой.**

## Eslint + Vue

Рекомендуется прочитать весь VueJS Style Guide: [https://vuejs.org/v2/style-guide/](https://vuejs.org/v2/style-guide/).

Eslint Plugin Vue: [https://eslint.vuejs.org/](https://eslint.vuejs.org/).

В своём проекте вы сможете использовать любую удобную для вас конфигурацию eslint (и/или prettier), как одну из стандартных (например, airbnb), так и свою собственную конфигурацию.

## Переменные окружения (Environment Variables, ENV)

Переменные окружения - это некоторые переменные, существующие в окружении, в котором исполняется приложение. Окружением приложения является операционная система и сеанс в котором приложение запускается.

Во-первых, это настройки в ОС. Могут разделяться на системные и текущего пользователя. Способ задания зависит от ОС. В Windows, например, есть в панели инструментов (можно найти поиском по запросу "переменных среды"). 

Во-вторых, это "локальные" переменные, заданные в каком-то сеансе в терминале. Мы заходим в консоль через эмулятор терминала, работаем через некоторую оболочку (например, cmd, powershell, bash и т.д.). В определённом сеансе тоже можно установить значение переменных. Синтаксис разный, зависит от используемой оболочки.

```
VAR=value
set VAR=value
$env:VAR="value"
```

Можно установить переменную и в этом же сеансе запустить приложение.

```
SOME_VAR=some_value 
runApp
```

Или в одну строку: `SOME_VAR=some_value myApp`, `SOME_VAR=some_value npm run start`.

При запуске `runApp` в приложении будут доступны все глобальные переменные окружения, заданные в ОС, а также `SOME_VAR=some_value`.

*Примечание: способ задания переменной в терминале зависит от используемой оболочки терминала. В `npm` есть пакет для кросс-платформенной установки переменных окружения - [`cross-env`](https://www.npmjs.com/package/cross-env).*

Приложение запускается в этом окружении, и ему доступны переменные как глобальные, в ОС, так и локальные в текущем сеансе терминала, в котором запущено приложение.

Переменные окружения - основной способ конфигурации приложений по методологии [12-ти факторных приложений](https://12factor.net/).

Иногда для удобства создают так называемые "дот-енв" файлы. Это файлы с названием `.env` и подобные, в которых также перечисляются значение переменных окружения. Сами по себе такие файлы не работают, их парсят руками или с помощью библиотеками (например, [`dotenv`](https://www.npmjs.com/package/dotenv)), чтобы примешивать к значениям переменных. Создают такие файлы для удобства в процессе разработки.

---

## Vue 3

### @vue/cli

`@vue/cli` работает также с Vue 3 и уже сейчас позволяет создать проект на основе Vue 3.

### vue-loader, SFC, Scoped Styles

Изменений нет. 

Однако обсуждаются улучшения: [https://github.com/vuejs/rfcs/pull/182](https://github.com/vuejs/rfcs/pull/182).
