export async function load({ params }) {
	const meetup = await import(`../${params.slug}.md`);
	const { title, date } = meetup.metadata;
	const content = meetup.default;

	return {
		content,
		title,
		date
	};
}
