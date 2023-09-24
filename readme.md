## Projeto de Gestão de Aluguel de Carros - Rentx API 🚗

Este projeto foi desenvolvido como parte da Trilha Ignite da Rocketseat. Tem como objetivo criar um sistema de gerenciamento para uma empresa de aluguel de carros, abordando desde o cadastro de carros até a gestão dos alugueis e devoluções.

## Problema Resolvido

A Rentx API resolve o problema de gestão de carros e aluguéis para uma empresa de aluguel de veículos. Permite o controle eficiente dos carros disponíveis, facilita o processo de aluguel para os usuários e gerencia as transações de aluguel e devolução.

## Tecnologias Utilizadas

- TypeScript
- Node.js
- Express.js
- TypeORM
- PostgreSQL
- Multer
- JSON Web Tokens (JWT)
- Bcrypt
- Swagger UI Express
- CSV Parse
- UUID
- tsyringe

## Funcionalidades

### Cadastro de Carro

- Permite cadastrar um novo carro.
- Não é possível cadastrar um carro com uma placa já existente.
- O carro é cadastrado, por padrão, com disponibilidade.
- Apenas usuários administradores podem cadastrar carros.

### Listagem de Carros

- Permite listar todos os carros disponíveis.
- Permite listar todos os carros disponíveis por nome da categoria, marca ou nome do carro.
- O usuário não precisa estar logado para listar carros.

### Cadastro de Especificação no Carro

- Permite cadastrar uma especificação para um carro.
- Não é possível cadastrar uma especificação para um carro não cadastrado.
- Não é possível cadastrar uma especificação já existente para o mesmo carro.
- Apenas usuários administradores podem cadastrar especificações.

### Cadastro de Imagens do Carro

- Permite cadastrar a imagem do carro.
- Utiliza o Multer para upload dos arquivos.
- O usuário pode cadastrar mais de uma imagem para o mesmo carro.
- Apenas usuários administradores podem cadastrar imagens.

### Aluguel de Carro

- Permite cadastrar um aluguel.
- O aluguel tem duração mínima de 24 horas.
- Não é possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário ou carro.
- O usuário deve estar logado para realizar um aluguel.
- Ao realizar um aluguel, o status do carro é alterado para indisponível.

### Devolução de Carro

- Permite realizar a devolução de um carro.
- Se o carro for devolvido com menos de 24 horas, será cobrada diária completa.
- Ao realizar a devolução, o carro é liberado para outro aluguel.
- Ao realizar a devolução, o usuário é liberado para outro aluguel.
- Calcula o total do aluguel.
- Calcula multa proporcional aos dias de atraso.
- O usuário deve estar logado para realizar a devolução.

### Listagem de Aluguéis para Usuário

- Permite buscar todos os aluguéis para um usuário.
- O usuário deve estar logado para acessar essa funcionalidade.

### Recuperação de Senha

- Permite o usuário recuperar a senha informando o e-mail.
- Envia um e-mail com o passo a passo para a recuperação da senha.
- Permite o usuário inserir uma nova senha.
- O usuário precisa informar uma nova senha.
- O link enviado para a recuperação expira em 3 horas.

