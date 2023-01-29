<script>
    import AddShoppingItemForm from "../miscellaneous/AddShoppingItemForm.vue";
    import NewItem from "../miscellaneous/NewItem.vue";
    import ShoppingItem from "../miscellaneous/ShoppingItem.vue";

    export default { 
        components: {
            ShoppingItem,
            AddShoppingItemForm,
            NewItem
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
    }
</style>

<template>
    <div class="dashboard-component__wrapper d-flex flex-column justify-content-center align-items-center">
        <div class="dashboard-component__wrapper__shopping-items">
            <div v-for="(item, index) in items" :key="index" class="item">
                <ShoppingItem :item-name="item.itemName" :item-quantity="item.itemQuantity"></ShoppingItem>
            </div>
        </div>
        <div class="dashboard-component__wrapper__add-item__wrapper modal" id="addItemModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <AddShoppingItemForm></AddShoppingItemForm>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Adicionar Item</button>
                    </div>
                </div>
            </div>
        </div>
        <NewItem></NewItem>
    </div>
</template>