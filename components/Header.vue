<template>
    <header class="bg-white">
        <div class="container mx-auto h-16 flex items-center justify-between">
            <button @click="toggleSidebar()">{{sidebar}}</button>
        </div>
    </header>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {}
    },
    computed: {
        ...mapGetters('sidebar', ['getSidebar']),
        sidebar() {
            return this.getSidebar;
        }
    },
    methods: {
        ...mapActions('sidebar', ['setSidebar']),
        toggleSidebar() {
            this.setSidebar(!this.getSidebar);
        }
    }
}
</script>