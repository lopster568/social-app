import postsReducer from './posts/posts.reducer'
import userReducer from './user/user.reducers'
import themeReducer from './theme/theme.reducers'
import { persistReducer } from 'redux-persist'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
    theme: themeReducer,

})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default persistedReducer