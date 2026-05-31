Estrutura geral do projeto
src/ → contém todo o código‑fonte principal.

__testes__ → arquivos de teste automatizado (Vitest ou Testing Library).

assets/ → imagens e outros recursos estáticos.

components/ → componentes reutilizáveis da interface (Sidebar, Footer, Cards, etc.).

contexts/ → gerenciamento de estado global, como autenticação via Context API.

pages/ → páginas completas (Welcome, Academic, Contact, Projects, etc.).

store/ → se houver, guarda lógica de estado adicional.

utils/ → funções auxiliares (ex.: manipulação de localStorage).

validations/ → esquemas de validação com Zod ou lógica de formulários.

App.jsx → componente raiz que organiza as rotas e renderiza o layout principal.

main.jsx → ponto de entrada da aplicação, onde o React é inicializado.

index.css → estilos globais.

setupTests.js → configuração dos testes.

Arquivos de configuração
vite.config.js → define o comportamento do Vite (build, plugins, etc.).

tailwind.config.js → configura o Tailwind CSS (cores, fontes, breakpoints).

postcss.config.js → integra o Tailwind ao processo de build.

eslint.config.js → regras de linting para manter o código padronizado.

.gitignore → lista arquivos que não devem ir para o Git.

index.html → arquivo base usado pelo Vite para montar o app.

Backend simulado
db.json → arquivo usado pelo json‑server para simular uma API local.
Você pode rodar com:

bash
npx json-server --watch db.json --port 3001
Scripts disponíveis (do package.json)
npm run dev → inicia o servidor de desenvolvimento.

npm run build → gera a versão de produção.

npm run preview → visualiza o build localmente.

npm run lint → verifica o código com ESLint.

npm test → executa os testes automatizados com Vitest.

Dependências principais
React 19, React DOM, React Router DOM → estrutura e navegação.

Tailwind CSS → estilização.

Zod → validação de formulários.

Vitest / Testing Library → testes.

Json‑server, Express, MySQL2, bcrypt, jsonwebtoken, cors → suporte para simulação de backend e autenticação.
