import "dotenv/config";

export const PORT = 5555;

// Access MONGODB_URI from the .env file
export const mongoDBURL = process.env.MONGODB_URI;
