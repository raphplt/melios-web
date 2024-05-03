<script lang="js">
  import { page } from '$app/stores'

 // @ts-ignore
   $: {
    // @ts-ignore
    if (typeof gtag !== 'undefined') {
      // @ts-ignore
      gtag('config', 'G-98S1QD8H2L', {
        page_title: document.title,
        page_path: $page.url.pathname,
      })
    }
  }
</script>

<svelte:head>
  <script
    async
    src="https://www.googletagmanager.com/gtag/js?id=G-98S1QD8H2L">
  </script>
  <script>
    window.dataLayer = window.dataLayer || []

    function gtag() {
      dataLayer.push(arguments)
    }

    gtag('js', new Date())
    gtag('config', 'G-98S1QD8H2L')
  </script>
</svelte:head>
