import Database from 'better-sqlite3';

const dbPath = 'picpark.db';
export const db = new Database(dbPath);

db.exec(`
	CREATE TABLE IF NOT EXISTS parking_requests (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		timestamp TEXT NOT NULL,
		location TEXT,
		status TEXT NOT NULL DEFAULT 'pending',
		created_at DATETIME DEFAULT CURRENT_TIMESTAMP
	);
	
	CREATE INDEX IF NOT EXISTS idx_parking_requests_timestamp 
	ON parking_requests(timestamp);
`);

// Graceful shutdown
process.on('exit', () => db.close());
process.on('SIGHUP', () => process.exit(128 + 1));
process.on('SIGINT', () => process.exit(128 + 2));
process.on('SIGTERM', () => process.exit(128 + 15));
