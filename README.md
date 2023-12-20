# Instanvi Frontend application

Project description // This will be added this later

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)

## Overview

Provide a brief overview of your project, its purpose, and any other relevant information. Include badges for build status, version, or any other status indicators. // This will be added this later

## Features

key features of your project.

- Authentication
- Managing campaigns
- Managing channels
- Managing Inventory
- Managing leads
- ...

## Installation

Follow these the steps to install your project locally.

```bash
# Clone the repository
git clone https://github.com/Instanvi/instanvi.git

# Navigate to the project directory
cd your-project

# Install dependencies
npm config set -- //gitlab.com/:\_authToken=glpat-72HjzYCy8B-KpTN4A2YD
npm config set @instanvi:registry=https://gitlab.com/api/v4/projects/49116591/packages/npm/
echo @instanvi:registry=https://gitlab.com/api/v4/projects/49116591/packages/npm/ >> .npmrc
npm i @instanvi/client
-npm install --force
```

## Usage

```bash
# Run the application
npm run dev
```

## Folder structure

```bash
public/           # Public assets
|-- fonts/        # fonts
|-- images/       # images
|-- locales/      # locales for translation
src/              # Source code
|-- @types/       # Stylesheets
|-- api/          # methods communicating with the instanvi service (this will be removed as logic is moved to redux actions)
|-- app/          # Initializing the redux store, all state related hooks
|-- components/   # React components
|-- configs/      # Constants and instanvi service configurations
|-- constants/    # constants
|-- features/     # all features essentially all pages and UI
|-- helpers/      # Helper functions
|-- layouts/      # layouts
|-- libs/         # Instanvi API service and react query instances
|-- pages/        # All project pages, this essentially serves as the router only
|-- providers/    # APP
|-- redux/        # Redux related assets (slices and actions)
|-- utils/        # Utility functions
```

# Contributing

Do the following checks after implementing your changes

- remove all unused declarations
- add key props to all jsx iterations
- remember to use Image instead of img
- remember some html props change in react e.g class si className.
- run the following command

```bash
npx eslint --fix .

npm run build
```

## General Guidelines:

- Descriptive and Meaningful:
  Choose names that clearly describe the purpose or intent of the variable, function, or class.
  Avoid single-letter variable names (except for loop indices).
- Use Camel Case:
  For variables and functions, use camel case (e.g., myVariable, calculateTotal()).
- Use Pascal Case for Components and Classes:
  For class names, use Pascal case (e.g., MyComponent).
- Use UPPERCASE for Constants:
  Constants should be written in uppercase with underscores separating words (e.g., MAX_SIZE).
- Avoid Reserved Words:
  Avoid using reserved words or keywords of the programming language.

## Specific Guidelines: - Modules/Files:

- Use camel case for file names (e.g., myModule.js).
- Use kebab case for page file names (e.g., my-page.jsx).
- Boolean Variables:
  Prefix boolean variable names with "is," "has," or similar (e.g., isEnabled, hasPermission).
- Private Variables/Methods:
  Prefix private variables or methods with an underscore (\_) to indicate they are not meant to be accessed externally.
