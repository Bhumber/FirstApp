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
    
            newPostText: []
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
    
    getState() {
        return this._state;
    },

    //Posts
    addPost() {
        let newPost = {
            id: '5',
            message: this._state.profilePage.newPostText,
            like: '4'
        };
    
        this._state.profilePage.postData.push(newPost);
    
        this._callSubscriber(this._state);
    },
    
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    //Messages
    addMessage() {
        let newMess = {
            id: '3',
            sms: this._state.dialogsPage.messText,
        }
    
        this._state.dialogsPage.messData.push(newMess);
        this._callSubscriber(this._state);
    },
    
    updateMessText(newMess) {
        this._state.dialogsPage.messText = newMess;
        this._callSubscriber(this._state);
    },
    
    //Callback
    _callSubscriber() {},
    
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}

export default store;

window.store = store;