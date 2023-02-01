<script>
import AddItemForm from "./AddItemForm.vue"
export default {
  components: { AddItemForm },
    name: "AddItemModal"
}
</script>

<template>
    <div class="dashboard-component__wrapper__add-item__wrapper modal" id="addItemModal">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <AddItemForm></AddItemForm>
                </div>
            </div>
        </div>
    </div>
</template>