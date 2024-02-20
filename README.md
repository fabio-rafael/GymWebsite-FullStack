Descrição do Projeto
Aplicação Full Stack para Gerenciamento de Membros
Este projeto é uma aplicação full stack desenvolvida para gerenciamento de membros, utilizando tecnologias como Express, MongoDB, Mongoose, React, e Bootstrap. A aplicação possui funcionalidades de registro, login, e uma página de membros para gerenciar os usuários registrados.

Backend:
O backend foi construído com Node.js e Express, utilizando MongoDB como banco de dados e Mongoose para interação com o banco. O CORS é utilizado para permitir requisições do frontend. A criptografia de senhas é feita usando a biblioteca bcrypt para garantir a segurança das informações.

Frontend:
O frontend foi desenvolvido com React, utilizando hooks para gerenciar o estado e o roteamento para navegação entre as páginas. O Bootstrap foi integrado para facilitar a estilização da interface, incluindo a criação de uma barra de navegação (navbar) e um rodapé (footer). Ícones foram incorporados para melhorar a experiência do usuário.

Funcionalidades Principais:
Registro de Conta:

Os usuários podem se registrar fornecendo informações válidas através de um formulário. As senhas são criptografadas antes de serem armazenadas no banco de dados.
Login:

Após o registro bem-sucedido, os usuários são redirecionados para a página de login. Dados registrados são verificados e, se corretos, os usuários são redirecionados para a página de membros.
Página de Membros:

A página de membros exibe informações sobre todos os usuários registrados, incluindo senhas criptografadas (apenas para fins de demonstração).
Os usuários têm a opção de excluir membros, mostrando a capacidade de gerenciamento da comunidade.
Utilização do Projeto:
Clone o repositório: git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências do backend: cd backend && npm install
Instale as dependências do frontend: cd frontend && npm install
Configure as variáveis de ambiente para conexão com o MongoDB no backend.
Inicie o backend: cd backend && npm start
Inicie o frontend: cd frontend && npm start
O projeto está agora disponível em http://localhost:3000. Registre uma conta, faça login e explore a funcionalidade de gerenciamento de membros.

Este projeto foi desenvolvido como uma prova de conceito, e recomenda-se a implementação de medidas adicionais de segurança e autenticação em um ambiente de produção.

## Screenshots

### Página de Login
![Página de Login](frontend/Screenshots_Frontend/Login.png)
