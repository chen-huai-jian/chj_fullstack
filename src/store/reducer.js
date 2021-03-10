const defaultState = {
    inputValue: 'Write Something',
    list: [
        '早八点开层会，',
        '早八点开层会，',
        '早八点开层会，'
    ]
}

export default (state = defaultState, action) => {
    // console.log(state,action);
    if(action.type === "inputChange"){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    return state
}