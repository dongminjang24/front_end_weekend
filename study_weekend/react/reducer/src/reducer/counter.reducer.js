

const reducer = (state,action)=>{
    switch  (action.type){//action은 객체
        case 'INCREASE':
            return state +1
        case 'DECREMENT':
            return state -1
        default:
            return state;
    }
}
export default reducer;