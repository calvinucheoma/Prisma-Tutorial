import prisma from '@/lib/prisma';

export async function PUT() {
  const updatedUsers = await prisma.user.updateMany({
    where: {
      name: {
        contains: 'J',
      },
    },
    data: {
      //   name: 'Updated Users', // this would not work since in our schema, we specified that no two users can have the same name so trying this returns an error
      role: 'ADMIN',
    },
  });
  return new Response(JSON.stringify(updatedUsers));
}
