import { MongoClient, Db, Collection } from 'mongodb'

let db: Db;

export async function mongoInit() {
    const dbUrl = process.env.MONGO_URI;
    const database = process.env.MONGO_DATABAE;

    if (!dbUrl || !database) {
        throw new Error('No database URL or Database provided');
    }

    try {
        const client = new MongoClient(dbUrl);
        const conexion = await client.connect();

        const mongoDB = conexion.db(database);

        if (mongoDB) {
            console.log("    ✅ MongoDB");
            db = mongoDB;
            return mongoDB;
        } else {
            console.log("    ❌ MongoDB");
        }
    } catch (err) {
        console.log(err);
        console.log("    ❌ MongoDB error");
    };
}
mongoInit();

export type MogoCollections = 'links';

export async function getCollection(collection: MogoCollections): Promise<Collection> {
    if (db === undefined) await mongoInit();

    return db.collection(collection);
};