import { Client } from "pg";

// Load environment variables
const client = new Client({
  connectionString: process.env.DATABASE_URL, // Replace with your Supabase database URL
});

async function connect(): Promise<void> {
  try {
    await client.connect();
    console.log("DB connected...");
  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1); // Exit the process if connection fails
  }
}

export { client, connect };
