const initialState = {
    page: 'login',
    clicks: 0,
    mode: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'PAGE':
            return {
                ...state,
                page: action.payload
            };

        case 'CLICK':
            return {
                ...state,
                clicks: state.clicks + 1
            };

        case 'MODE':
            return {
                ...state,
                mode: action.payload
            }

        default:
            return state;

    }

};

export default reducer;
