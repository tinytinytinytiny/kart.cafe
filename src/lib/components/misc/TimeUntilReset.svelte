<svelte:options immutable={true} />

<script>
    import { onDestroy, onMount } from "svelte";
    import { fade } from "svelte/transition";
    const pad = (x) => x.toString().padStart(2, "0");

    let timer;
    let timeUntilReset = {
        hours: 0,
        minutes: 0,
        seconds: 0,
    };

    $: ({ hours, minutes, seconds } = timeUntilReset);

    onMount(async () => {
        const Timer = await import("$lib/workers/timeUntilReset.js?worker");
        timer = new Timer.default();
        timer.postMessage({ msg: "start" });
        timer.onmessage = ({ data: { duration } }) =>
            (timeUntilReset = duration);
    });

    onDestroy(() => timer?.postMessage({ msg: "stop" }));
</script>

<div class="timer-wrapper grid">
    {#if timer}
        <span transition:fade>Time until next reset</span>
        <time transition:fade datetime={`PT${hours}H${minutes}M${seconds}S`}>
            {`${hours}:${pad(minutes)}:${pad(seconds)}`}
        </time>
    {/if}
</div>

<style lang="scss">
    .timer-wrapper {
        text-align: right;

        span {
            font-size: 0.9rem;
            color: var(--highlight);
        }

        time {
            font-weight: bold;
        }
    }
</style>
