function setObject(object, storageName) {
    localStorage.setItem(JSON.stringify(object), storageName)
}

function getObject(storageName) {
    return JSON.parse(localStorage.getItem(storageName))
}

function removeObject(storageName) {
    localStorage.removeItem(storageName)
}

export { setObject, getObject, removeObject }