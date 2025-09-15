import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const startTime = Date.now();

  // Simulate some processing
  await new Promise((resolve) => setTimeout(resolve, Math.random() * 50));

  const ping = Date.now() - startTime;

  return new Response(
    JSON.stringify({
      message: 'PicPark API Online',
      status: 'up',
      ping: `${ping}ms`,
      timestamp: new Date().toISOString(),
      version: '1.0.0',
    }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
};
