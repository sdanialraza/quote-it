# Get Quotes In Category

Get all quotes in a specific category. Returns an array of [quote objects](../../README.md#quote-structure) on success.

## Endpoint

```http
GET /quotes/category/:category
```

## Parameters

- **category** - The name of the category.

## Example Response

```json
[
  {
    "id": 4,
    "createdAt": "2024-01-13T02:35:52.173Z",
    "updatedAt": "2024-01-13T02:35:52.173Z",
    "author": "Eleanor Roosevelt",
    "categories": ["People"],
    "submitter": "sdanialraza",
    "text": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "verified": true
  }
]
```
