<script>
  import { onMount } from 'svelte';
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import ScrollTop from "../components/ScrollTop.svelte";
  import "../app.css";

  let y = 0;
  let innerWidth = 0;
  let innerHeight = 0;
  // Document height below the fold, for the scroll-progress ring on ScrollTop
  let docHeight = 0;

  function updateDocHeight() {
    docHeight = document.documentElement.scrollHeight - window.innerHeight;
  }

  onMount(() => {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.href = '/assets/favicon.png';
    link.type = 'image/png';
    document.head.appendChild(link);

    updateDocHeight();
    window.addEventListener('resize', updateDocHeight);
    return () => window.removeEventListener('resize', updateDocHeight);
  });
</script>

<div
  class="container relative flex flex-col max-w-[1400px] mx-auto w-full text-sm sm:text-base min-h-screen"
>
  <Header {y} {innerHeight}/>
  <slot />
  <Footer />
  <ScrollTop {y} {docHeight} />
</div>
<svelte:window bind:scrollY={y} bind:innerHeight bind:innerWidth />