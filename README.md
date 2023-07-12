# Angular Template

This is a comprehensive Angular application which is designed to be scalable, maintainable and robust. The application follows a clear directory structure along with a set of predefined scripts for build, development, testing and formatting. This application has been enhanced with a range of libraries such as Husky, Commitlint, AutoChangelog, Bootstrap, and ng-bootstrap.

## Getting Started

To get started, clone the repository to your local machine and install the dependencies:

```shell
git clone <repo_url>
cd <project_name>
yarn
```

## Scripts

The `package.json` file includes the following scripts:

- `yarn start`: Runs the app in development mode on `http://localhost:4200`
- `yarn build`: Builds the app for production in the `dist/` folder
- `yarn build:dev`, `yarn build:qc`, `yarn build:uat`, `yarn build:prod`: Builds the app with different configurations
- `yarn watch`: Builds the app in development mode and watches for changes
- `yarn test`: Runs unit tests via [Karma](https://karma-runner.github.io)
- `yarn format`: Formats the code using Prettier
- `yarn prepare`: Sets up Husky for Git hooks
- `yarn changelog`: Generates a changelog based on git commits
- `yarn changelog:commit`: Generates a changelog and amends the current commit with the new changelog

## Local Testing of Builds

After running the build script, you may want to test the resulting build in a local environment. To do this, you can use a simple, zero-configuration command-line HTTP server, such as `http-server`.

If you haven't installed it yet, you can do so globally by running:

```shell
npm install --global http-server
```

Then, navigate to your build directory and start the server:

```shell
cd dist/<project_name>
http-server
```

By default, this will start the server on port 8080. You can then navigate to `http://localhost:8080` in your browser to view your application.

## Project Structure

This application follows a particular structure:

- `src/app`: Contains the main app module and components
  - `containers/`: Contains the components that make up your application's screens, pages, dialogs
  - `core/`: Contains core features that are used throughout the application, including:
    - `enums`: Place to define enumerations
    - `interfaces`: Place to define typescript interfaces
    - `layouts`: Contains the layouts used for the modules
    - `models`: Place to define application models
    - `services`: Contains services to handle API communication and business logic
  - `shared/`: Contains the modules (like utils, modules, mocks data, pipes) which are used throughout the application
  - `views/`: Contains pages as per modules
- `src/assets`: Contains all static assets
  - `fonts/`: Contains font files
  - `icons/`: Contains icon files
  - `images/`: Contains image files
  - `styles/`: Contains global scss stylesheets
- `src/environments`: Contains files for different environment variables.

## Additional Documentation

You can refer to the following resources to better understand the libraries used:

- [Angular](https://angular.io/docs)
- [Husky](https://typicode.github.io/husky/#/)
- [Commitlint](https://commitlint.js.org/#/)
- [AutoChangelog](https://github.com/CookPete/auto-changelog)
- [Bootstrap](https://getbootstrap.com/docs/)
- [ng-bootstrap](https://ng-bootstrap.github.io/#/home)

## CSS Standards (SCSS with ABEM)

This project uses SCSS with the [ABEM](https://css-tricks.com/abem-useful-adaptation-bem/) methodology. Color variables should be named according to [Hexcol](https://hexcol.com/) standards.

## Commit Rules & Rebase Process

This project uses [Commitlint](https://commitlint.js.org/#/) to enforce a standard format for commit messages. Here are the basic rules:

- `build`: Changes that affect the build system or external dependencies.
- `chore`: Updates tasks unrelated to the application's source code or tests.
- `ci`: Changes to our CI configuration files and scripts.
- `docs`: Marks a commit that updates the documentation.
- `feat`: Marks a commit that adds a new feature to the application.
- `fix`: Marks a commit that fixes a bug in your code.
- `perf`: A code change that improves performance.
- `refactor`: Marks a commit that modifies the source code but neither fixes a bug nor adds a feature.
- `revert`: Reverts a previous commit.
- `style`: Marks a commit that does not affect the meaning of the code (whitespace, formatting, missing semi-colons, etc.)
- `test`: Marks a commit that adds or modifies tests.
- `translation`: Marks a commit that adds or updates translations.
- `security`: Marks a commit that improves application security.
- `changeset`: Marks a commit that brings several changes bundled together.

Rebase is a git process that allows you to modify and optimize your commit history. This is very useful when you want to keep your commit history clean and clear. Here is the basic rebase process:

1. Fetch the latest changes from the branch you want to rebase onto (usually `develop` or `stagging`): `git fetch origin develop`
2. Switch to the branch you want to rebase: `git checkout <your_branch>`
3. Start the rebase process: `git rebase origin/develop`
4. Resolve any conflicts that might arise during the rebase.
5. Once all conflicts have been resolved, continue the rebase process using: `git rebase --continue`
6. Push your changes to the remote branch, you might need to use the `--force` option: `git push origin <your_branch> --force`

## Contribution

Contributions to this project are welcomed. Please ensure to follow the guidelines when making a commit, husky and commitlint will ensure that all your commits follow the correct pattern. When making a pull request, make sure you have updated the Changelog accordingly.

## Docker Build and Run

**See-more:** <https://docs.docker.com/get-started/overview/>

To build and run the Docker image for each environment, use the following commands:

- For the development environment:

**Case 1:**

```shell
docker-compose build
```

**Case 2:**

```shell
docker build -t my-app-dev -f Dockerfile.dev .
docker run -p 4200:80 my-app-dev
```

- For the QC environment:

```shell
docker build -t my-app-qc -f Dockerfile.qc .
docker run -p 4201:80 my-app-qc
```

- For the UAT environment:

```shell
docker build -t my-app-uat -f Dockerfile.uat .
docker run -p 4202:80 my-app-uat
```

- For the production environment:

```shell
docker build -t my-app-prod -f Dockerfile.prod .
docker run -p 4203:80 my-app-prod
```

Remember to replace `my-app-dev`, `my-app-qc`, `my-app-uat`, and `my-app-prod` with the names you want to assign to the Docker image for each environment.
