import { createStore } from "vuex";

export default createStore({
    state: {
        text: {}
    },
    mutations: {
        updateInfo(state, payload){
            state.text = payload
        }
    }
})