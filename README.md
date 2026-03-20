## Project Overview

- React component library with reusable UI components such as `Button`, `Table`, `HeroImage`, `Img`, `Dropdown`, etc.
- ESLint and Prettier configured for code linting and formatting.
- Husky pre-commit hooks enforce linting and run tests.
- Dockerized multi-stage build for production.

---

Prerequisites:

- Node.js (>=18 recommended)
- npm (>=9 recommended)
- Docker (for containerized deployment)
- Git (for version control)

---

## Setup Instructions

1.Copy the previous assignment and named react-component-library-cra-testing:

cd react-component-library-cra-testing

2.removed pre-existing .git folder and initialized git.

Initialized new git repository:
git init
git add .
git commit -m "Initial commit for assignment13"

git remote add origin https://github.com/RunDevelop344/react-component-library-cra-testing.git /assignment13-repo.git

git branch -M main
git push -u origin main

3.Installed dependencies:
npm install

npm start

4.Installed eslint prettier
npm install --save-dev eslint prettier eslint-config-prettier eslint-plugin-prettier

5.Verified installation:
npx eslint src --ext .js,.jsx,.ts,.tsx

6.Fixed eslint error: 29:22 error Avoid direct Node access. Prefer using the methods from Testing Library testing-library/no-node-access
To fix errors replaced direct Node access with Testing Library queries.

7.Tried running "npx eslint src --ext .js,.jsx,.ts,.tsx" again

8.npx prettier --check .

9.Fixed formatting of all the files by running:
npx prettier --write .

10.Installed husky:
npm install --save-dev husky lint-staged

11.Enabled Husky:
npx husky init and created .husky folder with pre-commit file in it and updated package.json

12.Configued lint-staged in package.json:
"lint-staged": {
"_.{js,jsx,ts,tsx}": [
"eslint --fix",
"prettier --write"
],
"_.{css,md,json,html}": [
"prettier --write"
]
}

13.Pre-commit:
npx lint-staged
CI=true npm test

Note: Tried commiting all my changes and now when i commit my changes it test all my files before I push the code.

14.Created GitHUb Action Workflow:
Created file: .github/workflows/ci.yml

15.Created Dockerfile:
Dockerfile
FROM node:18 AS build

WORKDIR /lastName_firstName_ui_garden_build_checks

COPY package\*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage

FROM nginx:alpine

COPY --from=build /lastName_firstName_ui_garden_build_checks/build /usr/share/nginx/html

EXPOSE 8018

CMD ["nginx", "-g", "daemon off;"]

16.Created Image with the following command:
docker build -t simran_simran_coding_assignment13 .

17.Built container using following command:
docker run -d -p 8018:80 --name simran_simran_coding_assignment13 simran_simran_coding_assignment13

18.Below is my GitHub Repository link:
https://github.com/RunDevelop344/react-component-library-cra-testing.git

Author: Simran Simran

License:This project is for academic and demonstration purposes.
