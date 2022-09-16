<section class="about" id="about">
    <div class="section-header">
        <h3 class="intro">My name is</h3>
        <h1 class="name">Robert Sheffield</h1>
        <h1 class="sub-header">I build web applications</h1>
    </div>
    <div class="section-content">
        <h1>about me</h1>
        <p>
            My name is Robert, and I am full-stack software engineer who       
        </p>
        <p>
            works primarily with Node.js, React, and Python.         
        </p>
        <div class="skills">
            <p>Here are some of the technologies I've been working with:</p>
        </div>
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
        margin: 0;
        margin-top: 30px;
        color: var(--slate);
        font-size: 23px;
        display: flex;
        justify-content: center;
        margin: 0 auto !important;
        max-width: 55ch;
    }
    

    .section-content {
        margin-top: 34em !important;
        color: var(--lightest-slate);
        max-width: 900px;
    }

    .section-content h1 {
        margin-bottom: 35px !important;
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
        font-size: 50px !important;
        font-weight: normal !important;
    }

    .about h1 {
        font-weight: 400;
        
    }

    .about p {
        max-width: 55ch;
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
        font-size: 40px !important;
    }
</style>