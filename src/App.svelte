<script>
	import Navbar from './components/Navbar.svelte';
	import About from './components/About.svelte';
	import Projects from './components/Projects.svelte'; 
	import Tech from './components/Tech.svelte';
	import Contact from './components/Contact.svelte'

	
	

	
</script>

<main>
	<header>
		<Navbar />
	</header>
	<div class="content">
		<About />
		<!-- TODO -->
		<!-- <Projects /> -->
		<!-- <Contact /> -->
	</div>
</main>

<style>
	main {
		min-height: 350vh;
	}

	header {
		position: sticky;
		top: 0;
	}

</style>