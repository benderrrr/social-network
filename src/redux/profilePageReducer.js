const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST = 'UPDATE_NEW_POST';

let initialState =
    {
        postData: [
            {id: 1, text: 'Hello, world!', likeCount: 15},
            {id: 2, text: 'I\'m beginner React developer', likeCount: 21},
            {id: 3, text: 'This is my own social network!', likeCount: 18},

        ],
        newPost: '',
    };

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            if (state.newPost.trim()) {
                let newPost = {id: 4, text: state.newPost, likeCount: 0}
                state.postData.push(newPost);
                state.newPost = '';
            }
            return state;
        case UPDATE_NEW_POST:
            state.newPost = action.text;
            return state;
        default:
            return state;
    }
}
export const addPostAC = () => ({type: ADD_POST});
export const updateNewPostTextAC = (newPost) => ({type: UPDATE_NEW_POST, text: newPost});

export default profilePageReducer;