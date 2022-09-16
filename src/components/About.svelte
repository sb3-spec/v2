<div class="about" id="about">
    <div class="section-header">
        <h3 class="intro">My name is</h3>
        <h1 class="name">Robert Sheffield</h1>
        <h1 class="sub-header">I build web applications</h1>
    </div>
    <div class="section-content">
        <h1>about me</h1>
        <div class="about-text">
            <p>
                I am full-stack software engineer who
                works primarily with Node.js and React,
                although lately I have been getting into Svelte,
                which is what this site is build built with
            </p>
        </div>
    </div>
</div>

<style>
    .about {
        z-index: -1;
        display: flex;
        flex-direction: column;
        width: 100%;
        top: 200px;
        position: relative;   
    }

    .section-header, .section-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .section-content p {
        font-size: 19px;
        font-weight: 100;
        position: relative;
        
    }

    .section-content {
        position: relative;
        top: 34em;
        color: var(--lightest-slate);
        max-width: 80ch;
    }

    .section-content h1::before {
        content: "";
        height: 1px;
        position: relative;
        left: -10px;
        width: 10ch;
        background-color: var(--slate);
        top: 24px;
    }

    .section-content h1::after {
        content: "";
        height: 1px;
        position: relative;
        right: -10px;
        width: 10ch;
        background-color: var(--slate);
        top: 24px;
    }

    .section-header h1 {
        font-size: 50px;
    }

    .about h1 {
        font-weight: 300;
        
    }

    .about-text {
        display: flex;
        justify-content: center;
    }
    
    .about-text p {
        max-width: 50ch;
        margin: 0;
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
        font-weight: 100;
        margin: 0;
    }
</style>