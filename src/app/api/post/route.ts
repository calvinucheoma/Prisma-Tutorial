import prisma from '@/lib/prisma';

export async function GET() {
  //   const posts = await prisma.post.findMany();
  //   const posts = await prisma.post.findFirst();
  //   const posts = await prisma.post.findFirstOrThrow();
  //   const posts = await prisma.post.findUnique();
  //   const posts = await prisma.post.findUniqueOrThrow();

  //   const posts = await prisma.post.findMany({
  //     where: {
  //       OR: [
  //         {
  //           title: {
  //             contains: 'Github',
  //             mode: 'insensitive', // makes the filters insensitive to lower-case and upper-case letters. Only works on postgres and mongoDB connectors
  //           },
  //         },
  //         {
  //           title: {
  //             contains: 'Twitter',
  //           },
  //         },
  //       ],
  //       AND: {
  //         //AND operator must be an object and not an array list
  //         published: true,
  //       },
  //     },
  //   });

  //   USING RELATION FILTERS FOR MANY-TO-ONE AND ONE-TO-ONE RELATIONSHIPS
  const posts = await prisma.post.findMany({
    where: {
      author: {
        // is: {
        //   name: 'Jack',
        // },
        isNot: {
          name: 'Jack',
        },
        is: {
          email: {
            startsWith: 's',
          },
        },
      },
    },
    // include: {
    //   author: true,
    // },
    select: {
      title: true,
      //   author: true,
      author: {
        select: {
          name: true,
        },
      },
    },
  });
  return new Response(JSON.stringify(posts));
}
