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
    props: ["itemsProp"]
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
    }
</style>

<template>
    <div class="list-wrapper">
        <GeneratedComponent v-for="(item, index) in itemsProp" :itemProp="item" :itemIndex="index" :key="item.id" />
    </div>
</template>