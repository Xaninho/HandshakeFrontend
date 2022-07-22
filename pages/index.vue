<template>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>

          <v-col v-for="card in cards" :key="card" cols="12">

            <v-card elevation="3">
              <v-card-title>{{ card }}</v-card-title>

              <v-list two-line>
                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <v-list-item-avatar color="grey darken-1">
                    </v-list-item-avatar>

                      <v-card-subtitle>Message {{ n }}</v-card-subtitle>

                      <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique
                      </v-card-text>

                  </v-list-item>

                </template>
              </v-list>
            </v-card>

          </v-col>
        </v-row>
      </v-container>
    </v-main>
</template>

<script>
  export default {
    data: () => ({
      cards: ['Today', 'Yesterday'],
    }),
  }
</script>