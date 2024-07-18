export const breakpoints = {
    state: {
        height:555
    },
    mutations: {},
    actions: {},
    getters: {
        isTablet(state, getter) {
            return getter.getWidth < 930
        },
        isPhone(state,getter){
            return getter.getWidth < 550
        }
    },
}