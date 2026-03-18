# Sydney Elite Transfers

Premium chauffeur and transfer service operating across Sydney, Australia — now with an AI-powered booking assistant built on [Claude](https://claude.ai) by Anthropic.

## Features

- AI chat assistant that answers customer enquiries and guides bookings
- Simple REST API (`POST /api/chat`) powered by `@anthropic-ai/sdk`
- Configurable via environment variables

## Prerequisites

- Node.js ≥ 20
- An [Anthropic API key](https://console.anthropic.com/)

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env
# Edit .env and set ANTHROPIC_API_KEY

# 3. Start the server
npm start
```

The server starts on `http://localhost:3000` by default.

## API

### `POST /api/chat`

Send a conversation history and receive the assistant's reply.

**Request body**
```json
{
  "messages": [
    { "role": "user", "content": "I need a transfer from Sydney Airport to the CBD tonight." }
  ]
}
```

**Response**
```json
{
  "reply": "Happy to help! Could you please confirm the date and time of your arrival, number of passengers, and preferred vehicle type?"
}
```

### `GET /`

Health-check endpoint — returns `{ "status": "ok" }`.

## Environment Variables

| Variable           | Required | Default | Description                     |
|--------------------|----------|---------|---------------------------------|
| `ANTHROPIC_API_KEY`| Yes      | –       | Your Anthropic API key          |
| `PORT`             | No       | `3000`  | Port the HTTP server listens on |

## License

MIT
