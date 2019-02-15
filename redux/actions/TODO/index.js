import { TODO } from '../../type';

const initialState = {
    todo: 'My First App With intial state'
}

export default function (state = initialState, action) {
    switch (action.type) {
        case TODO:
            return {
                ...state,
                todo: action.value
            }
        default: return state;
    }
}

export const getTodoName = (callBackError) => async disaptch => {
    try {
        disaptch({
            type: TODO,
            value: 'My First App With Action in Redux'
        });
    } catch (error) {
        if (error) {
            callBackError(error.response.data.result);
        }
    }
}