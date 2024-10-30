<script lang="ts">
    interface Props {
        label?: string;
        disabled?: boolean;
        children?: import('svelte').Snippet;
    }

    let { label = "Anzeigen", disabled = false, children }: Props = $props();
    let show = $state(false)
</script>

<style>
</style>

<div class="spoiler">
    {#if (!show)}
        <button onclick={()=>show=true} class="italic hover:underline" type="button" disabled={disabled}>{label}</button>
    {:else}
        {@render children?.()}
    {/if}
</div>
