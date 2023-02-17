<script>
export default {
    name: "GenerateListButton",
    props: ["itemsArray"],
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