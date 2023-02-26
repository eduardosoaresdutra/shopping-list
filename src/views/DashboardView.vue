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
            itemsToGen: null,
            showGenerateListBtn: false,
            showList: false
        }
    },
    methods: {
        toggleShowList() {
            this.showList === false ? this.showList = true : null
        },
        generateList() {
            this.items.length > 0 ? this.toggleShowList() : null

            this.itemsToGen = this.items.filter(item => item.isSelected)
            this.$store.dispatch("setList", this.itemsToGen)
        },
        getChangesFromRender(item, itemIndex) {
            this.items[itemIndex] = item
        }
    },
    computed: {
        getItems() {
            return this.$store.getters.getItems
        },
        getList() {
            return this.$store.getters.getGeneratedList
        },
        checkGenerateListBtn() {
            return this.items.length > 0 ? true : false
        }
    },
    mounted() {
        this.$store.dispatch("getItemsFromLocal")
        this.$store.dispatch("getListFromLocal")
        this.items = this.getItems
        this.itemsToGen = this.getList
        this.showGenerateListBtn = this.checkGenerateListBtn

        this.itemsToGen ? this.toggleShowList() : null
    },
    updated() {
        this.showGenerateListBtn = this.checkGenerateListBtn
        // this.itemsToGen.length <= 0 ? this.showList = false : null
        this.showList ? this.generateList() : null
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
                <ShoppingItem @renderEvent="getChangesFromRender" :itemProp="item" :item-index="index" :showList="this.showList" />
            </div>
        </div>
        <AddItemModal />
        <NewItemButton />
        <GenerateListButton @generateList="generateList" v-if="showGenerateListBtn" />
        <ListComponent v-if="showList" :itemsProp="itemsToGen" />
    </div>
</template>