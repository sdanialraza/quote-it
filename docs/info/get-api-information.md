# Get API Information

Get information about the API. Returns an object containing information about the API on success.

## Endpoint

```http
GET /info
```

## Parameters

No specific parameters are required for this endpoint.

## Example Response

```json
{
  "name": "Quote-It",
  "description": "Your go-to API for inspiring, and thought-provoking quotes.",
  "version": "1.0.0",
  "counts": {
    "quotes": 51
  }
}
```
