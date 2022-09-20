<script>
    export let project;
</script>

<div class="project">
    <div class="project-overview">
        <h2>{project.title}</h2>
        <p></p>
        <p>{project.description}</p>
        <div class="key-info">
            {#each Object.keys(project.keyInfo) as infoKey}
                <div class="list-container">
                    <h3>{infoKey}</h3>
                    <ul>
                        {#each project.keyInfo[infoKey] as infoSlice}
                            <li><p>{infoSlice}</p></li>
                        {/each}
                    </ul>
                </div>
            {/each}
            <!-- <div class="list-container">
                <h3>Solutions</h3>
                <ul> 
                    {#each project.solutions as solution}
                        <li><p>{solution}</p></li>
                    {/each}
                </ul>
            </div>
            <div class="list-container">
                <h3>Notable Features</h3>
                <ul name="features">
                    {#each project.features as feature}
                        <li><p>{feature}</p></li>
                    {/each}
                </ul>
            </div> -->
        </div>
    </div>

    <div class="project-image">
        <img src={project.img} alt="placeholder" />
    </div>    
</div>

<style>
    .project {
        width: auto;
        max-width: 1600px;
        min-height: 50vh;
        display: flex;
        position: relative;
        flex-direction: column;
        overflow: hidden;
    }

    .project-overview {
        min-height: 80px;
        width: 1200px;
        height: 500px;
        position: relative;
        top: 50px;
        background-color: var(--light-navy);
        border-radius: 5px;
        margin: 0 auto 0 auto;
        box-shadow: 3px 10px 30px -15px var(--navy-shadow);
        z-index: 1;
        text-align: center;
    }
    .project-image {
        height: auto;
        margin: 0 auto 0 auto;
        width: 100%;
    }

    .project h2 {
        top: 0;
        max-width: 250px;
        position: relative;
        border-bottom: 2px solid var(--green);
        margin: 10px auto;
        color: var(--light-slate);
    }


    .project img {
        width: 100%;
        object-fit: scale-down;
        height: 775px;
    }

    .project img:hover {
        
        cursor: pointer;
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
        margin: 0 auto !important;
        max-width: 45ch;
        text-align: left;
    }

    .key-info p {
        font-size: 1em;
        width: auto;
        max-width: 30ch;
    }

    .key-info {
        display: flex;
        width: 90%;
        justify-content: space-between;
        margin: 0 auto;
    }

    .list-container {
        width: auto;
        display: flex;
        flex-direction: column;
    }

    .key-info ul {
        font-size: 1.25em;
        padding: 0;
        position: relative;
        left: 20px;
    }

    .key-info ul li {
        color: var(--green);
    }

    .key-info h3 {
        text-align: left;
        font-size: 30px;
        font-weight: 100;
    }

</style>



