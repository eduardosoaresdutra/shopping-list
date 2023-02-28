<script>
export default {
    name: "GenerateListButton",
    methods: {
        generateList() {
            this.$emit("generateList")
        }
    }
}
</script>

<style scoped lang="scss">
.generate-list-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
}
</style>

<template>
    <div class="generate-list-wrapper">
        <button @click="generateList" type="button" class="btn btn-info">
            Gerar lista
        </button>
    </div>
</template>