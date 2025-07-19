# SGPromo

This project uses a small Node.js server to supply the Airtable API token at runtime. The token is never hard-coded in the HTML files.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```
2. Create an environment variable named `API_TOKEN` with your Airtable token. You can export it in the shell or create a `.env` file and use a tool like `dotenv` if desired.

3. Start the server:
   ```sh
   API_TOKEN=your_token node server.js
   ```

The server serves the static HTML files and exposes `/config` which returns a JSON payload containing the API token. The JavaScript in the HTML pages fetches this endpoint before sending requests to Airtable.

## Deployment

Configure your hosting environment to run `node server.js` with the `API_TOKEN` environment variable set. This keeps the token out of the page source while still allowing the front-end code to access it at runtime.
