## Projeto de Gestão de Aluguel de Carros 🚗

Este projeto foi desenvolvido como parte da Trilha Ignite da Rocketseat. Tem como objetivo criar um sistema de gerenciamento para uma empresa de aluguel de carros, abordando desde o cadastro de carros até a gestão dos alugueis e devoluções.

### Funcionalidades Principais

1. **Cadastro de Carro:**
   - Permite cadastrar novos carros na plataforma, garantindo que cada carro tenha uma placa única.
   - Atribui disponibilidade ao carro por padrão.
   - Requer autenticação de um usuário administrador.

2. **Listagem de Carros:**
   - Permite visualizar todos os carros disponíveis.
   - Possibilita filtrar os carros por categoria, marca ou nome.

3. **Cadastro de Especificações do Carro:**
   - Permite adicionar especificações para cada carro, como características ou equipamentos.

4. **Cadastro de Imagens do Carro:**
   - Permite adicionar imagens para cada carro, facilitando a apresentação visual dos veículos.

5. **Aluguel de Carro:**
   - Possibilita o cadastro de um aluguel de um carro, com duração mínima de 24 horas.
   - Verifica se o usuário está logado na aplicação e se já não tem outro aluguel em andamento.

6. **Devolução de Carro:**
   - Permite a devolução de um carro, calculando o valor total do aluguel.
   - Aplica multa proporcional em caso de atraso na devolução.
   - Libera o carro e o usuário para novos aluguéis.

7. **Recuperação de Senha:**
   - Permite que usuários recuperem suas senhas por e-mail, seguindo um processo seguro.
   - Define um link de recuperação que expira após 3 horas.

### Tecnologias Utilizadas

- **Node.js:** Plataforma para execução de código JavaScript no lado do servidor.
- **Express:** Framework para construção de aplicações web em Node.js.
- **Typescript:**  


Este projeto visa oferecer uma solução completa para a gestão de aluguel de carros, atendendo tanto a empresa quanto os usuários que desejam alugar veículos.