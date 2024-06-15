import * as dotenv from 'dotenv';
dotenv.config();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production' ? process.env.PROD_FRONT_PORT : process.env.DEV_FRONT_PORT,
  methods: ['GET', 'POST', 'DELETE', 'PATCH', 'PUT'],
  credentials: true,
};

export default corsOptions;
