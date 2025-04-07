# Node.js Project: Understanding `package.json`

## What is `package.json`?

The `package.json` file is a crucial configuration file for Node.js projects. It contains important metadata about the project, including its name, version, dependencies, scripts, and more. This file helps manage project dependencies, automate tasks, and provide information about the project.

## Steps to Update `package.json`

1. Open a terminal and navigate to your project folder.
2. Run `npm init` to generate a `package.json` file (or use `npm init -y` to create one with default values).
3. Add necessary properties such as dependencies, devDependencies, scripts, and other metadata.

## Necessary Properties in `package.json`

Here are some key properties you should add to your `package.json` file:

- **name**: The name of the project.
- **version**: The version of the project.
- **description**: A brief description of the project.
- **main**: The entry point of the project.
- **scripts**: Commands to automate tasks like testing and starting the application.
- **dependencies**: Packages required for the project to run.
- **devDependencies**: Packages needed for development purposes only.
- **author**: The author of the project.
- **license**: Specifies the license for the project.

## Example `package.json`

```json
{
  "name": "assignment-03",
  "version": "1.0.0",
  "description": "Assignment-03",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Vedant Patel",
  "license": "ISC",
  "dependencies": {
    "express": "^5.1.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.9"
  }
}
```
