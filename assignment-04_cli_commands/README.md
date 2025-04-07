# Node.js Project: Learning and Executing CLI Commands

## Learning CLI Commands

Below are essential CLI commands categorized by their functions:

### 1. Check Versions

These commands check installed versions of Node.js and npm:

```sh
node -v  # Check the installed version of Node.js
npm -v   # Check the installed version of npm (Node Package Manager)
```

### 2. Initialize and Manage Projects

Create and manage a `package.json` file:

```sh
npm init    # Start interactive mode to generate package.json
npm init -y # Automatically generate package.json with default values
```

### 3. Install Dependencies

Install and manage packages:

```sh
npm install <package>          # Install a package
npm install --save-dev <package>  # Install as a development dependency
npm list                        # Show installed packages and their versions
```

### 4. Run Scripts from `package.json`

Execute predefined scripts:

```sh
npm start   # Run the "start" script defined in package.json
npm test    # Run the "test" script defined in package.json
npm run <script_name>  # Run a custom script defined in package.json
```

### 5. Execute Packages Using `npx`

Run commands from installed packages without globally installing them:

```sh
npx <command>  # Execute a package without installing it globally
```

### 6. Run Node.js Files

Execute a JavaScript file in Node.js:

```sh
node index.js  # Run the main file of the project
```

---

## Exploring Environment Variables

Environment variables control Node.js execution and behavior. Below are key variables:

### 1. Common Environment Variables

- **`NODE_ENV`**: Defines the environment type (e.g., `development`, `production`).
  ```sh
  export NODE_ENV=production # Set the environment variable
  ```
- **`NODE_DEBUG`**: Enables debugging for specific modules.
  ```sh
  export NODE_DEBUG=module
  ```
- **`NODE_OPTIONS`**: Passes additional options to Node.js.
  ```sh
  NODE_OPTIONS="--max-old-space-size=1024" node script.js
  ```
- **`UV_THREADPOOL_SIZE`**: Adjusts the thread pool size for asynchronous operations.
  ```sh
  export UV_THREADPOOL_SIZE=8
  ```

### 2. Additional Environment Variables

- `FORCE_COLOR=[1, 2, 3]` - Controls the level of color support in the terminal.
- `NODE_DEBUG_NATIVE=module[...]` - Enables debugging for native modules.
- `NODE_DISABLE_COLORS=1` - Disables colored output in Node.js logs.
- `NODE_EXTRA_CA_CERTS=file` - Specifies additional certificate authority (CA) files.
- `NODE_ICU_DATA=file` - Sets the path to ICU data files for internationalization.
- `NODE_NO_WARNINGS=1` - Suppresses all warnings in Node.js.
- `NODE_PATH=path[...]` - Specifies additional paths for module resolution.
- `NODE_PENDING_DEPRECATION=1` - Enables warnings for deprecated APIs.
- `NODE_PENDING_PIPE_INSTANCES=instances` - Configures pending pipe instances.
- `NODE_PRESERVE_SYMLINKS=1` - Preserves symbolic links when resolving modules.
- `NODE_REDIRECT_WARNINGS=file` - Redirects warnings to a specified file.
- `NODE_REPL_HISTORY=file` - Specifies a file to store REPL history.
- `NODE_REPL_EXTERNAL_MODULE=file` - Sets an external module for REPL.
- `NODE_SKIP_PLATFORM_CHECK=value` - Skips the platform compatibility check.
- `NODE_TLS_REJECT_UNAUTHORIZED=value` - Controls TLS certificate validation.
- `NODE_V8_COVERAGE=dir` - Enables V8 JavaScript engine coverage reports.
- `NO_COLOR=<any>` - Disables all color output.
- `OPENSSL_CONF=file` - Specifies the OpenSSL configuration file.
- `SSL_CERT_DIR=dir` - Sets the directory for SSL certificates.
- `SSL_CERT_FILE=file` - Sets the file path for SSL certificates.
- `TZ` - Configures the time zone for Node.js.

---

## Useful V8 Options

Node.js uses the V8 JavaScript engine, and we can pass options to modify its behavior.

### 1. Control Memory Usage

Increase memory allocation to prevent crashes due to memory limits:

```sh
node --max-old-space-size=2048 index.js  # Set memory limit to 2GB
```

### 2. Enable Debugging Mode

```sh
node --inspect index.js  # Enable debugging
```

### 3. Other Useful V8 Options

- `--max-old-space-size=SIZE` (in megabytes) - Sets the max heap memory size.
- `--max-semi-space-size=SIZE` (in megabytes) - Defines the max semi-space size for garbage collection.

---

## Steps to Complete the Assignment

1. Open a terminal and navigate to the project directory.
2. Run each of the CLI commands listed above and observe the output.
3. Experiment with setting environment variables and V8 options.
4. Document your findings and include useful commands in `README.md`.
