import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

export async function getMongoClientPromise(): Promise<MongoClient> {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("Missing MONGODB_URI environment variable.");
  }

  if (!globalForMongo._mongoClientPromise) {
    const client = new MongoClient(uri);
    globalForMongo._mongoClientPromise = client.connect();
  }

  return globalForMongo._mongoClientPromise;
}

// Lazy thenable to preserve `await clientPromise` syntax without throwing at import time
const clientPromise: Promise<MongoClient> = {
  then(onfulfilled, onrejected) {
    return getMongoClientPromise().then(onfulfilled, onrejected);
  },
  catch(onrejected) {
    return getMongoClientPromise().catch(onrejected);
  },
  finally(onfinally) {
    return getMongoClientPromise().finally(onfinally);
  },
  [Symbol.toStringTag]: "Promise",
} as Promise<MongoClient>;

export default clientPromise;
