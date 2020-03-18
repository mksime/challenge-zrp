# Desafio iHeroes

## Versões
O desafio foi realizado utilizando-se os seguintes softwares e suas respectivas versões:

* Python 3.7.5
* Django 3.0.4
* React 16.13.0
* React-Redux 7.2.0

## O Projeto
O presente projeto é uma plataforma de registro de heróis, com a possibilidade de criar, alterar e deletar heróis do banco de dados da plataforma. Foi utilizado o framework Django para o *backend* e a biblioteca React para o *frontend*. A persistência de dados foi implementada com o uso do SQLite3.

A proposta inicial foi criar um sistema em que fosse possível fazer:
1. Autenticação
2. Cadastro, edição, remoção e listagem de heróis
3. Registro de desalocação de um herói (entende-se por desalocação, o ato do herói já ter derrotado a ameaça, depois dele ter sido alocado).
4. Exibição do histórico de ameaças junto com quem foi o responsável por impedir a catástrofe.

Porém, no presente projeto, só é possível fazer os pontos (2) e (3), de maneira manual.

A comunicação entre o *backend* e o frontend é feita através de APIs, utilizando a biblioteca Django Rest Framework.

Para rodar o código, utiliza-se o seguinte comando na pasta `iheros`*:
```
python manage.py runserver
```
ou, dependendo do comando que execute a versão 3 do python no terminal do sistema operacional:
```
python3 manage.py runserver
```

O projeto é servido no endereço http://127.0.0.1:8000/

## Bugs
* Dado de teste sendo listado e não é possível removê-lo ou editá-lo.
* Na criação de um herói de classe "S", é necessário escolher a classe mesmo que esta classe apareça por padrão.

*Atenção para a grafia de `iheros`; cometi um erro de digitação na criação do projeto e que só foi percebida quando era inviável, por questões de prazo, consertar