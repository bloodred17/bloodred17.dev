import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
	const data = await request.formData();
	const email = data.get('email');
	const content = data.get('content');

	return new Response(
		JSON.stringify({
			email,
			content,
		}),
		{ status: 200 }
	)
}