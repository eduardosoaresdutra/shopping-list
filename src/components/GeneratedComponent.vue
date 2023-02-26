<script>
import { getObject } from "@/utils/handleLocalStorage"

export default {
    name: "GeneratedComponent",
    data() {
        return {
            item: []
        }
    },
    computed: {
        getGeneratedList() {
            return getObject("itemStorage")
        }
    },
    props: ["itemProp", "itemIndex"],
    mounted() {
        this.item = this.getGeneratedList[this.itemIndex]
    },
    updated() {
        this.item = this.getGeneratedList[this.itemIndex]
    }
}
</script>

<template>
    <div class="generated-component-wrapper">
        {{ itemProp.name }} | {{ itemProp.quantity }} unidades
    </div>
</template>