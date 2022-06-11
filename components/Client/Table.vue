<script setup lang="ts">
import clients from "../../data.json";
const clientsOrganized = {
  first: [...clients].splice(0, 25),
  second: [...clients].splice(25, 25),
};
</script>

<template>
  <div class="table">
    <h1>TOP 50: THE RANKING</h1>
    <div class="table-container">
      <div class="table-col">
        <ClientRow :isHeader="true" />
        <ClientRow
          v-for="(client, index) in clientsOrganized.first"
          :key="client.id"
          :name="client.name"
          :rank="client.rank"
          :index="index"
        />
      </div>
      <div class="table-col">
        <ClientRow :isHeader="true" />
        <ClientRow
          v-for="(client, index) in clientsOrganized.second"
          :key="client.id"
          :name="client.name"
          :rank="client.rank"
          :index="index"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.table {
  margin: 3rem 0;
}
.table h1 {
  margin-bottom: 2rem;
}
.table-container {
  display: flex;
  justify-content: space-between;
}
.table-col {
  width: 48%;
}
</style>