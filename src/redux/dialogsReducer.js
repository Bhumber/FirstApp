const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

export let addMessageActionCreator = () => ({type: ADD_MESSAGE});
export let onMessageChangeActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT, newMess: text});

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMess = {
                id: '3',
                sms: state.messText,
            }
            state.messData.push(newMess);
            return state;
        
        case UPDATE_MESSAGE_TEXT:
            state.messText = action.newMess;
            return state;

        default:
             return state;
    }
}
    

export default dialogsReducer;