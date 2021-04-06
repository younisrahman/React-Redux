// export const anotherName = (name) =>{
//     return{
//         type: 'CHANGE_NAME',
//         payload: name
//     }
// }

export const anotherName = (name) => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(res2 => {
                dispatch({ type: 'CHANGE_NAME', payload: res2[3].name })
            })
    }
}

export const addwish = () => {
    return {
        type: 'ADD_WISH',
        payload: 'code'
    }
}