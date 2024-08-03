import { MongoClient, Db, Collection } from 'mongodb';

let db: Db | null = null;
let client: MongoClient | null = null;

export async function mongoInit() {
    const dbUrl = process.env.MONGO_URI;
    const database = process.env.MONGO_DATABAE; // Corregido el nombre de la variable de entorno

    if (!dbUrl || !database) {
        throw new Error('No database URL or Database provided');
    }

    try {
        client = new MongoClient(dbUrl);
        await client.connect();
        db = client.db(database);

        if (db) {
            console.log("    ✅ MongoDB");
            return db;
        } else {
            console.log("    ❌ MongoDB");
        }
    } catch (err) {
        console.log(err);
        console.log("    ❌ MongoDB error");
    }
}

export type MongoCollections = 'links' | 'links_access';

export async function getCollection(collection: MongoCollections): Promise<Collection> {
    if (!db) await mongoInit();
    if (db) return db.collection(collection);
    throw new Error('No database connection');
}

async function closeMongoConnection() {
    if (client) {
        try {
            await client.close();
            console.log("    ✅ MongoDB connection closed");
        } catch (err) {
            console.log("    ❌ Error closing MongoDB connection:", err);
        }
    }
}

process.on('SIGINT', async () => {
    await closeMongoConnection();
    process.exit(0);
});

process.on('SIGTERM', async () => {
    await closeMongoConnection();
    process.exit(0);
});

process.on('beforeExit', async () => {
    await closeMongoConnection();
});
