<script>
import AddItemForm from "./AddItemForm.vue"
export default {
  components: { AddItemForm },
    name: "AddItemModal"
}
</script>

<style scoped lang="scss">
    .modal-header {
        display: flex;
        justify-content: flex-end;

        button {
            i {
                font-size: 1.4rem;
                vertical-align: middle;
            }
        }
    }
</style>

<template>
    <div class="modal__wrapper modal" id="addItemModal">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <AddItemForm></AddItemForm>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary w-100" data-bs-dismiss="modal">Adicionar Item</button>
                </div>
            </div>
        </div>
    </div>
</template>