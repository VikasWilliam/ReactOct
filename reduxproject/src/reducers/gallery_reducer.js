/* eslint-disable import/no-anonymous-default-export */
export default function(state={},action){
    switch(action.type){
        case 'GET_GALLERY':
            return{...state,galleryNews:action.payload}
        default:
            return state
    }
}