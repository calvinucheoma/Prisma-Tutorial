import prisma from '@/lib/prisma';

interface Body {
  name: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  // request always have to come first even if we are not using it

  const user = await prisma.user.delete({
    where: {
      id: +params.id, // + sign to convert it to a number
    },
  });
  return new Response(JSON.stringify(user));
}
