<script>
  import MeetupCard from '$lib/components/MeetupCard.svelte'
	export let data;
</script>

<div class="meetups-list">
  <MeetupCard />
  <ul>
    {#each data.meetups as meetup}
      <li>
        <h2>
          <a href={meetup.path}>
            {meetup.meta.title}
          </a>
        </h2>
        <p>{meetup.meta.description}</p>
        Published {meetup.meta.date}
      </li>
    {/each}
  </ul>
</div>

<style>
  .meetups-list {
    
  }
</style>