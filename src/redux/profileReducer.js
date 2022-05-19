const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export let addPostActionCreator = () => ({type: ADD_POST});
export let onPostChangeActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: '5',
                message: state.newPostText,
                like: '4'
            };
            state.postData.push(newPost);
            return state;
        
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText;
            return state;
        
        default:
            return state;
    }
}

export default profileReducer;