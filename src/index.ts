import Email from 'vercel-email';

export default {
	async fetch(req: any) {
		let pathname = new URL(req.url).pathname;
		console.log('url', pathname);
		if (pathname !== `/api`) {
			return new Response(JSON.stringify({
				success: false,
				message: '404'
			}));
		}
		try {
			await Email.send((await req.json()));
			return new Response(JSON.stringify({
				success: true
			}));
		} catch (e: any) {
			return new Response(JSON.stringify({
				success: false,
				message: e?.message
			}));
		}
	}
};
