import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {sessionSlice} from "@/e_entities/session";
import {rootReducer} from "@/a_app/rootReducer";
import {baseApi} from "@/f_shared/api";
import {invalidateAccessTokenListener} from "@/d_features/Authentication/invalidateAccessToken";
import {quizSlice} from "@/e_entities/quiz";
import {playedQuizSlice} from "@/d_features/PlayQuiz";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [sessionSlice.name, quizSlice.name, playedQuizSlice.name],
}

export function makeStore() {
    const store = configureStore({
        // 👇 ATTENTION: persistReducer broke infering RootState
        reducer: persistReducer(
            persistConfig,
            rootReducer
        ) as unknown as typeof rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                },
            }).concat(baseApi.middleware, invalidateAccessTokenListener.middleware),
    })

    setupListeners(store.dispatch)

    return store
}

export const appStore = makeStore()
export const persistedStore = persistStore(appStore)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof appStore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof appStore.dispatch
