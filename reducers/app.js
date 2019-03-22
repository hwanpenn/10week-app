import {APPREDUXTEST,APPREDUXCHANGE} from "../actions/app";

const initState = {
    username: "hwanpenn"
};

export default function reducer(state = initState,action) {
    switch (action.type) {
        case APPREDUXTEST:
            return{
                ...state,
                username: state.username
            };
        case APPREDUXCHANGE:
            return{
                ...state,
                username: "hwanpennNew"
            };
        default:
            return state
    }
}
