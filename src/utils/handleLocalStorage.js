function setObject(storageName, object) {
    localStorage.setItem(storageName, JSON.stringify(object))
}

function getObject(storageName) {
    return JSON.parse(localStorage.getItem(storageName))
}

function removeObject(storageName) {
    localStorage.removeItem(storageName)
}

export { setObject, getObject, removeObject }