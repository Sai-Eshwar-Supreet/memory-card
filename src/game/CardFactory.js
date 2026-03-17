function createCardList(count){
    let cards = {};
    let selectedCount = 0;
    
    for(let i = 0; i < count; i++){
        const seed = crypto.randomUUID();
        cards[seed] = {seed, isSelected: false};
    }

    function get(index){
        return {...cards[index]};
    }

    function set(seed, isSelected){

        const card = cards[seed];

        if(card.isSelected === isSelected){
            return;
        }

        cards[seed] = {seed, isSelected};
        selectedCount = isSelected? selectedCount + 1: selectedCount - 1;
    }

    function getSelectedCount(){
        return selectedCount;
    }

    return {get, set, getSelectedCount}
}

export {createCardList};