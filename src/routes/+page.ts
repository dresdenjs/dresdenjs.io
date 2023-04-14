export const load = async ({ fetch }) => {
	const response = await fetch(`/api/meetups`);
	const meetups = await response.json();

	return {
		meetups
	};
};
