# 📝 Quote It

[![CI Tests](https://github.com/sdanialraza/quote-it/actions/workflows/tests.yml/badge.svg)](https://github.com/sdanialraza/quote-it/actions/workflows/tests.yml)

**Quote It** is a simple but powerful REST API that provides a collection of funny, inspirational, motivational, and thought-provoking quotes. You can also create your own quotes, check out the create quote documentation [here](docs/quotes/create-quote.md).

### 🖥️ Base URL

```
https://quoteit.sdanialraza.dev
```

## 🔧 Usage

For detailed information on how to use each endpoint, refer to the corresponding documentation linked below.

## 🛣️ Endpoints

- [Get API information](docs/info/get-api-information.md)

###

- [Get All Quotes](docs/quotes/get-quotes.md)
- [Get Random Quote](docs/quotes/get-random-quote.md)
- [Get Quote By Id](docs/quotes/get-quote-by-id.md)
- [Get all the quotes by an author](docs/quotes/get-quotes-by-author.md)
- [Get all the quotes in a category](docs/quotes/get-quotes-in-category.md)
- [Create a quote](docs/quotes/create-quote.md)

## Quote Structure

| Field      | Type              | Description                         |
| ---------- | ----------------- | ----------------------------------- |
| id         | integer           | The id of the quote                 |
| created_at | ISO8601 timestamp | The date the quote was submitted    |
| updated_at | ISO8601 timestamp | The date the quote was last updated |
| author     | string            | The author of the quote             |
| categories | array of string   | The categories the quote belongs in |
| submitter  | string            | The submitter of the quote          |
| text       | string            | The text content of the quote       |
| verified\* | boolean           | Whether the quote is verified       |

\* To make sure the quotes don't contain any offensive content, all quotes are verified manually, and only verified quotes are returned by the API.

## 🤝 Contributing

Pull requests are welcome, and very much appreciated. But before you start working on a pull request, please make sure to open an issue first, so that we can discuss the changes you want to make.

## ⚖️ License

This project is licensed under the [MIT License](LICENSE).
