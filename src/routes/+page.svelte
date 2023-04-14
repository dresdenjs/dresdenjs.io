<script>
export let data
</script>

<h1>Meetups</h1>
  
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