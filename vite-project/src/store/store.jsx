import { configureStore } from '@reduxjs/toolkit'
import { controlButton } from '../slice/slice'
const store = configureStore({
    reducer: {
        controlButton: controlButton
    }
})

export default store