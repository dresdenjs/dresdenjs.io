import { fetchMarkdownMeetups } from '$lib/utils';
import { json } from '@sveltejs/kit';

export const GET = async () => {
	const allMeetups = await fetchMarkdownMeetups();

	const sortedMeetups = allMeetups.sort((a, b) => {
		return ((new Date(b.meta.date) as any) - new Date(a.meta.date)) as any;
	});

	return json(sortedMeetups);
};
