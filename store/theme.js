export const state = () => ({
    theme: 'light'
})

export const getters = {
    getTheme: state => {
        return state.theme;
    }
}

export const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme;
    }
}

export const actions = {
    setTheme({commit}, theme) {
        commit('SET_THEME', theme);
    }
}