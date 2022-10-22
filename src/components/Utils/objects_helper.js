export const updateObjectInArray = (items, itemID, objPropName, newObjectProp) => {
    return items.map(u => {
        if (u[objPropName] === itemID){
            return {...u, ...newObjectProp}
        }
        return u
    })
}
