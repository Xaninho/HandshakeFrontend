<template>
    <v-app>
        <NavigationDrawer :drawer="drawer"/>
        <Navbar @drawerEvent="drawer = !drawer" />
        <slot />
    </v-app>  
</template>

<script>
    export default {
        data() {
            return {
                drawer: true,
            }
        }
    }
</script>
