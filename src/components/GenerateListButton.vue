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

<template>
    <button @click="generateList" type="button" class="btn btn-info">
        Gerar lista
    </button>
</template>