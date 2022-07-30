<template>

    <v-app-bar app color="rgba(255, 255, 255, 0.8)" elevation="0">

      <v-app-bar-nav-icon @click="$emit('drawerEvent')"/>

      <v-toolbar-title>Handshake CRM</v-toolbar-title>

      <v-spacer/>

      <v-menu>

        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" style="margin-right: 20px;">
            <v-badge content="3" color="red">
              <v-icon color="grey">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>

        <v-list three-line width="400">
            <template v-for="(item, index) in items">
              <v-subheader
                v-if="item.header"
                :key="item.header"
                v-text="item.header"
              ></v-subheader>

              <v-divider
                v-else-if="item.divider"
                :key="index"
                :inset="item.inset"
              ></v-divider>

              <v-list-item v-else :key="item.title">

                <v-list-item-avatar style="margin-right: 10px;">
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title v-html="item.title"></v-list-item-title>
                  <v-list-item-subtitle
                    v-html="item.subtitle"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
        </v-list>

      </v-menu>

      <v-menu>

        <template v-slot:activator="{ props }">

           <span style="cursor: pointer" v-bind="props">
              <v-chip link>
                <v-badge dot bottom color="green" style="margin-right: 10px;">
                  <v-avatar size="25">
                    <img src="https://i.pinimg.com/originals/0b/55/a1/0b55a15e6f600e44a800787f3dbd7603.jpg" alt="Current User" style="width: 100%;" />
                  </v-avatar>
                </v-badge>
                <span>John Xina</span>
              </v-chip>
          </span>

        </template>

        <v-list width="250">

          <v-list-item two-line>

            <v-list-item-avatar style="margin-right: 10px;">
              <img src="https://i.pinimg.com/originals/0b/55/a1/0b55a15e6f600e44a800787f3dbd7603.jpg" alt="Current User" style="width: 100%;" />
            </v-list-item-avatar>

              <div style="flex:auto;">
                <v-list-item-title>John Xina</v-list-item-title>
                <v-list-item-subtitle>Logged In</v-list-item-subtitle>
              </div>
              

          </v-list-item>

          <v-list-item link v-for="(menu, i) in menus" :key="i">
                <v-icon color="grey">{{ menu.icon }}</v-icon>
                <v-list-item-title>{{ menu.title }}</v-list-item-title>
          </v-list-item>

        </v-list>

      </v-menu>

    </v-app-bar>
</template>

<script>

export default {
    name: 'Navbar',
    data() {
        return {
          menus: [
            { title: "Profile", icon: "mdi-account" },
            { title: "Change Password", icon: "mdi-key" },
            { title: "Setting", icon: "mdi-cog" },
            { title: "Logout", icon: "mdi-logout" },
          ],
          items: [
              {
                avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
                title: "Brunch this weekend?",
                subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
              },
              { divider: true, inset: false },
              {
                avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
                title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
                subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
              },
              { divider: true, inset: false },
              {
                avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
                title: "Oui oui",
                subtitle:
                  '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
              },
              { divider: true, inset: false },
              {
                avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
                title: "Birthday gift",
                subtitle:
                  '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
              },
              { divider: true, inset: false },
              {
                avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
                title: "Recipe to try",
                subtitle:
                  '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
              },
          ],
        }
    }
}

</script>