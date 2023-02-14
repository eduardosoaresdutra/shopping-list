<script>
import AddItemModal from "@/components/AddItemModal.vue";
import NewItemButton from "../components/NewItemButton.vue";
import ShoppingItem from "../components/ShoppingItem.vue";
import { setObject, getObject } from "@/utils/handleLocalStorage"
import GenerateListButton from "@/components/GenerateListButton.vue";

export default { 
    name: "DashboardView",
    components: {
    ShoppingItem,
    NewItemButton,
    AddItemModal,
    GenerateListButton
},
    data() {
        return {
            items: null,
            showGenerateListBtn: false
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
    computed: {
        checkGenerateListBtn: function () {
            return this.items.length > 0 ? true : false
        }
    },
    beforeMount() {
        this.items = getObject("itemStorage") || []
        this.showGenerateListBtn = this.checkGenerateListBtn
    },
    updated() {
        setObject("itemStorage", this.items)
        this.showGenerateListBtn = this.checkGenerateListBtn
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
        <GenerateListButton v-show="showGenerateListBtn" itemsArray="items" />
    </div>
</template>