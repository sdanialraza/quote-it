# Get Quotes By Author

Get all quotes by a specific author. Returns an array of [quote objects](../../README.md#quote-structure) on success.

## Endpoint

```http
GET /quotes/author/:author
```

## Parameters

- **author** - The name of the author.

### Example Response

```json
[
  {
    "id": 16,
    "createdAt": "2024-01-13T02:35:52.213Z",
    "updatedAt": "2024-01-13T02:35:52.213Z",
    "author": "Winston Churchill",
    "categories": ["Motivational"],
    "submitter": "sdanialraza",
    "text": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "verified": true
  },
  {
    "id": 39,
    "createdAt": "2024-01-13T02:35:52.286Z",
    "updatedAt": "2024-01-13T02:35:52.286Z",
    "author": "Winston Churchill",
    "categories": ["Wisdom"],
    "submitter": "sdanialraza",
    "text": "Success consists of going from failure to failure without loss of enthusiasm.",
    "verified": true
  }
]
```
