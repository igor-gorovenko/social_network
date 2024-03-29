import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sitebarReducer from "./sitebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: 'It is my first post', likesCount: 12},
                {id: 1, message: 'Hi, how are you?', likesCount: 4},
                {id: 2, message: 'It is my first post', likesCount: 12},
            ],
            newPostText: 'Gurman'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Fine'},
                {id: 4, message: 'Ok'},
                {id: 5, message: 'Ok'},
            ],
            dialogs: [
                {id: 1, name: 'Igor'},
                {id: 2, name: 'Gurman'},
                {id: 3, name: 'Vova'},
                {id: 4, name: 'Andrew'},
                {id: 5, name: 'Sasha'},
                {id: 6, name: 'Jeka'},
            ],
            newMessageBody: ''

        },
        sitebar: {}
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // observer
    },

    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state)

    }
}

export default store;
window.store = store;

// store - OOP