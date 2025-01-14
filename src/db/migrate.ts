import { db } from "./index";
import { migrate } from "drizzle-orm/neon-http/migrator";


const main = async () => {
    try {
            await migrate(db, { migrationsFolder: "src/db/migrations" });
            console.log("Migration complete");
    } catch (err) {
        console.error(err);
    }
}

main();