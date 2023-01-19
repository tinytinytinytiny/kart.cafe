<script>
    import { findImage } from "$lib/utils/";
    import ItemMenu from "$lib/components/ItemMenu.svelte";
    import Item from "$lib/components/Item.svelte";
    import Picture from "$lib/components/Picture.svelte";
    const characterImages = import.meta.glob(
        "$lib/assets/images/ItemIcon/character/*.png"
    );
    const costumeImages = import.meta.glob(
        "$lib/assets/images/ItemIcon/costume/*.png"
    );

    export let data;
</script>

<div class="full-bleed grid">
    <h1>{data.name}</h1>
    <Picture
        image={findImage(characterImages, data.imgSrc)}
        alt=""
        width="408"
        height="380"
    />
    <!-- <img src={data.imgSrc} alt="" width="408" height="380" loading="lazy" /> -->

    {#if data.costumes.length > 0}
        <h2>Costumes</h2>
        <ItemMenu itemWidth="120">
            {#each data.costumes as costume}
                <Item
                    imgSrc={findImage(costumeImages, costume.imgSrc)}
                    name={costume.name}
                />
            {/each}
        </ItemMenu>
    {/if}
</div>

<style>
    .grid {
        gap: 1rem;
    }
</style>
