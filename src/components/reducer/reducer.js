const initial = {
    all: false,
    withoutTransfers: false,
    oneTransfer: false,
    twoTransfer: false,
    threeTransfer: false
};

const reducer = (state=initial, action) => {
    const stateLength = Object.values(state).filter(i => i === true).length;
    
    switch (action.type) {
        
        case 'ALL':
            return {
                all: !state.all,
                withoutTransfers: !state.all? true: false,
                oneTransfer: !state.all? true: false,
                twoTransfer: !state.all? true: false,
                threeTransfer: !state.all? true: false,
            };
        case 'WITHOUT_TRANSFER': 

            return {
                ...state,
                all: (stateLength === 3 && state.withoutTransfers === false) ? true : false,
                withoutTransfers: !state.withoutTransfers
            }
        case 'ONE_TRANSFER':
            return {
                ...state,
                all: (stateLength === 3 && state.oneTransfer === false) ? true : false,
                oneTransfer: !state.oneTransfer
            }
        case 'TWO_TRANSFER':
            return {
                ...state,
                all: (stateLength === 3 && state.twoTransfer === false) ? true : false,
                twoTransfer: !state.twoTransfer
            }
        case 'THREE_TRANSFER':
            return {
                ...state,
                all: (stateLength === 3 && state.threeTransfer === false) ? true : false,
                threeTransfer: !state.threeTransfer
            }
        default: 
            return state
    }
}

export default reducer;