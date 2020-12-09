let rerenderEntireTree = () => {
    console.log('State changed')
}
// Временная хранилище данных
let state = {
    profilePage: {
        posts: [
            {id: 1, likesCount: 12, post: 'Hi, How are you?'},
            {id: 2, likesCount: 26, post: 'It\'s my first post'},
            {id: 3, likesCount: 28, post: 'Look at this'},
        ],
        newPostText: 'ffffffff'
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Erbolat', surname: 'Erkinbek'},
            {id: 2, name: 'Yersyl', surname: 'Kerimbek'},
            {id: 3, name: 'Akerke', surname: 'Mukhamadieva'},
            {id: 4, name: 'Yebol', surname: 'Satybaldyn'},
            {id: 5, name: 'Agzambek', surname: 'Kairat'},
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
}
// Отправляет данные новых постов в хранилище
export const addPost = () => {
    let newPost = {
        id: 5,
        likesCount: 10,
        post: state.profilePage.newPostText
    }
    // Отправляет данные из Textarea на хранилище
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state);
}
//
//Обновляет данные newPostText
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

//...
export const subscribe = (observer) => {
         rerenderEntireTree = observer
}
export default state;