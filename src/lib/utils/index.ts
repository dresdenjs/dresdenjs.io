import type { MeetupMetadata } from '$lib/types/MeetupMetadata';

export const fetchMarkdownMeetups = async () => {
	const allMeetupFiles = import.meta.glob('/src/routes/meetups/*.md');
	const iterablePostFiles = Object.entries(allMeetupFiles);

	const allMeetups = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = (await resolver()) as MeetupMetadata;
			const postPath = path.slice(11, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allMeetups;
};
