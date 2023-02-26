import { getObject, setObject } from "@/utils/handleLocalStorage";
import { createStore } from "vuex";

export default createStore({
    state: {
        items: [],
        generatedList: []
    },
    getters: {
        getItems(state) {
            return state.items
        },
        getGeneratedList(state) {
            return state.generatedList
        },
    },
    mutations: {
        getItemsFromLocal(state) {
            state.items = getObject("itemStorage") || []
        },
        addItem(state, itemName) {
            state.items.push({itemId: Math.random(), name: itemName, quantity: 0, isSelected: false})
            setObject("itemStorage", state.items)
        },
        removeItem(state, index) {
            state.items.splice(index, 1)
            setObject("itemStorage", state.items)
        },
        updateItem(state, [index, newItem]) {
            state.items[index] = newItem
            setObject("itemStorage", state.items)
        },
        setList(state, list) {
            state.generatedList = list
            setObject("generatedList", state.generatedList)
        },
        getListFromLocal(state) {
            state.generatedList = getObject("generatedList") || []
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
        },
        setList(context, payload) {
            context.commit("setList", payload)
        },
        getListFromLocal(context) {
            context.commit("getListFromLocal")
        }
    },
    modules: {}
})
