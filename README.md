# This Katana tests task, which using Cypress testing tool.

Setup of environment:
 - clone project 
 ```sh 
 $ git@github.com:nohead13/katana-test-task.git
 ```
 - npm install cypress --save-dev [cypress documentation](https://docs.cypress.io/guides/getting-started/installing-cypress)

run tests localy from <local-path-to-repository\katana-cypress> directory with Cypress installed 
```sh
$ npx cypress run --headless
```
or
```sh
$ npx cypress run --headed
```    