import prisma from '@/lib/prisma';

interface Body {
  name: string;
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  // request always have to come first even if we are not using it

  //   const body: Body = await request.json();

  const updatedUser = await prisma.user.upsert({
    // the 'upsert' function first checks if the user we want to update exists in our database.
    //  If the user exists, it updates the user with the data provided.
    // If the user does not exist, it creates a new user with the provided data.
    where: {
      id: +params.id, // + sign to convert it to a number
    },
    update: {
      name: 'Simon Parafundi',
    },
    create: {
      name: 'Newest User',
      email: 'newUser@prisma.io',
    },
  });
  return new Response(JSON.stringify(updatedUser));
}
