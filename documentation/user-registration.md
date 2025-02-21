# Aluga Fácil

## Introdução
O locatário é o nosso usuário final.

## Casos de Uso

### Cadastro de Usuário
**Descrição**: Permite que um novo usuário se cadastre no sistema.

- **Ator Principal**: Usuário Final
- **Atores Secundários**: N/A
- **Pré-condições**: 
  1. O usuário não deve estar previamente cadastrado.
- **Fluxo Principal**:
  1. O usuário acessa a página de cadastro.
  2. O usuário preenche o formulário de cadastro com seus [dados](./customer-data.md).
  3. O sistema valida os dados fornecidos.
  4. O sistema cria uma nova conta de usuário.
  5. O sistema envia um email de confirmação para o usuário.
  6. O usuário confirma o cadastro clicando no link enviado por email.
  7. O sistema ativa a conta do usuário.
- **Fluxos Alternativos**:
  - **F1**: O email já está em uso.
    1. O sistema informa ao usuário que o email já está em uso e solicita um email diferente.
  - **F2**: Documento já registrado
    1. O sistema informa ao usuário que o documento fornecido já está cadastrado
  - **F3**: Dados inválidos.
    1. O sistema informa ao usuário sobre os dados inválidos e solicita a correção.
- **Pós-condições**:
  1. O usuário está cadastrado e com a conta ativa no sistema.

## Outros Casos de Uso
- [Login de Usuário](documentation/use_cases/customer_login.md)
- [Recuperação de Senha](documentation/use_cases/password_recovery.md)
