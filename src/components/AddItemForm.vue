<script>
export default {
    name: "AddItemForm",
    data() {
        return {
            itemName: "",
            itemQuantity: 0
        }
    }
}
</script>

<style scoped lang="scss">
    .input__wrapper {
        display: flex;
        flex-direction: column;

        &__buttons {
            button {
                margin: 0 .6rem;
            }
        }

        .form-floating {
            margin: 1rem 0;
        }

        div {
            width: 100%;
        }
    }
</style>

<template>
    <div class="input__wrapper d-flex justify-center align-items-center">
        <div class="input__wrapper__form">
            <div class="form-floating">
                <input class="form-control" type="text" id="itemName" placeholder="Leite">
                <label for="itemName">Nome do Item</label>
            </div>
            <div class="form-floating">
                <input type="number" class="form-control" id="itemQuantity" placeholder="1">
                <label for="itemQuantity">Quantidade</label>
            </div>
        </div>
        <div class="input__wrapper__buttons">
        </div>
    </div>
</template>