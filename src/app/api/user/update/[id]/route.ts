import prisma from '@/lib/prisma';

interface Body {
  name: string;
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  // request always have to come first even if we are not using it

  const body: Body = await request.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: +params.id, // + sign to convert it to a number
    },
    data: {
      name: body.name,
    },
  });
  return new Response(JSON.stringify(updatedUser));
}
