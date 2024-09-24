# Fetch Example

This repository demonstrates a simple use of `fetch` with a client and a server.

> NOTE: **This example requires at least Node 18 or higher**.
>
> The `client` code will also work in the browser

## Project Files

- `node_modules/`
    - A directory containing application 3rd party dependencies
- `src/`
    - The source code directory
    - `client.js`
        - A Javascript file that makes a few `fetch` calls to a running server
    - `server.js`
        - A JavaScript file that listens for `fetch` requests
- `.gitignore`
    - Files that should not be comitted to git
- `package-lock.json`
    - A snapshot of the exact versions of all the nested 3rd party dependencies
- `package.json`
    - The project manifest file describing how to start the project and the direct dependencies

## Using the Application

If you have `Node.js` installed, run the following in the project directory:

Firstly, install the project dependencies by running:

```bash
npm install
```

Next, you can start the server by running:

```bash
npm run start
```

After the server is started, you can get the list of studies by calling:

- <http://localhost:8080/studies> 
    - (get all studies)
- <http://localhost:8080/studies?studyId=1>
    - (get a study by query parameter)
- <http://localhost:8080/studies/2> 
    - (get a study by route parameters)

Finally, to run the client example, run the following in a new terminal:

```bash
npm run client
```