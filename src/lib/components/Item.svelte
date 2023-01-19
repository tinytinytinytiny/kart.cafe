<script>
    import Picture from "$lib/components/Picture.svelte";
    export let imgSrc, name, href;
</script>

<li class="box surface">
    <Picture image={imgSrc} alt="" width="408" height="380" loading="lazy" />
    <a {href}>
        <span>{name}</span>
    </a>
</li>

<style lang="scss">
    li {
        position: relative;
        text-align: center;
        transition: 0.1s transform linear;
        width: 100%;

        &:hover {
            background: var(--surface2);
            border-color: var(--surface3);
            transform: translateY(-4px);
        }

        & :global(img) {
            width: 100%;
            height: auto;
        }
    }

    a {
        color: inherit;
        border: none;

        // Clickable everywhere
        &::before {
            content: "";
            inset: 0;
            position: absolute;
        }
    }

    a {
        border: none;
        color: inherit;
        display: inline-block;
        margin-block-start: 0.5rem;

        &::before {
            content: "";
            inset: 0;
            position: absolute;
        }
    }
</style>
