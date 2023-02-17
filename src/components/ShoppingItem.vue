<script>
export default {
    name: "ShoppingItem",
    methods: {
        removeItemEmitter: function () {
            this.$emit("removeItem", this.itemIndex)
        }
    },
    props: ["itemName", "itemIndex"]
}
</script>

<style scoped lang="scss">
    .shopping-item__wrapper {
        display: flex;
        // justify-content: center;
        align-items: center;

        input[type="checkbox"] {
            margin: 0 0.6rem;
            width: 1.2rem;
            height: 1.2rem;
        }
        
        label {
            font-size: 1.2rem;
        }

        button {
            background: none;
            border: none;
            visibility: hidden;

            @media screen and (max-width: 992px) {
                visibility: visible;
            }
        }

        &:hover {
            button {
                visibility: visible;
            }
        }
    }
</style>

<template>
    <div class="shopping-item__wrapper d-flex align-items-center">
        <input class="form-check-input" type="checkbox" id="shoppingItemCheckbox">
        <label class="form-check-label" >{{ itemName }}</label>
        <input type="number" id="shoppingItemQuantity">
        <button @click="removeItemEmitter">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
</template>