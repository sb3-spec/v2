<script>
    import Skills from "./Skills.svelte";

</script>
<section class="about" id="about">
    <div class="section-header">
        <h3 class="intro">My name is</h3>
        <h1 class="name">Robert Sheffield</h1>
        <h1 class="sub-header">I build web applications</h1>
    </div>
    <div class="section-content">
        <h1>about me</h1>
        <p>
            My name is Robert and I am a full-stack 
            software engineer who works primarily 
            with Node.js, Express.js, React, and Python. 
            Recently, I've been using Svelte for my client apps.

            I have a solid grasp of user authentication,
            both relational and nonrelational databases, 
            as well as the HTTP life cycle. 
        </p>

        <Skills />
    </div>
</section>

<style>
    .about {
        z-index: -1;
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: 60vh;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }

    .section-header, .section-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }
    
    .section-content p {
        color: var(--slate);
        font-size: 20px;
        display: flex;
        justify-content: flex-start;
        margin: 0 auto !important;
    }
    

    .section-content {
        margin-top: 30em !important;
        color: var(--lightest-slate);
        max-width: 900px;
    }

    .section-content h1 {
        margin-bottom: 35px !important;
        font-size: 40px;
    }

    .section-content h1::before {
        content: "";
        height: 1px;
        position: relative;
        left: -10px;
        width: 30%;
        background-color: var(--slate);
        top: 30px;
    }

    .section-content h1::after {
        content: "";
        height: 1px;
        position: relative;
        right: -10px;
        width: 30%;
        background-color: var(--slate);
        top: 30px;
        
    }

    .section-header h1 {
        font-size: 80px !important;
        font-weight: normal !important;
    }


    .about p {
        max-width: 58ch;
    }

    
    .intro {
        color: var(--green);
    }

    .sub-header {
        color: var(--slate); 
        font-size: 70px !important; 
        
        display: flex; 
        justify-content: center
    }
    
    .name {
        color: var(--lightest-slate);
        font-weight: 100 !important;
        font-size: 80px !important;
    }

    .about h3 {
        font-size: 30px;
    }
    
    .about h3, .about h1 {
        display: flex;
        justify-content: center;
        font-weight: 400;
        margin: 0;
    }

    
</style>