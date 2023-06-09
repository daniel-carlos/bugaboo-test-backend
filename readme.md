# Teste Bugaboo Studio (Backend)

Este projeto é parte de um teste para a empresa Bugaboo Studio que engloba outro projeto de um game feito na Unity Engine desenvolvidos por Daniel Carlos.
<br>
Esete projeto trata-se de uma API (backend) que será consumida pelo projeto Unity (frontend).

Para acessar o repositório do projeto Unity, clique <a href="https://github.com/daniel-carlos/bugaboo-test-unity" target="_blank">AQUI</a>


## Requerimentos
Para rodar a API, você precisará do [Node.js](https://nodejs.org/en)

## Instalação
1) Clonar o repositório
    ```console
    git clone https://github.com/daniel-carlos/bugaboo-test-backend
    cd bugaboo-test-backend
    ```
1) Instalar as dependências
    ```console
    npm install
    ```
    <font size='2'>Obs.: uma das dependências (prisma) não funciona se instalada usando o Yarn.</font>

1) Criar arquivo <code>.env</code>
    Crie um arquivo <code>.env</code> a partir de uma cópia deo arquivo <code>copy.env</code>
    <br>
    Modifique o <code>.env</code> atribuindo na variável <b>DATABASE_URL</b> um caminho para o arquivo de banco de dados (SQLite) e em <b>PORT</b>, a porta em que a API irá rodar.
    <br>
    <span style="font-size: 90%; background-color: gray; color: black">Obs.: por questões de praticidade, o projeto foi configurado para usar um banco de dados SQLite. Para usar outro banco de dados (como PostgreSQL, por exemplo) consulte na documentação do Prisma como configurar o <b>datasource</b> no arquivo <code>schema.prisma</code>
    <br></span>


1) Configurar o Prisma
    <br>
    Gerar as classes auxiliares do Prisma
    ```console
    npx prisma generate
    ```
    Aplicar as migrations
    ```console
    npx prisma migrate deploy
    ```

1) Executar a aplicação localmente
    ```console
    npm start
    ```

Executados os passos acima listados, a aplicação estará rodando no endereço <code>http://localhost:3003</code> ou na porta que foi configurada no arquivo <code>.env</code>

