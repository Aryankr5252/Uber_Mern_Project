## POST /users/register

Description
---
Registers a new user. The endpoint validates the incoming JSON payload, hashes the password, saves the user in the database, and returns a JWT token on success.

URL
---
POST /users/register

Headers
---
- Content-Type: application/json

Request body (JSON)
---
The request body must be a JSON object with the following shape:

```
{
  "fullname": {
    "firstname": "string (required, min length 3)",
    "lastname": "string (optional, min length 3)"
  },
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length 6)"
}
```

Example request
---
```
{
  "fullname": { "firstname": "Aryan", "lastname": "Kumar" },
  "email": "aryan@example.com",
  "password": "s3cr3tP@ss"
}
```

Validation rules (as implemented)
---
- `email` must be a valid email.
- `fullname.firstname` is required and must be at least 3 characters.
- `password` is required and must be at least 6 characters.

Responses
---
- 201 Created
  - Description: User successfully created.
  - Body (JSON):
    ```json
    {
      "user": {
        "_id": "string",
        "fullname": { "firstname": "string", "lastname": "string" },
        "email": "string",
        "socketId": "string (optional)"
      },
      "token": "<jwt token>"
    }
    ```

- 400 Bad Request
  - Occurs for validation errors or if a user with the same email already exists.
  - Validation error example (express-validator):
    ```json
    { "errors": [ { "msg": "Invalid email format", "param": "email", "location": "body" } ] }
    ```
  - Duplicate email example (as returned by the controller):
    ```json
    { "success": false, "message": "User already registered with this email" }
    ```

- 500 Internal Server Error
  - Generic server error for unexpected failures.

Notes
---
- Passwords are hashed before being stored. The API controller returns a `user` object and a JWT token on success. The Mongoose schema sets `password` to `select: false`, so password fields are not exposed in query results by default.
- Always send requests over HTTPS in production.

If you want, I can add example curl and Postman snippets or add this endpoint to a higher-level API docs file.

## POST /users/login

Description
---
Authenticates a user. The endpoint validates the incoming JSON payload, checks the email and password, and returns a JWT token on success.

URL
---
POST /users/login

Headers
---
- Content-Type: application/json

Request body (JSON)
---
The request body must be a JSON object with the following shape:

```
{
  "email": "string (required, must be a valid email)",
  "password": "string (required, min length 6)"
}
```

Example request
---
```
{
  "email": "aryan@example.com",
  "password": "s3cr3tP@ss"
}
```

Validation rules (as implemented)
---
- `email` must be a valid email.
- `password` is required and must be at least 6 characters.

Responses
---
- 201 Created
  - Description: User successfully authenticated.
  - Body (JSON):
    ```json
    {
      "user": {
        "_id": "string",
        "fullname": { "firstname": "string", "lastname": "string" },
        "email": "string",
        "socketId": "string (optional)"
      },
      "token": "<jwt token>"
    }
    ```

- 400 Bad Request
  - Occurs for validation errors.
  - Validation error example:
    ```json
    { "errors": [ { "msg": "Invalid email format", "param": "email", "location": "body" } ] }
    ```

- 401 Unauthorized
  - Occurs when the email or password is invalid.
  - Example response:
    ```json
    {
      "success": false,
      "message": "Invalid email or password"
    }
    ```

- 500 Internal Server Error
  - Generic server error for unexpected failures.

Notes
---
- Passwords are compared using the `comparePassword` method in the user model.
- Always send requests over HTTPS in production.

## GET /users/profile

Description
---
Fetches the profile of the currently authenticated user. The endpoint requires a valid JWT token to be sent in the request headers.

URL
---
GET /users/profile

Headers
---
- Authorization: Bearer <jwt token>

Responses
---
- 200 OK
  - Description: Successfully fetched user profile.
  - Body (JSON):
    ```json
    {
      "_id": "string",
      "fullname": { "firstname": "string", "lastname": "string" },
      "email": "string",
      "socketId": "string (optional)"
    }
    ```

- 401 Unauthorized
  - Occurs when the JWT token is missing or invalid.
  - Example response:
    ```json
    {
      "success": false,
      "message": "Unauthorized access"
    }
    ```

- 500 Internal Server Error
  - Generic server error for unexpected failures.

Notes
---
- Ensure the token is valid and not blacklisted.
- Always send requests over HTTPS in production.

---

## POST /users/logout

Description
---
Logs out the currently authenticated user. The endpoint clears the authentication token from cookies and blacklists the token to prevent further use.

URL
---
POST /users/logout

Headers
---
- Authorization: Bearer <jwt token> (optional, if token is not in cookies)

Responses
---
- 200 OK
  - Description: Successfully logged out.
  - Body (JSON):
    ```json
    {
      "success": true,
      "message": "Logged out successfully"
    }
    ```

- 500 Internal Server Error
  - Generic server error for unexpected failures.

Notes
---
- The token is cleared from cookies and added to a blacklist to prevent reuse.
- Always send requests over HTTPS in production.
