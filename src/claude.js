import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const SYSTEM_PROMPT = `You are a helpful booking assistant for Sydney Elite Transfers, a premium
chauffeur and transfer service operating across Sydney, Australia. You help customers
with enquiries about:
- Airport transfers (Sydney Airport, domestic and international terminals)
- Corporate car hire and executive transport
- Special event transfers (weddings, formals, concerts)
- Hourly hire and long-distance transfers

Always be polite, professional, and concise. When a customer is ready to book, ask
for: pickup location, destination, date and time, number of passengers, and preferred
vehicle type (sedan, SUV, or people-mover). Do not invent prices; direct pricing
enquiries to the contact form on the website or call +61 2 9000 0000.`;

/**
 * Send a conversation to Claude and return the assistant reply text.
 *
 * @param {Array<{role: "user"|"assistant", content: string}>} messages
 * @returns {Promise<string>}
 */
export async function chat(messages) {
  const response = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages,
  });

  return response.content[0].text;
}
