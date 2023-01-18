<script>
    import { findImage } from "$lib/utils/";
    import Item from "$lib/components/Item.svelte";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    const images = import.meta.glob("$lib/assets/images/ItemIcon/kart/*.png");

    export let data;
    const karts = data.items;
</script>

<div class="full-bleed grid">
    <h1>Karts</h1>
    <ItemMenu itemWidth="140">
        {#each karts as kart}
            <Item
                imgSrc={findImage(images, `Kart_${kart.id}`)}
                name={kart.name}
                href={`/karts/${kart.id}`}
            />
        {/each}
    </ItemMenu>
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
