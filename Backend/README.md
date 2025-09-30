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

## POST /captains/register

Description
---
Registers a new captain. The endpoint validates the incoming JSON payload, hashes the password, saves the captain in the database, and returns a JWT token on success.

URL
---
POST /captains/register

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
  "password": "string (required, min length 6)",
  "vehicle": {
    "color": "string (required, min length 3)",
    "plate": "string (required, min length 3)",
    "capacity": "integer (required, min value 1)",
    "vehicleType": "string (required, must be 'car', 'motorcycle', or 'auto')"
  }
}
```

Example request
---
```
{
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john.doe@example.com",
  "password": "securePass123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

Validation rules (as implemented)
---
- `email` must be a valid email.
- `fullname.firstname` is required and must be at least 3 characters.
- `password` is required and must be at least 6 characters.
- `vehicle.color` is required and must be at least 3 characters.
- `vehicle.plate` is required and must be at least 3 characters.
- `vehicle.capacity` is required and must be an integer with a minimum value of 1.
- `vehicle.vehicleType` is required and must be one of `car`, `motorcycle`, or `auto`.

Responses
---
- 201 Created
  - Description: Captain successfully created.
  - Body (JSON):
    ```json
    {
      "captain": {
        "_id": "string",
        "fullname": { "firstname": "string", "lastname": "string" },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
      },
      "token": "<jwt token>"
    }
    ```

- 400 Bad Request
  - Occurs for validation errors or if a captain with the same email already exists.
  - Validation error example:
    ```json
    { "errors": [ { "msg": "Invalid email format", "param": "email", "location": "body" } ] }
    ```
  - Duplicate email example:
    ```json
    { "success": false, "message": "Captain already registered with this email" }
    ```

- 500 Internal Server Error
  - Generic server error for unexpected failures.

Notes
---
- Passwords are hashed before being stored. The API controller returns a `captain` object and a JWT token on success.
- Always send requests over HTTPS in production.

## POST /captains/login

Description
---
Authenticates a captain. The endpoint validates the incoming JSON payload, checks the email and password, and returns a JWT token on success.

URL
---
POST /captains/login

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
  "email": "john.doe@example.com",
  "password": "securePass123"
}
```

Validation rules (as implemented)
---
- `email` must be a valid email.
- `password` is required and must be at least 6 characters.

Responses
---
- 201 Created
  - Description: Captain successfully authenticated.
  - Body (JSON):
    ```json
    {
      "captain": {
        "_id": "string",
        "fullname": { "firstname": "string", "lastname": "string" },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "integer",
          "vehicleType": "string"
        }
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
- Passwords are compared using the `comparePassword` method in the captain model.
- Always send requests over HTTPS in production.

## GET /captains/profile

Description
---
Fetches the profile of the currently authenticated captain. The endpoint requires a valid JWT token to be sent in the request headers.

URL
---
GET /captains/profile

Headers
---
- Authorization: Bearer <jwt token>

Responses
---
- 200 OK
  - Description: Successfully fetched captain profile.
  - Body (JSON):
    ```json
    {
      "_id": "string",
      "fullname": { "firstname": "string", "lastname": "string" },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "integer",
        "vehicleType": "string"
      }
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

## GET /captains/logout

Description
---
Logs out the currently authenticated captain. The endpoint clears the authentication token from cookies and blacklists the token to prevent further use.

URL
---
GET /captains/logout

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

## GET /rides/get-fare

Description
---
Calculates the estimated fare for a ride based on the pickup and destination locations.

URL
---
GET /rides/get-fare

Headers
---
- Authorization: Bearer <jwt token>

Query Parameters
---
- `pickup` (string, required): The pickup location. Must be at least 3 characters long.
- `destination` (string, required): The destination location. Must be at least 3 characters long.

Example Request
---
```
GET /rides/get-fare?pickup=562/11-A&destination=105%20William%20St HTTP/1.1
Host: localhost:4000
Authorization: Bearer <jwt token>
```

Responses
---

- **200 OK**
  - Description: Successfully calculated the fare.
  - Body (JSON):
    ```json
    {
      "success": true,
      "fare": {
        "auto": 50.5,
        "car": 80.75,
        "motorcycle": 40.25
      }
    }
    ```

- **400 Bad Request**
  - Occurs when validation fails for the query parameters.
  - Example response:
    ```json
    {
      "errors": [
        {
          "msg": "Pickup location must be at least 3 characters long",
          "param": "pickup",
          "location": "query"
        }
      ]
    }
    ```

- **401 Unauthorized**
  - Occurs when the JWT token is missing or invalid.
  - Example response:
    ```json
    {
      "success": false,
      "message": "Access denied."
    }
    ```

- **500 Internal Server Error**
  - Generic server error for unexpected failures.
  - Example response:
    ```json
    {
      "success": false,
      "message": "Failed to calculate fare"
    }
    ```

Notes
---
- The fare is calculated based on the distance and time between the pickup and destination locations.
- Different rates are applied for `auto`, `car`, and `motorcycle`.
- Always send requests over HTTPS in production.