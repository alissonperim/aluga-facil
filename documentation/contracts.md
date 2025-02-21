# Contratos

## Introdução
Documentos assinados digitalmente entre locador e locatário.

## Casos de Uso

### Cadastro de Usuário
**Descrição**: Contratos são documentos que serão assinados digitalmente por duas partes, locador e locatário. O locador é a entidade `Customer` o locatário é a entidade `Renter`. Contratos devem conter;.z     o usuário, o locatário, o imóvel e os proprietários do imóvel que foram previamente registrados pelo locatário.

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
- [Login de Usuário](documentation/use_cases/customer_login.md)
- [Recuperação de Senha](documentation/use_cases/password_recovery.md)
