<template>
  <div class="recon-sec-content">
    <h1>Parent Component count: {{ countValue }}</h1>
  </div>
</template>

<script setup>
import { inject } from "vue";
const countValue = inject("count");
</script>
