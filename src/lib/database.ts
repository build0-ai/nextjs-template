import { PrismaClient } from "@prisma/client";

export interface DatabaseConfig {
  url: string;
}

export const createPrismaClient = (config: DatabaseConfig): PrismaClient => {
  return new PrismaClient({ datasources: { db: { url: config.url } } });
};
