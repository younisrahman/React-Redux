
// const iState = {
//     name: "Younis",
//     wishes:['eat','Code']
// }
const nameReducer = (state='', action) => {
    if(action.type === 'CHANGE_NAME'){
        return action.payload
    }
    return state;
}

export default nameReducer;