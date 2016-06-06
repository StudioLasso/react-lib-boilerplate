# react-lib-boilerplate

Starter to create React Component Library in ES6

Source files of component are in `src` folder. You can write code in ES6. 

`npm run build` execute babel to generate sources in ES5 in `lib` folder. Main file targets `lib/index.js`

For tests, i initialized mocha with jsdom. There are few npm scripts : 

- `npm run test` to run tests just once
- `npm run test:watch` to run tests on every update
- `npm run test:coverage` to generate code coverage report with isparta (istanbul for ES6). `npm run serve:coverage` expose doc on `http://localhost:8080`

For development, you also have `npm start`. It launches demo app in `demo` folder. You have to install dependencies prior of that (`cd demo && npm i`)

I also initialized commitizen and semantic release for release management. Commitizen and Semantic Release will help you to generate releases notes on Github and manage versions of your library depending on commit messages, very convenient. You have to install it globally with `npm i commitizen -g`. To commit, type `git cz` instead of `git commit`, and follow wizard instructions. 

To configure your repo with semantic release, follow these [instructions](https://github.com/semantic-release/semantic-release#setup)