<script>
    import { findImage } from "$lib/utils/";
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    const images = import.meta.glob(
        "$lib/assets/images/ItemIcon/character/*.png"
    );

    export let data;
    const characters = data.items;
</script>

<div class="full-bleed grid">
    <h1>Characters</h1>
    <ItemMenu itemWidth="140">
        {#each characters as character}
            <Item
                imgSrc={findImage(images, character.imgSrc)}
                name="Bazzi"
                href={`/characters/${character.id}`}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
