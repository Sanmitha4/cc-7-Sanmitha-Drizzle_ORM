import "dotenv/config" 
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';


const queryClient = postgres(process.env.DATABASE_URL as string);
const db = drizzle({ client: queryClient });
const result = await db.execute('select 1');