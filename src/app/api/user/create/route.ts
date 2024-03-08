import prisma from '@/lib/prisma';

interface Body {
  name: string;
  email: string;
}

export async function POST(request: Request) {
  const body: Body = await request.json();

  const user = await prisma.user.create({
    data: body,
  });

  //   const user = await prisma.user.create({
  //     data: {
  //       email: 'chuks@prisma.io',
  //       name: 'Chukwuma Calvin',
  //       role: 'USER',
  //       posts: {
  //         create: [
  //           //to create a new post from scratch. If we already had posts in our database and we wanted to connect them to the user, we would've used the 'connect' api
  //           {
  //             title: 'Crash Course of Prisma',
  //             published: true,
  //             categories: {
  //               //   connect: [{ id: 1 }, { id: 2 }],
  //               connectOrCreate: {
  //                 // if the category with id of 3 as specified below is not existing, we should create a new category
  //                 where: {
  //                   id: 3,
  //                 },
  //                 create: {
  //                   name: 'Biggest Data',
  //                 },
  //               },
  //             },
  //           },
  //         ],
  //       },
  //     },
  //   });

  //   const users = await prisma.user.createMany({
  //     data: [
  //       {
  //         name: 'Jeff',
  //         email: 'Jeffbrown@prisma.io',
  //       },
  //       {
  //         name: 'Barney',
  //         email: 'barneydoodles@prisma.io',
  //       },
  //       {
  //         name: 'Barney',
  //         email: 'barneydoodles@prisma.io',
  //       },
  //     ],
  //     skipDuplicates: true,
  //   });
  return new Response(JSON.stringify(user));
}
