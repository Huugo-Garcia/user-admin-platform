import pkg from 'pg';
const { Pool } = pkg;

// Create pool of connections
export const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Handle connection errors
pool.on('error', (err) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
});

// Function to close connections
export const closePool = async () => {
  await pool.end();
  console.log('Database pool closed');
};
