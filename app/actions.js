import C from './constants';


export function changeResult(data) {
    return {
        type: C.CHANGE_RESULT,
        payload: data
    }
}