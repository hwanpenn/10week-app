import {GETSUCCESS } from "../actions/roleTables";

const initState = {
    username: "hwanpenn--getRole"
};

export default function reducer(state = initState,action) {
    switch (action.type) {
        case GETSUCCESS:
            return {
                ...state,
                isLoading: false,
                userInfo: action.result.data,
                errorMsg: ''
            };
        // case APPREDUXTEST:
        //     return{
        //         ...state,
        //         username: state.username
        //     };
        // case APPREDUXCHANGE:
        //     return{
        //         ...state,
        //         username: "hwanpennNew"
        //     };
        default:
            return state
    }
}
