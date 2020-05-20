function changeMenuItem (getID){
    return {
        type: 'CHANGE_MENU_ITEM', 
        data: getID
    }
}

export default changeMenuItem;