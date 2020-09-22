
let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hello, I am learning ReactJS.', likesCount: 1 },
                { id: 2, message: 'Hey it is my first post.', likesCount: 21 },
                { id: 3, message: 'Hey it is my second post.', likesCount: 211 }
            ],
            newPostText: ''
        },
    },

    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
}

export default store;
window.store = store;
