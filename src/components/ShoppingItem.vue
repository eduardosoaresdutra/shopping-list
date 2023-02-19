<script>
export default {
    name: "ShoppingItem",
    data() {
        return {
            item: null
        }
    },
    methods: {
        removeItem() {
            this.$store.dispatch("removeItem", this.itemIndex)
        },
        updateItem() {
            this.$store.dispatch("updateItem", [this.itemIndex, this.item])
        }
    },
    props: ["itemProp", "itemIndex"],
    beforeMount() {
        this.item = this.itemProp
    },
    updated() {
        this.updateItem()
    }
}
</script>

<style scoped lang="scss">
    .shopping-item__wrapper {
        display: flex;
        // justify-content: center;
        align-items: center;

        input {
            margin: 0 0.6rem;
        }

        input[type="checkbox"] {
            width: 1.2rem;
            height: 1.2rem;
        }

        input[type="number"] {
            width: 3rem;
            height: 1.4rem;
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
        <input class="form-check-input" type="checkbox" v-model="item.isSelected" id="shoppingItemCheckbox">
        <label class="form-check-label" >{{ item.itemName }}</label>
        <input type="number" min="0" max="999" v-model="item.quantity" id="shoppingItemQuantity">
        <button @click="removeItem">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>
</template>