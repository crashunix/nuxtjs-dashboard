<template>
    <div class="bg-gray-900 w-16 h-full flex flex-col space-y-3" :class="{'w-auto pr-6': sidebar}">
        <div class="flex items-center">
            <div class="w-16 h-16 flex justify-center items-center">
                <div class="w-8 h-8 bg-red-400 rounded-full"></div>
            </div>
            <div :class="{'hidden': !sidebar}">
                <span class="text-xl text-white font-bold">Logo</span>
            </div>
        </div>
        <div class="flex items-center">
            <div class="w-16 h-16 flex items-center justify-center">
                <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
            <div :class="{'hidden': !sidebar}">
                <span class="text-white">crashunix</span>
            </div>
        </div>
        <nav class="flex flex-col relative">
            <a href="#" class="flex items-center">
                <div class="w-16 h-12 flex items-center justify-center">
                    <div class="w-8 h-8 bg-blue-400 rounded-lg"></div>
                </div>
                <div :class="{'hidden': !sidebar}">
                    <span class="text-blue-400 font-bold">Home</span>
                </div>
            </a>
            <a href="#" class="flex items-center">
                <div class="w-16 h-12 flex items-center justify-center">
                    <div class="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <div :class="{'hidden': !sidebar}">
                    <span class="text-white">Users</span>
                </div>
            </a>
            <div class="h-12 flex items-center absolute">
                <div class="h-4 w-1 bg-blue-400 rounded-r-lg"></div>
            </div>
        </nav>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters('sidebar', ['getSidebar']),
        sidebar() {
            return this.getSidebar;
        }
    }
}
</script>