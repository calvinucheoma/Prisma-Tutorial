import prisma from '@/lib/prisma';

// OFFSET BASED PAGINATION
// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);

//   const pgNum = +(searchParams.get('pgNum') ?? 0); //if no pgNum, return 0. We put a + before the whole expression to convert it to a number
//   const pgSize = +(searchParams.get('pgSize') ?? 2);
//   // client must provide these two values as search params inside its request

//   const posts = await prisma.post.findMany({
//     // For first page
//     // skip: 0,
//     // take: 2,

//     // For second page
//     // skip: 2,
//     // take: 2,

//     skip: pgNum * pgSize,
//     take: pgSize,
//   });

//   return new Response(JSON.stringify(posts));
// }

// CURSOR BASED PAGINATION
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const cursor = +(searchParams.get('cursor') ?? 0); //if no pgNum, return 0. We put a + before the whole expression to convert it to a number
  const pgSize = +(searchParams.get('pgSize') ?? 2);
  // client must provide these two values as search params inside its request

  const posts = await prisma.post.findMany({
    cursor: {
      id: cursor,
    },
    take: pgSize,
  });

  return new Response(JSON.stringify(posts));
}
