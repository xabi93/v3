<script setup>
import HeaderSection from './components/header-section.vue'
import IntroSection from './components/intro-section.vue'
// import ExperienceSection from './components/experience/experience-section'
import linksSection from './components/links/section-wrap'
import SectionContainer from './components/section-container.vue';
</script>

<template>
  <div class="flex h-screen items-center p-4">
    <div class="container m-auto max-w-2xl">
      <HeaderSection />
      <SectionContainer>
        <links-section />
      </SectionContainer>
      <SectionContainer>
        <IntroSection />
      </SectionContainer>
      <!--
    <SectionContainer>
      <Experience-section />
    </SectionContainer> -->
    </div>
  </div>
</template>
