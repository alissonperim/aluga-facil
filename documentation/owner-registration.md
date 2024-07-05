# Aluga Fácil

## Introdução
O locador é o nosso usuário final.

## Casos de Uso

### Cadastro de Usuário
**Descrição**: Permite que um novo locador se cadastre no sistema. Esse cadastro pode ser de pessoa física ou pessoa jurídica. Caso seja de pessoa física apenas o locador terá acesso a administrar os seus aluguéis. Caso seja pessoa jurídica, operadores deverão ser cadastrados esses operadores terão acesso para administrar os aluguéis da empresa.

- **Ator Principal**: Locador
- **Atores Secundários**: N/A
- **Pré-condições**:
  1. O locador, seja ele pessoa física ou jurídica, não deve estar previamente cadastrado.
- **Fluxo Principal**:
  1. O usuário acessa a página de cadastro.
  2. O usuário preenche o formulário de cadastro com seus [dados](./renter-data.md).
  3. O sistema valida os dados fornecidos.
  4. O sistema cria um novo cadastro de locador.
  5. O sistema envia um email de confirmação para o locador.
  6. O locador confirma o cadastro clicando no link enviado por email.
  7. O sistema ativa a conta do locador.
- **Fluxos Alternativos**:
  - **F1**: Documento já registrado
    1. O sistema informa ao usuário que o documento fornecido já está cadastrado
  - **F2**: Dados inválidos.
    1. O sistema informa ao usuário sobre os dados inválidos e solicita a correção.
- **Pós-condições**:
  1. O usuário está cadastrado e com a conta ativa no sistema.

## Outros Casos de Uso
- [Login de Usuário](documentation/use_cases/user_login.md)
- [Recuperação de Senha](documentation/use_cases/password_recovery.md)
