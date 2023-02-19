<script>
import AddItemModal from "@/components/AddItemModal.vue";
import NewItemButton from "../components/NewItemButton.vue";
import ShoppingItem from "../components/ShoppingItem.vue";
import GenerateListButton from "@/components/GenerateListButton.vue";
import ListComponent from "@/components/ListComponent.vue";

export default { 
    name: "DashboardView",
    components: {
    ShoppingItem,
    NewItemButton,
    AddItemModal,
    GenerateListButton,
    ListComponent
},
    data() {
        return {
            items: [],
            showGenerateListBtn: false,
            showList: false
        }
    },
    methods: {
        toggleShowList() {
            this.showList === false ? this.showList = true : null
        },
        generateList() {
            this.items.length > 0? this.toggleShowList() : null
        }
    },
    computed: {
        getItems() {
            return this.$store.getters.getItems
        },
        checkGenerateListBtn() {
            return this.items.length > 0 ? true : false
        }
    },
    mounted() {
        this.$store.dispatch("getItemsFromLocal")
        this.items = this.getItems
        this.showGenerateListBtn = this.checkGenerateListBtn
    },
    updated() {
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
            <div v-for="(item, index) in items" :key="item.itemId" class="item">
                <ShoppingItem :itemProp="item" :item-index="index" />
            </div>
        </div>
        <AddItemModal />
        <NewItemButton />
        <GenerateListButton @generateList="generateList" v-if="showGenerateListBtn" itemsArray="items" />
        <ListComponent v-if="showList" />
    </div>
</template>