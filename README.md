# EncontreOTelefone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Regras do Desafio: Encontre o Telefone

Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão associados a nenhuma letra.

Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

Letras  ->  Número 
ABC    ->  2 
DEF    ->  3 
GHI    ->  4 
JKL    ->  5 
MNO    ->  6 
PQRS    ->  7 
TUV    ->  8 
WXYZ   ->  9 
Entrada

A entrada consiste de um conjunto de expressões. Cada expressão está sozinha em uma linha e possui C caracteres, onde 1 ≤ C ≤ 30. A entrada é terminada por fim de arquivo (EOF).

Saída

Para cada expressão você deve imprimir o número de telefone correspondente.

Exemplo de entrada:

1-HOME-SWEET-HOME 
MY-MISERABLE-JOB
Saída correspondente:

1-4663-79338-4663 
69-647372253-562

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
