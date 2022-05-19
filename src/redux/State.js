import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import friendsReducer from './friendsReducer';


let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                            {id: '1', name: 'Sasha'},
                            {id: '2', name: 'Vitya'},
                            {id: '3', name: 'Katya'},
                            {id: '4', name: 'Sveta'},
                            {id: '5', name: 'Oleg'}
            ],
    
            messData: [
                        {id: '1', sms: "Hi"},
                        {id: '2', sms: "Hello"},
                        {id: '3', sms: "Privet"},
                        {id: '4', sms: "How are you ?"},
                        {id: '5', sms: "Kak dela ?"}
            ],
    
            incomingMess: [
                            {id: '1', answer: ''},
            ],
    
            messText: []
        },
        
        profilePage: {
            postData: [
                        {id: '1', message: 'Hi, how are you ?', like: '10'},
                        {id: '2', message: 'Its my first post', like: '15'}
            ],
    
            newPostText: ''
        },
    
        friendsPage: {
            friendsData: [
                            {id: '1', friendName: 'Sasha'},
                            {id: '2', friendName: 'Vitya'},
                            {id: '3', friendName: 'Katya'},
                            {id: '4', friendName: 'Sveta'},
                            {id: '5', friendName: 'Oleg'}
            ]
        }
    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.friendsPage = friendsReducer(this._state.friendsPage, action);
        this._callSubscriber();
    }
}    


export default store;

window.store = store;