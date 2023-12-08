<script>
	import MobileNav from "./components/landingpage/MobileNav.svelte";
	import HomeHero from "./components/landingpage/Hero.svelte";
	import FAQmodal from "./components/landingpage/FAQmodal.svelte";
	import Introduction from "./components/landingpage/Introduction.svelte";
	import Guarantees from "./components/landingpage/Guarantees.svelte";
	import Services from "./components/landingpage/Services.svelte";
	import Portfolio from "./components/landingpage/Portfolio.svelte";
	import DesignCarousel from "./components/landingpage/DesignCarousel.svelte";
	import About from "./components/landingpage/About.svelte";
	import Contact from "./components/landingpage/Contact.svelte";
	import HomeFooter from "./components/landingpage/Footer.svelte";
</script>

<main>
	<!-- Page Nav -->
	<MobileNav />

	<!-- FAQ modal -->
	<FAQmodal />

	<!-- Hero section -->
	<HomeHero />

	<!-- Introduction -->
	<Introduction />

	<!-- Guarantees -->
	<Guarantees />
	
	<!-- About section -->
	<About />

	<!-- Services section -->
	<Services />

	<!-- Design Process -->
	<DesignCarousel />

	<!-- Portfolio section -->
	<Portfolio />

	<!-- Contact information -->
	<Contact />

	<!-- Footer section -->
	<HomeFooter />
</main>

<style></style>