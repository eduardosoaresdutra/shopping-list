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
        checkGenerateListBtn: function () {
            return this.items.length > 0 ? true : false
        }
    },
    mounted() {
        this.$store.dispatch("getItemsFromLocal")
        this.items = this.$store.getters.getItems
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
            <div v-for="(item, index) in items" :key="index" class="item">
                <ShoppingItem :item-name="item.itemName" :item-index="index" />
            </div>
        </div>
        <AddItemModal />
        <NewItemButton />
        <GenerateListButton @generateList="generateList" v-if="showGenerateListBtn" itemsArray="items" />
        <ListComponent v-if="showList" />
    </div>
</template>