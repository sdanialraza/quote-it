# Get All Quotes

Get all quotes. Returns an array of [quote objects](../../README.md#quote-structure) on success.

## Endpoint

```http
GET /quotes
```

## Parameters

No specific parameters are required for this endpoint.

## Example Response

```json
[
  {
    "id": 1,
    "createdAt": "2024-01-13T02:35:52.159Z",
    "updatedAt": "2024-01-13T02:35:52.159Z",
    "author": "Steve Jobs",
    "categories": ["Work"],
    "submitter": "sdanialraza",
    "text": "The only way to do great work is to love what you do.",
    "verified": true
  },
  {
    "id": 2,
    "createdAt": "2024-01-13T02:35:52.166Z",
    "updatedAt": "2024-01-13T02:35:52.166Z",
    "author": "Nelson Mandela",
    "categories": ["Life"],
    "submitter": "sdanialraza",
    "text": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "verified": true
  }
]
```
