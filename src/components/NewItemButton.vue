<script>
export default {
    name: "NewItemButton"
}
</script>

<style scoped lang="scss">
    .add-item__wrapper {
        position: fixed;
        bottom: 2rem;
        right: 2rem;

        &__button {
            background-color: gray;
            color: white;
            font-size: 2rem;
            border-radius: 2rem;
            border: none;
            width: 4rem;
            height: 4rem;
        }
    }
</style>

<template>
    <div class="add-item__wrapper">
        <button class="add-item__wrapper__button" data-bs-toggle="modal" data-bs-target="#addItemModal">
            <i class="fa-solid fa-plus"></i>
        </button>
    </div>
</template>