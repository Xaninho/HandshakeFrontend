<template>

    <v-app-bar app color="rgba(255, 255, 255, 0.8)" elevation="0">

      <v-app-bar-nav-icon @click="$emit('drawerEvent')"/>

      <v-toolbar-title>Handshake CRM</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

    </v-app-bar>
</template>

<script>

export default {
    name: 'Navbar'
}

</script>