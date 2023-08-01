<script lang="ts">
    export let data;

    let total_cals = 0;

    data.entries.forEach(entry => {
        total_cals += entry.calories
    });
</script>

<main>
    <header>
        <h1>Calorie Tracker</h1>
    </header>

    <form action="?/add_entry" method="POST">
        <input type="text" placeholder="Food" name="title-entry">
        <input type="text" placeholder="Calories" name="calories-entry">
        <button type="submit">+</button>
    </form>

    <h1>Total Calories: {total_cals}</h1>

    <div class="entries">
        {#each [...data.entries].reverse() as entry}
            <div class="entry">
                <form action="?/delete_entry" method="POST">
                    <p>{entry.title}: </p>
                    <p>{entry.calories} calories</p>
                    <input type="hidden" name="id" value={entry.ID}>
                    <button type="submit">x</button>
                </form>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        text-align: center;
        padding: 3rem;
    }
    .entry > form {
        background-color: var(--background-primary);
        display: flex;
        gap: 1rem;
        align-items: center;
        margin-inline: auto;
        margin-bottom: 1rem;
        padding-inline: 0.5rem;
        width: fit-content;
        border: 1px dashed var(--text-primary);
    }
    .entry button {
        margin-left: 2rem;
    }
    .entries {
        padding-inline: 3rem;
        padding-block: 1rem;
        background-color: var(--text-secondary);
        width: fit-content;
        margin-top: 2rem;
        margin-inline: auto;
    }
</style>