<script>
    import Project from "./Project.svelte";
    import Section from "./Section.svelte";

</script>

<Section title="projects" id="project">
    <ul class="project-list">
        <Project id={1}/>
        <Project id={2}/>
        <Project id={3}/>
    </ul>
</Section>

<style>
    .project-list { 
        list-style: none;
    }
</style>