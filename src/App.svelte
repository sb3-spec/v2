<script>
	import Navbar from './components/Navbar.svelte';
	import About from './components/About.svelte';
	import Projects from './components/Projects.svelte'; 
	import Tech from './components/Tech.svelte';
	import Contact from './components/Contact.svelte'

	
	

	
</script>

<svelte:head  >
	<title>Robert Sheffield</title>
</svelte:head>

<main>
	<header>
		<Navbar />
	</header>
	<div class="intro">
		<h3>My name is</h3>
        <h1 class="name">Robert Sheffield</h1>
        <h1 class="sub-header">I build web applications</h1>
	</div>
	<div class="content">
		<About />
		<Projects />
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
		z-index: -1;
	}


	.intro {
		display: flex;
        flex-direction: column;
        text-align: center;
		position: relative;
		top: 100px;
		z-index: -1;
	}

	.intro h1 {
		font-size: 80px;
		font-weight: 400;
        margin: 0;
	}

	.sub-header {
		color: var(--slate)
	}

	.intro h3 {
		font-size: 30px;
		color: var(--green);
		font-weight: 400;
	}

</style>