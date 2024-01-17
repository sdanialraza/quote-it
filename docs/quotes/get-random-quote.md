# Get Random Quote

Get a random quote. Returns a single [quote object](../../README.md#quote-structure) on success.

## Endpoint

```http
GET /quotes/random
```

## Parameters

No specific parameters are required for this endpoint.

## Example Response

```json
{
  "id": 21,
  "createdAt": "2024-01-13T02:35:52.228Z",
  "updatedAt": "2024-01-13T02:35:52.228Z",
  "author": "Martin Luther King Jr.",
  "categories": ["Inspirational"],
  "submitter": "sdanialraza",
  "text": "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",
  "verified": true
}
```
