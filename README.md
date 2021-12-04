# Health-Care-API
API for HealthCareSystem

[URL](https://health-care-api.vercel.app/)
## REST API

All the REST API routes to the server described below.

**Create User**
---
  Create a user.

* **URL**

  /api/auth/signup

* **Method:**

  `POST`

* **Data Params**

  ```
  {
      username : username,
      email : email,
      password : password,
      roles : ["user","admin"]
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ "message": "User was registered successfully!" }`
 
* **Error Response:**

  * **Code:** 400 Bad Request <br />
    **Content:** `{ "message": "Failed! Username is already in use!" }`

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Server Error" }`
   

**Authenticate User**
---
  Login user with email and password

* **URL**

  /api/auth/signin

* **Method:**

  `POST`

* **Data Params**

  ```
  {
      email : email,
      password : password
  }
  ```

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** 
    ```
    {
        "id": "userId",
        "username": "username",
        "email": "email",
        "roles": [
            "ROLES"
        ],
        "accessToken":"JWT_ACCESS_TOKEN"
    }
    ```
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{  "message": "User Not found." }`
    
  OR
  * **Code:** 401 Unauthorized <br />
    **Content:** `{  "message": "Invalid Password!" }`

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** `{ "message": "Server Error" }`
