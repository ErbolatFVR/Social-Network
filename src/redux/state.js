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
                {id: 3, name: 'Akerke', surname: 'Mukhamadieva'},
                {id: 4, name: 'Yebol', surname: 'Satybaldyn'},
                {id: 1, name: 'Erbolat', surname: 'Erkinbek'},
                {id: 5, name: 'Agzambek', surname: 'Kairat'},
                {id: 2, name: 'Yersyl', surname: 'Kerimbek'},
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

    // Отправляет данные новых постов в хранилище
    addPost: function () {
        let newPost = {
            id: 5,
            likesCount: 10,
            post: this._state.profilePage.newPostText,
        }

        // Отправляет данные из Textarea на хранилище
        this._state.profilePage.posts.push(newPost);
        this._callSubscriber(this._state);
    },

    //Обновляет данные newPostText
    updateNewPostText (newText)  {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe (observer)  {
        this._callSubscriber = observer
    },


}


export default store;
window.store = store;