# Postman Installation & Exploration

## Assignment Objective

This assignment aims to:

- Download and install Postman on a local machine.
- Explore and understand its core functionalities.

---

## Exploring Postman

After installation, open Postman and explore the following features:

### 1. **Creating a Request**

- Click on **"New"** > **"HTTP Request"**.
- Set method (GET, POST, etc.) and URL.
- Hit **Send** and observe the response.

### 2. **Collections**

- Group multiple requests under one collection.
- Useful for organizing API endpoints.

### 3. **Environment Variables**

- Define variables like `base_url` to reuse across requests.
- Helps in switching between dev/staging/prod environments.

### 4. **Authorization**

- Test APIs that require authentication using built-in auth options (Bearer Token, Basic Auth, etc.).

### 5. **Tests**

- Write JavaScript test scripts under the **"Tests"** tab to automate response validation.

### 6. **History & Workspace**

- View previously made requests.
- Use workspaces to organize work for different projects.

---

## Sample API Test

```http
GET https://jsonplaceholder.typicode.com/posts/1
```

### Expected Response:

```json
{
  "userId": 1,
  "id": 1,
  "title": "...",
  "body": "..."
}
```
