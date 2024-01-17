# Get Quote By Id

Get a quote by its id. Returns a single [quote object](../../README.md#quote-structure) on success.

## Endpoint

```http
GET /quotes/:id
```

## Parameters

- **id** - The id of the quote.

### Example Response

```json
{
  "id": 19,
  "createdAt": "2024-01-13T02:35:52.222Z",
  "updatedAt": "2024-01-13T02:35:52.222Z",
  "author": "Napoleon Hill",
  "categories": ["Motivational"],
  "submitter": "sdanialraza",
  "text": "The starting point of all achievement is desire.",
  "verified": true
}
```
