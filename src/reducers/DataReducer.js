import {
    DATA_CHANGED,
    DATA_LOAD,
    DATA_LOAD_FAILED,
    DATA_LOAD_SUCCESS,
    DETAILS_ITEM_DATA_CHANGED
} from '../actions/types';

const INITIAL_STATE = {
    data: [],
    error: '',
    loading: false,
    detailsItemData: {}
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch (action.type) {
        case DATA_LOAD:
            return { ...state, loading: true, error: '' };
        case DATA_LOAD_SUCCESS:
            return { ...state, loading: false, error: '' };
        case DATA_LOAD_FAILED:
            console.log(action.payload);
            return { ...state, loading: false, error: action.payload };
        case DATA_CHANGED:
            return { ...state, data: action.payload };
        case DETAILS_ITEM_DATA_CHANGED:
            return { ...state, detailsItemData: action.payload };
        default:
            return state;
    }
};
