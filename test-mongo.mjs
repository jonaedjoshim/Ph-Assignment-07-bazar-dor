import dns from "node:dns";
import { MongoClient } from "mongodb";

dns.setServers(["1.1.1.1", "8.8.8.8"]);

console.log("DNS Servers:", dns.getServers());

const client = new MongoClient(process.env.MONGODB_URI, {
  serverSelectionTimeoutMS: 10000,
});

try {
  await client.connect();

  const result = await client.db("bazar-dor").command({
    ping: 1,
  });

  console.log("MongoDB connected:", result);
} catch (error) {
  console.error("MongoDB connection failed:", error.message);
} finally {
  await client.close();
}
