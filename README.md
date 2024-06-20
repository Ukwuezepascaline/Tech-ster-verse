# Techsterverse Frontend

## Description

Techsterverse Frontend is a web application designed for collaboration, mentorship, and various other activities. 

## Getting Started

Follow these steps to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone the project repository to your local machine only if you are a collaborator:

    ```bash
   git clone https://github.com/TechSterVerse/techsterverse-frontend.git
    ```

2. Navigate to the project directory:

    ``` bash
    cd techsterverse-frontend
    ```

### Before Starting Your Assigned Task

Before you begin working on your assigned task, follow these steps to ensure you are working on the correct branch and keep your codebase up-to-date:

1. Check the current git branch you are on using:

   ```bash
   git status
   ```

2. If you are on the master or main branch [NOTE: Check the branch name if it is master or main], it's essential to pull the latest changes from the remote repository and if not make sure to checkout to main or master branch before start a new task.

    - If you are on the master or main branch.

        ```bash
        git pull origin master or main
        ```


3. Create a new branch for your task by running the following command. Replace branch-name with the name of the task you are assigned to for the first time. If the branch already exists, skip this step:

    ```bash
    git checkout -b branch-name
    ```

    - If the branch already exists, switch to that branch using:

        ```bash
        git checkout branch-name
        ```

3. Install the project dependencies using npm:

    ```bash
    npm install
    ```

#### Usage

To start the Techsterverse Frontend application, run the following command:

```bash
npm start
```

The server will start and be accessible at <http://localhost:3000> OR at the port specified to view in the browser.

### Working on Your Task

After ensuring you are on the correct branch, you can proceed with writing code and installing dependencies for your assigned task.

Always run this command to get the latest update
    ```
    git pull origin main or master
    ```

### Completing Your Task

Once you have completed your task, follow these steps to commit your changes:

1. Add your changes to the staging area:

    ```bash
    git add .
    ```

2. Commit your changes with a descriptive message:

    ```bash
    git commit -m "Add a concise commit message here"
    ```

3. Push your changes to the remote repository. Replace branch-name with the name of the branch you created for your task:

    ```bash
    git push origin branch-name
    ```

### Submitting Your Changes

After pushing your changes, go to the repository on your Git hosting platform (e.g., GitHub) and create a pull request for your commit or branch. Submit the pull request link to the team lead or designated reviewers for inspection and approval.

### License

This project is licensed under the ISC License - see the LICENSE file for details.
