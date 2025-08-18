
# Get User

Retrieve details of a single user by ID.

---

## Endpoint

```

GET /users/\:id

````

Base URL: [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com)

---

## Request

### Example Request with `curl`

```bash
curl https://jsonplaceholder.typicode.com/users/1
````

### Example Request with JavaScript (Fetch API)

```js
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then((response) => response.json())
  .then((data) => console.log(data));
```

---

## Response

```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org"
}
```

