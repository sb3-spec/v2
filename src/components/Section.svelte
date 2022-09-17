<script>
    export let title;
    export let id;
</script>

<div class="section-container" id={id}>
    <h1>{title}</h1>
    <div class="section-content">
        <slot>

        </slot>
    </div>
</div>


<style>
    .section-container {
        width: 900px;
        min-height: 40vh;
        margin: 250px auto 0 auto;
        display: flex;
        flex-direction: column;
    }

    .section-container h1 {
        margin-bottom: 35px !important;
        font-size: 40px;
        font-weight: 400;
        display: flex;
        justify-content: center;
    }

    .section-container h1::before {
        content: "";
        height: 1px;
        position: relative;
        top: 30px;
        left: -10px;
        width: 30%;
        background-color: var(--slate);
    }

    .section-container h1::after {
        content: "";
        height: 1px;
        width: 30%;
        top: 30px;
        right: -10px;
        position: relative;
        background-color: var(--slate);
    }
</style>