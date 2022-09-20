<script>
    $: scrollDir = 'none';

    let oldVal = 0;
	let newVal = 0;

    window.addEventListener('scroll', (e) => {
		newVal = -window.pageYOffset;
        
        if (newVal === 0) {

            scrollDir = 'none'
        } else if (oldVal < newVal) {
			scrollDir = 'up'

		} else if (oldVal > newVal) {
			scrollDir = 'down'
		}

		oldVal = newVal;
	});
</script>


<nav class={`navbar ${scrollDir}`}>
    <div class="logo-container">
        <a href="#about"><img src="./images/letter-r.png" alt="logo for my portfolio" /></a>
    </div>
    <ul>
        <li><h1>about</h1></li>
        <li><h1>projects</h1></li>
        <li><h1>tech</h1></li>
        <li><h1>contact</h1></li>
        <li><button type="button"><h1 class='resume'>Resume</h1></button></li>
    </ul>
</nav>


<style>
    :root {
        --navbar-content-offset: 22px;
    }
    


    .navbar {
        width: 100%;
        display: flex;
        top: 0;
        justify-content: space-between;
        position: sticky;
        transition: all 300ms ease-in;
        height: 85px;
        background-color: var(--navy);
        z-index: 10;
    }


    .up {
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
        transform: translateY(0);
    }

    .down { 
        transform: translateY(-100px);
    }

    .logo-container {
        position: relative;
        left: 40px;
        top: var(--navbar-content-offset)
    }
    
    .logo-container img {
        background-color: var(--green);
        border-radius: 70%;
        width: 35px;
        height: 35px;
        border: 2px solid var(--green);
    }

    .navbar ul {
        margin: 0;
        height: 100%;
        position: relative;
        right: 40px;
        padding: 0;
        display: flex;
        justify-content: space-between;
        list-style: none;
        min-width: 450px;
        top: var(--navbar-content-offset)
    }

    .resume {
        top: 0 !important;
    }


    .navbar h1 {
        position: relative;
        top: .5em;
        color: var(--light-slate);
        cursor: pointer;
        margin: 0;
        font-size: 19px;
        font-weight: 100;
    }

    .navbar h1:hover {
        color: var(--green);
        transition: color 200ms linear;
        
    }


    .navbar button {
        background: none;
        border-radius: 5px;
        border: 1px solid var(--green);
        color: var(--green);
        padding: .5em .8em;
        margin: 0;
    }

    .navbar button:hover {
        color: var(--green);
        background-color: rgba(100 255 218 / .1);
        transition: all 200ms linear;
        cursor: pointer;
    }
</style>