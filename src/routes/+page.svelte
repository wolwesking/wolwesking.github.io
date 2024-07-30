<script>
    import Stars from "./../components/Home/Stars.svelte";
    import HeaderSection from "../components/Home/HeaderSection.svelte";
    import Services from "../components/Home/Services.svelte";
    import Testemonials from "../components/Home/Testemonials.svelte";
    import Community from "../components/Home/Community.svelte";
</script>

<svelte:head>
    <title>Portfolio</title>
    <meta name="description" content="Portfolio of Patrik Takacs" />
</svelte:head>

<HeaderSection />
<Stars />
<Services />
<Community />
<Testemonials />
