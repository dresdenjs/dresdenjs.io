<script>
  import InfoIcon from '$lib/icons/InfoIcon.svelte'
  import SlackIcon from '$lib/icons/SlackIcon.svelte'
</script>

<header>
  <button>
    <SlackIcon />
  </button>
  <img src="./ddjs_logo.svg" alt="Logo" />
  <button>
    <InfoIcon />
  </button>
</header>

<style>
  header {
    background: #ffffff;
    height: 4rem;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  button {
    border: none;
    background: transparent;
  }
</style>