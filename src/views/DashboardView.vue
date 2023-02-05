<script>
import AddItemModal from "@/components/AddItemModal.vue";
import NewItemButton from "../components/NewItemButton.vue";
import ShoppingItem from "../components/ShoppingItem.vue";
import { setObject, getObject } from "@/utils/handleLocalStorage"

export default { 
    components: {
        ShoppingItem,
        NewItemButton,
        AddItemModal
    },
    data() {
        return {
            items: null,
        }
    },
    methods: {
        addItem: function (itemName) {
            this.items.push({itemName: itemName, itemQuantity: 0})
        },
        removeItem: function (index) {
            this.items.splice(index, 1)
        }
    },
    beforeMount() {
        this.items = getObject("itemStorage") || []
    },
    updated() {
        setObject("itemStorage", this.items)
    }
}
</script>

<style scoped lang="scss">
    .dashboard-component__wrapper {
        width: 100vw;
    }
</style>

<template>
    <div class="dashboard-component__wrapper d-flex flex-column justify-content-center align-items-center">
        <div class="dashboard-component__wrapper__shopping-items">
            <div v-for="(item, index) in items" :key="index" class="item">
                <ShoppingItem @removeItem="removeItem" :item-name="item.itemName" :item-index="index" />
            </div>
        </div>
        <AddItemModal @getItemName="addItem" />
        <NewItemButton />
    </div>
</template>