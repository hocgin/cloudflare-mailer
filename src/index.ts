export default {
	async fetch(request: any) {
		console.log('请求');
		let sendReq = new Request('https://api.mailchannels.net/tx/v1/send', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				personalizations: [
					{
						to: [{ email: 'hocgin@gmail.com', name: 'Test Recipient' }]
					}
				],
				from: {
					email: 'sender@hocgin.com',
					name: 'Workers - MailChannels integration'
				},
				subject: 'Look! No servers',
				content: [
					{
						type: 'text/plain',
						value: 'And no email service accounts and all for free too!'
					}
				]
			})
		});

		let res = await fetch(sendReq);
		return res;
	}
};
