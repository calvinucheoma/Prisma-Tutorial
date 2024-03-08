import prisma from '@/lib/prisma';

export async function GET() {
  const aggregations = await prisma.post.aggregate({
    _sum: {
      likeNum: true, // we specify the field we want to run our sum aggregation
    },
    _avg: {
      likeNum: true,
    },
    _count: {
      id: true, // count all the post objects where their ID has a value
    },
    _max: {
      likeNum: true,
    },
    _min: {
      likeNum: true,
    },
  });

  return new Response(JSON.stringify(aggregations));
}
