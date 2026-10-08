import "server-only";
import dns from "node:dns";
import { MongoClient } from "mongodb";

if (process.env.USE_CUSTOM_DNS === "true") {
  dns.setServers(["1.1.1.1", "8.8.8.8"]);
}

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error("MONGODB_URI is not configured");
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client =
  globalForMongo.mongoClient ??
  new MongoClient(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 10000,
  });

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const db = client.db(process.env.MONGODB_DB || "bazar-dor");
