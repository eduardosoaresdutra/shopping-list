<script>
    export default {
        data() {
            return {
                itemName: "",
                itemQuantity: 0
            }
        }
    }
</script>

<style lang="scss">
    .input__wrapper {
        display: flex;
        flex-direction: column;

        div {
            width: 100%;
        }
    }
</style>

<template>
    <div class="input__wrapper d-flex justify-center align-items-center">
        <div class="input__wrapper__form">
            <div class="form-floating w-100">
                <input class="form-control" type="text" id="itemName" placeholder="Leite">
                <label for="itemName">Nome do Item</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" id="itemQuantity" placeholder="1">
                <label for="itemQuantity">Quantidade</label>
            </div>
        </div>
        <div class="input__wrapper__buttons">
            <button type="button" class="btn btn-primary w-75" data-bs-dismiss="modal">Adicionar Item</button>
            <button type="button" class="btn btn-secondary w-25" data-bs-dismiss="modal">Fechar</button>
        </div>
    </div>
</template>