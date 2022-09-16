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

	header {
		position: sticky;
		top: 0;
	}

	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		min-height: 100vh;
		position: relative;
		top: 200px;
	}

</style>