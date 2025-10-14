export async function getPrisma() {
  const prismaModule = await import('@prisma/client').catch(() => null as any)
  if (!prismaModule || !(prismaModule as any).PrismaClient) {
    throw new Error('Prisma client is not available. Ensure DATABASE_URL is set and prisma is generated.')
  }
  const { PrismaClient } = prismaModule as any
  const globalForPrisma = globalThis as any
  const prisma = globalForPrisma.prisma ?? new PrismaClient()
  if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma
  return prisma as InstanceType<typeof PrismaClient>
}
