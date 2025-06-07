import { config } from 'dotenv';

config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});

// export const PORT = process.env.PORT || 3000;
// export const NODE_ENV = process.env.NODE_ENV || 'development';
// export const DB_URI = process.env.DB_URI;
// export const JWT_SECRET = process.env.JWT_SECRET;
// export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
// export const ARCJET_KEY = process.env.ARCJET_KEY;
// export const ARCJET_ENV = process.env.ARCJET_ENV;

export const {
	PORT,
	SERVER_URL,
	NODE_ENV,
	DB_URI,
	JWT_SECRET,
	JWT_EXPIRES_IN,
	ARCJET_KEY,
	ARCJET_ENV,
	QSTASH_TOKEN,
	QSTASH_URL,
	// QSTASH_CURRENT_SIGNING_KEY,
	// QSTASH_NEXT_SIGNING_KEY,
	EMAIL_PASSWORD,
} = process.env;
