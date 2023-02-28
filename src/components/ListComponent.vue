<script>
import GeneratedComponent from "./GeneratedComponent.vue";

export default {
    name: "ListComponent",
    data() {
        return {
            componentKey: Math.random()
        }
    },
    components: {
        GeneratedComponent
    },
    props: ["itemsProp"],
    methods: {
        toggleListSize() {
            this.$emit("toggleListSize")
        }
    }
}
</script>

<style scoped lang="scss">
    .list-wrapper {
        width: 100vw;
        margin: 2rem 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-top: 2px solid black;

        button {
            left: 1.2rem;
            bottom: 1rem;
            position: absolute;
            background: none;
            border: none;

            font-size: 2rem;
        }
    }
</style>

<template>
    <div class="list-wrapper">
        <button @click="toggleListSize">
            <i class="fa-solid fa-arrow-up-from-bracket"></i>
        </button>
        <GeneratedComponent v-for="(item, index) in itemsProp" :itemProp="item" :itemIndex="index" :key="item.id" />
    </div>
</template>