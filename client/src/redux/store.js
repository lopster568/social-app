import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import postsReducer from './posts/posts.reducer'
import userReducer from './user/user.reducers'
import themeReducer from './theme/theme.reducers'

const store = configureStore({
    reducer: {
        posts: postsReducer,
        user: userReducer,
        theme: themeReducer
    },
    middleware: [thunk, logger]
})

export default store