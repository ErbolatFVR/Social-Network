// Хранилище
let store ={
    _state: {
        profilePage: {
            posts: [
                {id: 1, likesCount: 12, post: 'Hi, How are you?'},
                {id: 2, likesCount: 26, post: 'It\'s my first post'},
                {id: 3, likesCount: 28, post: 'Look at this'},
            ],
            newPostText: 'New Post Text',
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Akerke', surname: 'Mukhamadieva'},
                {id: 2, name: 'Yebol', surname: 'Satybaldyn'},
                {id: 3, name: 'Erbolat', surname: 'Erkinbek'},
                {id: 4, name: 'Agzambek', surname: 'Kairat'},
                {id: 5, name: 'Yersyl', surname: 'Kerimbek'},
                {id: 6, name: 'Axmet', surname: 'Ermekov'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'I am fine'},
                {id: 4, message: 'Let\'s go play'},
                {id: 5, message: 'Blablaalabalabl'}
            ]
        }
    },

    getState () {
        return this._state;
    },

    _callSubscriber ()  {
        console.log('State changed')},

    subscribe (observer)  {
        this._callSubscriber = observer
    },

    dispatch (action) {
        if (action.type === 'ADD-POST' ) {
            let newPost = {
                id: 5,
                likesCount: 9999,
                post: this._state.profilePage.newPostText,
            }

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') { //Обновляет данные newPostText
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }


}


export default store;
window.store = store;