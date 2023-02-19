import { getObject, setObject } from "@/utils/handleLocalStorage";
import { createStore } from "vuex";

export default createStore({
    state: {
        items: [],
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getItem: (state) => (index) => {
            return state.items[index]
        }
    },
    mutations: {
        getItemsFromLocal(state) {
            state.items = getObject("itemStorage") || []
        },
        addItem(state, itemName) {
            state.items.push({itemId: Math.random(), itemName: itemName, itemQuantity: 0, isSelected: false})
            setObject("itemStorage", state.items)
        },
        removeItem(state, index) {
            state.items.splice(index, 1)
            setObject("itemStorage", state.items)
        },
        updateItem(state, [index, newItem]) {
            state.items[index] = newItem
            setObject("itemStorage", state.items)
        }
    },
    actions: {
        getItemsFromLocal(context) {
            context.commit("getItemsFromLocal")
        },
        addItem(context, payload) {
            context.commit("addItem", payload)
        },
        removeItem(context, payload) {
            context.commit("removeItem", payload)
        },
        updateItem(context, payload) {
            context.commit("updateItem", payload)
        }
    },
    modules: {}
})
