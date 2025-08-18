
# Create Post

Create a new post using a `POST` request.

## Endpoint
`POST /posts`  
Base URL: https://jsonplaceholder.typicode.com

## Request Body
Send JSON with the following fields:

```json
{
  "title": "My first post",
  "body": "Hello world!",
  "userId": 1
}
````

## Example (curl)

```bash
curl -X POST https://jsonplaceholder.typicode.com/posts \
  -H "Content-Type: application/json" \
  -d "{\"title\":\"My first post\",\"body\":\"Hello world!\",\"userId\":1}"
```

## Example (JavaScript)

```js
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    title: "My first post",
    body: "Hello world!",
    userId: 1
  })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
```

## Sample Response

```json
{
  "id": 101,
  "title": "My first post",
  "body": "Hello world!",
  "userId": 1
}
```








