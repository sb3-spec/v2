<script>
    import { get } from "svelte/store";

    export let project;
</script>

<div class="project">
    <div class="project-overview">
        <div class="project-header">
            <h2>{project.title}</h2>
            <div class="links">
                {#if project.githubLinks.default}
                    <a href={project.githubLinks.default} title="Github" target="_blank"><img src="./images/github.png" alt="" /></a>
                {/if}
                {#if project.githubLinks.client}
                    <a href={project.githubLinks.client} title="Frontend" target="_blank"><img src="./images/github.png" alt="" /></a>
                {/if}
                {#if project.githubLinks.client}
                    <a href={project.githubLinks.server} title="Backend" target="_blank"><img src="./images/github.png" alt="" /></a>
                {/if}
                {#if project.liveLink}
                    <a href={project.link} title="To Site" target="_blank"><img src="./images/link.png" alt="" /></a>
                {/if}
            </div>
        </div>
        <p class="description">{project.description}</p>
        <div class="key-info">
            {#each Object.keys(project.keyInfo) as infoKey}
                <div class="list-container">
                    <h3>{infoKey}</h3>
                    <p>{project.keyInfo[infoKey]}</p>
                </div>
            {/each}
            <div class="features list-container">
                <h3>Features</h3>
                <ul>
                    {#each project.features as feature}
                        <li><p>{feature}</p></li>
                    {/each}
                </ul>
            </div>
            <div class="tech list-container">
                <h3>Tech:</h3>
                <ul>
                    {#each project.tech as tech}
                        <li>
                            <p>
                                {tech}
                            </p>
                        </li>
                    {/each}
                </ul>
            </div>
        </div>
    </div>

    <div class="project-image">
        <a href={`/#/image/${project.img[0]}`}><img src={project.img[0]} alt="placeholder" /></a>
    </div>    
</div>

<style>
    .project {
        width: auto;
        max-width: 1600px;
        min-height: 50vh;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        margin-bottom: 10%;
    }

    .project-header {
        position: relative;
        display: flex;
        max-height: 75px;
    }

    .links {
        margin: 1% 0 0 5%;
    }



    .links img:hover {
        transform: translateY(-10%);
        transition: all 0.1s ease-in-out;
    }

    .links img {
        width: 30px;
        height: 30px;
        margin-right: 20px;
    }

    .project a {
        position: relative;

    }





    .project-overview {
        width: 80%;
        height: auto;
        position: relative;
        top: 20px;
        background-color: var(--light-navy);
        border-radius: 5px;
        margin: 0 auto;
        box-shadow: 3px 10px 30px -15px var(--navy-shadow);
        /* z-index: 1; */
        text-align: center;
        padding-top: 30px;
        padding-bottom: 3em;
    }
    
    .project-image {
        height: auto;
        margin: 0 auto;
        width: 100%;
    }

    .project h2 {
        top: 0;
        position: relative;
        text-align: left;
        margin: 0;
        color: var(--light-slate);
        font-weight: 100;
        font-size: 2em;
        max-width: 20ch;
        padding-left: 10%;
    }

    .project h2::after {
        content: '';
        display: inline-block;
        position: relative;
        top: -30%;
        width: 110%;
        height: 2px;
        background-color: var(--green);
    }


    .project-image img {
        width: 100%;
        object-fit: scale-down;
        height: 775px;
        border-radius: 15px;
    }

       

    .project-image img:hover {
        transition: z-index 300ms ease-in-out;
        z-index: 10;
        cursor: pointer;
        position: relative;
        margin: 0 auto;
    }

    .project ul {
        text-align: left;
    }

    /* .project-image::before {
        content: '';
        width: 100%;
        height: 100%;
        background-color: yellow;
        display: inline-block;
    } */

    .project p {
        color: var(--slate);
        font-size: 1.25em;
        display: flex;
        justify-content: flex-start;

        /* text-align: left; */
    }

    .key-info p {
        font-size: 1em;
        width: auto;

        margin: 0;
        text-align: left;
    }

    .key-info {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        column-gap: 5ch;
        padding: 0 10%;
        margin: 0 auto;
        height: auto;
    }

    .list-container {
        display: flex;
        flex-direction: column;
        
    }

    .key-info ul {
        font-size: 1.25em;
        padding: 0;
        position: relative;
        color: var(--green);
        display: flex;
        flex-direction: column;
    }

    .key-info li {
        margin-bottom: 2%;
    }

    .key-info h3 {
        text-align: left;
        font-size: 26px;
        font-weight: 100;
        margin: 0 0 20px 0;
    }

    .tech h3, .features h3 {
        text-align: left;
    }

    .description {
        margin-bottom: 40px !important;
        font-size: 1.18em !important;
        max-width: 60ch;
        text-align: left;
        padding: 0 10%;
    }

    .tech, .features {
        text-align: left;
    }

    .tech p, .features p {
        margin: 0;
    }


    @media (max-width: 900px) {
        .key-info {
            display: block;
        }

        .project-image img {
            /* width: 130%;
            left: -20%;
            position: relative; */
        }

        .links img {
            width: 25px;
            height: 25px;
            margin-right: 10px;
        }

        .links {
            display: flex;
        }

        .list-container {
            margin: 25px 0;
        }

        .project-header h2 {
            font-size: 25px;
        }
    }
</style>



