<script>
export default {
    name: "AddItemModal",
    data() {
        return {
            itemName: ""
        }
    },
    methods: {
        addItem() {
            this.$store.dispatch("addItem", this.itemName)
            this.itemName = ""
        }
    }
}
</script>

<style scoped lang="scss">
.modal-header {
        display: flex;
        justify-content: space-between;

        button {
            i {
                font-size: 1.4rem;
                vertical-align: middle;
            }
        }
    }

    .form-floating {
        margin: 1rem 0;
    }
</style>

<template>
    <div class="modal__wrapper modal" id="addItemModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Adicione um Item</h3>
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-floating">
                        <input v-model="itemName" class="form-control" type="text" id="itemName" placeholder="Leite">
                        <label for="itemName">Nome do Item</label>
                    </div>
                </div>
                <div class="modal-footer">
                    <button @click="addItem" type="button" class="btn btn-info w-100" data-bs-dismiss="modal">Adicionar Item</button>
                </div>
            </div>
        </div>
    </div>
</template>