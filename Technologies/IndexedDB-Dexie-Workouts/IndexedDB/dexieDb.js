const createDb = (dbName, table) => {
    const db = new Dexie(dbName);
    db.version(1).stores(table);
    db.open();
    return db;
}