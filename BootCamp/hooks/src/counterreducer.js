const counterReducer = (state=0, action) => {
   switch (action.type){
        case 'INCREMENT':
        default:
        return state + 1
   }
}
export default counterReducer;
