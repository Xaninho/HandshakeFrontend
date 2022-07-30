<template>
    <v-navigation-drawer v-model="drawer">

        <v-img src="https://cdn-icons-png.flaticon.com/512/326/326960.png" class="drawer-logo"></v-img>        

        <v-divider/>

        <v-list>

            <v-list-item v-for="item in items" :key="item.title" link>
                <v-icon class="drawer-icon">{{ item.icon }}</v-icon>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>

        </v-list>

    </v-navigation-drawer>
</template>

<script>

export default {
    name: 'NavigationDrawer',
    props: ["drawer"],
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-view-dashboard' },
                { title: 'Clients', icon: 'mdi-account-group' },
                { title: 'Products', icon: 'mdi-cog' },
                { title: 'Orders', icon: 'mdi-cog-sync' },
                { title: 'System Setting', icon: 'mdi-view-dashboard' }
            ],
        }
    }
}

</script>