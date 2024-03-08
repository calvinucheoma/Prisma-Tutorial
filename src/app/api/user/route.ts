import prisma from '@/lib/prisma';

// export async function GET() {
//   const users = await prisma.user.findMany({
//     where: {
//       //   name: 'John',
//       //   name: {
//       //     // startsWith: 'J',
//       //     // endsWith: 'n',
//       //     // contains: 's',
//       //   },
//       id: {
//         // in: [1, 2, 3],
//         // notIn: [1, 2, 3],
//         not: {
//           //   in: [1, 2],
//           //   gt: 3,
//           //   lt:2,
//           //   lte:4,
//           equals: 1,
//         },
//       },
//     },
//   });

// WE CAN COMBINE FILTERS USING THE OR operator which is an array containing objects where each filter is contained inside an object

export async function GET() {
  //   const users = await prisma.user.findMany({
  //     where: {
  //       OR: [
  //         {
  //           id: {
  //             // in: [1, 2, 3],
  //             // notIn: [1, 2, 3],
  //             not: {
  //               gt: 2,
  //             },
  //           },
  //         },
  //         {
  //           name: {
  //             startsWith: 's',
  //           },
  //         },
  //       ],
  //     },
  //   });

  //   USING RELATION FILTERS FOR ONE-TO-MANY AND MANY-TO-MANY RELATIONSHIPS
  const users = await prisma.user.findMany({
    where: {
      posts: {
        // every: { //fetches users that have all their posts published
        //   published: true,
        // },
        // some: {
        //   //fetches users that have at least one their posts published
        //   published: false,
        // },
        none: {
          published: false,
        },
      },
    },
  });

  return new Response(JSON.stringify(users));
}
