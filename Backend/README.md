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
