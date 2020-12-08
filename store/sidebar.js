export const state = () => ({
    sidebar: false
})

export const getters = {
    getSidebar: state => {
        return state.sidebar;
    }
}

export const mutations = {
    SET_SIDEBAR(state, sidebar) {
        state.sidebar = sidebar;
    }
}

export const actions = {
    setSidebar({commit}, sidebar) {
        commit('SET_SIDEBAR', sidebar);
    }
}