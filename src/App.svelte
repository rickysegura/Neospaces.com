<script>
	import MobileNav from "./components/landingpage/MobileNav.svelte";
	import HomeHero from "./components/landingpage/Hero.svelte";
	import HomepageSection from "./components/landingpage/HomepageSection.svelte";
	import Portfolio from "./components/landingpage/Portfolio.svelte";
	import About from "./components/landingpage/About.svelte";
	import Contact from "./components/landingpage/Contact.svelte";
	import HomeFooter from "./components/landingpage/Footer.svelte";
</script>

<main>
	<!-- Page heading -->
	<MobileNav />
	<HomeHero />

	<!-- Services -->
	<div id="Services">
		<h1 class="container">Our Services</h1>
		<HomepageSection imgSource="https://img.freepik.com/free-vector/website-designer-concept-illustration_114360-4449.jpg?w=740&t=st=1694984115~exp=1694984715~hmac=e55f9d69a5f62d774e121cc51defd5e5fe9c972e65033b4fba2bb375a680829f" sectionTitle="Tailored Web Design and Development" sectionDescription="We understand that a unique online presence is essential for your business to stand out in today's digital landscape. Our Tailored Web Design and Development service is crafted for those who..." sectionBody="We understand that a unique online presence is essential for your business to stand out in today's digital landscape. Our Tailored Web Design and Development service is crafted for those who seek more than a cookie-cutter solution. We specialize in creating fully custom websites with robust e-commerce capabilities, tailored to your specific needs and brand identity." sectionCTA="Learn more" ModalName="tailoredWebDev" />
		<HomepageSection imgSource="about.png" sectionTitle="Website Management and Maintenance" sectionDescription="At Neospaces, we understand that a dynamic and up-to-date website is crucial for the success of your business. Our Website Management and Maintenance service is designed to..." sectionBody="At Neospaces, we understand that a dynamic and up-to-date website is crucial for the success of your business. Our Website Management and Maintenance service is designed to take the hassle out of maintaining your online presence. We handle everything from hosting management to content updates, ensuring your website remains a powerful asset that continuously engages your audience." sectionCTA="Learn more" ModalName="webMaint" />
		<HomepageSection imgSource="https://static.wixstatic.com/media/121f6e_aa4047f9622841b9ac987749ed564f15~mv2.png" sectionTitle="Custom Web Design with Wix" sectionDescription="We're proud to offer tailored web design solutions using the versatile and user-friendly Wix platform. Whether you're a startup, small business, or..." sectionBody="We're proud to offer tailored web design solutions using the versatile and user-friendly Wix platform. Whether you're a startup, small business, or creative entrepreneur, our Wix Web Design service is designed to bring your vision to life with precision and flair." sectionCTA="Learn more" ModalName="wixDev" />
		<HomepageSection imgSource="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/800px-WordPress_blue_logo.svg.png" sectionTitle="Custom Web Design with WordPress" sectionDescription="We specialize in creating stunning, functional websites using the versatile and widely acclaimed WordPress platform..." sectionBody="We specialize in creating stunning, functional websites using the versatile and widely acclaimed WordPress platform. Whether you're a business, blogger, or creative professional, our WordPress Web Design service is tailored to deliver a seamless online experience that captivates your audience." sectionCTA="Learn more" ModalName="wordPressDev" />
	</div>

	<!-- Portfolio -->
	<Portfolio />

	<!-- About -->
	<About />

	<!-- Contact -->
	<Contact />

	<!-- Footer -->
	<HomeFooter />
</main>

<style>
</style>