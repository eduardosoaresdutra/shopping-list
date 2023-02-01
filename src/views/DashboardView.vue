<script>
import AddItemModal from "@/components/AddItemModal.vue";
import NewItemButton from "../components/NewItemButton.vue";
import ShoppingItem from "../components/ShoppingItem.vue";

export default { 
    components: {
        ShoppingItem,
        NewItemButton,
        AddItemModal
    },
    data() {
        return {
            items: [
                {
                    itemName: "Leite",
                    itemQuantity: 2
                },
            ],
        }
    }
}
</script>

<style lang="scss">
    .dashboard-component__wrapper {
        width: 100vw;

        &__add-item__wrapper {
            position: absolute;
            margin: 35vh 0;
        }
    }
</style>

<template>
    <div class="dashboard-component__wrapper d-flex flex-column justify-content-center align-items-center">
        <div class="dashboard-component__wrapper__shopping-items">
            <div v-for="(item, index) in items" :key="index" class="item">
                <ShoppingItem :item-name="item.itemName" :item-quantity="item.itemQuantity"></ShoppingItem>
            </div>
        </div>
        <AddItemModal></AddItemModal>
        <NewItemButton></NewItemButton>
    </div>
</template>