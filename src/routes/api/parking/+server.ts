import type { RequestHandler } from '@sveltejs/kit';
import { json } from '@sveltejs/kit';
import { db } from '$lib/database';

export const POST: RequestHandler = async ({ request }) => {
  try {
    const { image, location } = await request.json();

    // Log the request
    const logId = db
      .prepare(
        `
			INSERT INTO parking_requests (timestamp, location, status)
			VALUES (?, ?, ?)
		`,
      )
      .run(new Date().toISOString(), location || 'unknown', 'processed').lastInsertRowid;

    // Mock parking sign analysis
    const mockResult = {
      canPark: Math.random() > 0.5,
      confidence: 0.95,
      rules: ['2 hour limit', 'Mon-Fri 9AM-5PM', 'No parking during street cleaning'],
      explanation: 'Based on the sign, you can park here with restrictions.',
    };

    return json({
      success: true,
      requestId: logId,
      result: mockResult,
    });
  } catch (error) {
    return json(
      {
        success: false,
        error: 'Failed to process parking sign',
      },
      { status: 500 },
    );
  }
};

export const GET: RequestHandler = async () => {
  try {
    const stats = db
      .prepare(
        `SELECT 
				COUNT(*) as total_requests,
				COUNT(CASE WHEN status = 'processed' THEN 1 END) as successful_requests
			FROM parking_requests`,
      )
      .get();

    return json({
      success: true,
      stats,
    });
  } catch (error) {
    return json(
      {
        success: false,
        error: 'Failed to get stats',
      },
      { status: 500 },
    );
  }
};
