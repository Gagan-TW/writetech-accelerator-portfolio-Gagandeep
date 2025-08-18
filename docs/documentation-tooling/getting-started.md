


# Getting Started

This guide will help you start using **JSONPlaceholder**, a free fake REST API for testing and prototyping.

## Step 1: Base URL

All requests use the following base URL:

```

[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)

```

---

## Step 2: Choose an Endpoint

JSONPlaceholder provides different endpoints such as:

- `/posts`
- `/comments`
- `/albums`
- `/photos`
- `/todos`
- `/users`

---

## Step 3: Try Your First Request

1. Open your browser or an API tool like **Postman**.  
2. Paste this URL:  

```

[https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

````

3. Press **Enter** or **Send**.  
4. You’ll get a JSON response with a list of fake users.  

---

## Example Request & Response

### Request
```http
GET /users HTTP/1.1
Host: jsonplaceholder.typicode.com
````

### Response

```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  },
 
]
```

---

## Step 4: Use in Your App

You can fetch this API in any programming language.
Here’s an example in **JavaScript**:

```js
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => console.log(data));
```

---
