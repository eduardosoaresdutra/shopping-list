<script>
export default {
    name: "ShoppingItem",
    props: ["itemName", "itemQuantity"]
}
</script>

<style scoped lang="scss">
    .shopping-item__wrapper {
        display: flex;
        // justify-content: center;
        align-items: center;

        input {
            margin: 0 0.6rem;
            width: 1.2rem;
            height: 1.2rem;
        }
        
        label {
            font-size: 1.2rem;
        }
    }
</style>

<template>
    <div class="shopping-item__wrapper d-flex align-items-center">
        <input class="form-check-input" type="checkbox" id="shoppingItemCheckbox">
        <label class="form-check-label" >{{ itemName }} : {{ itemQuantity }}</label>
    </div>
</template>