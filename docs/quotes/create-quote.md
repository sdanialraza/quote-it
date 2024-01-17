# Create Quote

Create a quote in the Quote It API. Returns a [quote object](../../README.md#quote-structure) on success.

## Endpoint

```http
POST /quotes
```

## Request Body

The request body takes the following JSON format:

| Field      | Type            | Description                                           |
| ---------- | --------------- | ----------------------------------------------------- |
| author\*   | ?string         | The author of the quote (1-30 characters)             |
| categories | array of string | The categories the quote belongs in (1-20 characters) |
| submitter  | string          | The submitter of the quote (1-20 characters)          |
| text       | string          | The text content of the quote (1-200 characters)      |

\* The author field is optional. If it is not provided, the author will be set to "Unknown".

## Example Request Body

```json
{
  "quote": {
    "author": "Steve Jobs",
    "categories": ["Work"],
    "submitter": "sdanialraza",
    "text": "The only way to do great work is to love what you do."
  }
}
```

## Example Response Body

```json
{
  "quote": {
    "author": "Steve Jobs",
    "createdAt": "2024-01-17T23:02:53.795Z",
    "updatedAt": "2024-01-17T23:02:53.795Z",
    "categories": ["Work"],
    "id": 1,
    "submitter": "sdanialraza",
    "text": "The only way to do great work is to love what you do.",
    "verified": false
  }
}
```

`verified` property will always be false for newly created quotes. More information on verification can be found [here](../../README.md#quote-structure).
