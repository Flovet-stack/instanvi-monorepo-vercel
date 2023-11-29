Run the following commands in this order

- npm config set -- //gitlab.com/:\_authToken=glpat-72HjzYCy8B-KpTN4A2YD
- npm config set @instanvi:registry=https://gitlab.com/api/v4/projects/49116591/packages/npm/
- echo @instanvi:registry=https://gitlab.com/api/v4/projects/49116591/packages/npm/ >> .npmrc
- npm i @instanvi/client
- npm install --force

run the project

- npm run dev

General Guidelines:

    - Descriptive and Meaningful:
        Choose names that clearly describe the purpose or intent of the variable, function, or class.
        Avoid single-letter variable names (except for loop indices).

    - Use Camel Case:
        For variables and functions, use camel case (e.g., myVariable, calculateTotal()).

    - Use Pascal Case for Classes:
        For class names, use Pascal case (e.g., MyClass).

    - Use UPPERCASE for Constants:
        Constants should be written in uppercase with underscores separating words (e.g., MAX_SIZE).

    - Avoid Reserved Words:
        Avoid using reserved words or keywords of the programming language.

Specific Guidelines: - Modules/Files:
Use camel case for file names (e.g., myModule.js).

    - Boolean Variables:
        Prefix boolean variable names with "is," "has," or similar (e.g., isEnabled, hasPermission).

    - Private Variables/Methods:
        Prefix private variables or methods with an underscore (_) to indicate they are not meant to be accessed externally.
