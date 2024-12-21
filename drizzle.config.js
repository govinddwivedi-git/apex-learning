import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  dbCredentials: {
    url: "postgresql://neondb_owner:qZVSBsx0ThQ1@ep-flat-meadow-a5lx8qf9.us-east-2.aws.neon.tech/Apex-Learning?sslmode=require",
  }
});
