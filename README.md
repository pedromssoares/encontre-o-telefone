# EncontreOTelefone

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.

## Regras do Desafio: Encontre o Telefone

Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa 69 5683.
<br/>
Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão associados a nenhuma letra.
<br/>
Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo.
<br/>
Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.
<br/>
<br/>
Letras  ->  Número 
<br/>
ABC    ->  2 
<br/>
DEF    ->  3
<br/>
GHI    ->  4
<br/>
JKL    ->  5 
<br/>
MNO    ->  6 
<br/>
PQRS    ->  7 
<br/>
TUV    ->  8 
<br/>
WXYZ   ->  9 
<br/>
<br/>
Entrada
<br/>
A entrada consiste de um conjunto de expressões. Cada expressão está sozinha em uma linha e possui C caracteres, onde 1 ≤ C ≤ 30.
<br/>
A entrada é terminada por fim de arquivo (EOF).
<br/>
<br/>
Saída
<br/>
Para cada expressão você deve imprimir o número de telefone correspondente.
<br/>
<br/>
Exemplo de entrada:
<br/>
1-HOME-SWEET-HOME 
<br/>
MY-MISERABLE-JOB
<br/>
Saída correspondente:
<br/>
1-4663-79338-4663 
<br/>
69-647372253-562
<br/>

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
