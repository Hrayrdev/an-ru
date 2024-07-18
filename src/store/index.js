import {createStore} from 'vuex'
import {breakpoints} from "@/store/breakpoints";

export default createStore({
    state: {
        width: 0
    },
    mutations: {
        setWidth(state,payload){
            state.width = payload
        }
    },



    getters: {
        getWidth(state){
            return  state.width
        },

    },
    modules:{  breakpoints: breakpoints}
})
