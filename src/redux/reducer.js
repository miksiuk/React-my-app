const initialState = {
    page: 'login',
    clicks: 0,
    mode: false,
    users: [
        {
            login: 'log1',
            password: 'pass1',
            firstName: 'Person1',
            lastName: 'Herson2'
        },
        {
            login: 'log2',
            password: 'pass2',
            firstName: 'Person2',
            lastName: 'Herson2'
        },
        {
            login: 'log3',
            password: 'pass3',
            firstName: 'Person3',
            lastName: 'Herson3'
        }
    ]
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

        case 'REGISTER':
            return {
                ...state,
                users: action.payload
            }

        default:
            return state;

    }

};

export default reducer;
