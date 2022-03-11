<script setup>
import { defineProps } from "vue";
defineProps({
    icon: {
        type: Object,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
})
</script>

<template>
    <a
        :href="link"
        :aria-label="label"
        target="_blank"
        rel="noopener"
        class="px-2 transition-transform duration-200 transform hover:scale-150"
    >
        <font-awesome-icon :icon="icon" class="fa-2x" />
    </a>
</template>
