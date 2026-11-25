<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects } from '../../data/constants'
import Footer from '../Footer/Footer.vue'

const project = projects.find((p) => p.slug === useRoute().params.slug)

const youtubeId = (url) => {
  if (!url) return null
  const u = new URL(url)
  if (u.hostname === 'youtu.be') return u.pathname.slice(1)
  if (u.hostname.endsWith('youtube.com')) return u.searchParams.get('v')
  return null
}
const videoId = youtubeId(project?.demoVideo)
const playing = ref(false)

const paragraphs = (text) => (text ? text.split(/\n\s*\n/) : [])
const sections = project
  ? [
      { title: 'The problem', body: paragraphs(project.problem) },
      { title: 'My approach', body: paragraphs(project.approach) }
    ].filter((s) => s.body.length)
  : []
</script>

<template>
  <div class="project-page">
    <RouterLink to="/" class="home-link">oluwadara oloye</RouterLink>

    <template v-if="project">
      <div v-if="videoId" class="video">
        <iframe
          v-if="playing"
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`"
          :title="`${project.name} demo video`"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
        ></iframe>
        <button
          v-else
          class="poster"
          :aria-label="`Play the ${project.name} demo video`"
          @click="playing = true"
        >
          <img :src="`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`" alt="" />
          <span class="play" aria-hidden="true">▶</span>
        </button>
      </div>

      <h1>{{ project.name }}</h1>
      <ul class="tech-stack">
        <li v-for="item in project.techStack" :key="item">{{ item }}</li>
      </ul>
      <div class="links">
        <a v-if="project.projectLink" :href="project.projectLink" target="_blank" rel="noopener">
          Live project
        </a>
        <a v-if="project.projectRepo" :href="project.projectRepo" target="_blank" rel="noopener">
          View code
        </a>
        <a
          v-if="project.demoVideo && !videoId"
          :href="project.demoVideo"
          target="_blank"
          rel="noopener"
        >
          View demo
        </a>
      </div>

      <section v-for="section in sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <p v-for="(para, i) in section.body" :key="i">{{ para }}</p>
      </section>

      <section v-if="project.tradeoffs?.length">
        <h2>Trade-offs</h2>
        <div v-for="t in project.tradeoffs" :key="t.decision" class="tradeoff">
          <h3>{{ t.decision }}</h3>
          <p v-if="t.why"><strong>Why:</strong> {{ t.why }}</p>
          <p v-if="t.cost"><strong>Cost:</strong> {{ t.cost }}</p>
        </div>
      </section>

      <section v-if="project.learned">
        <h2>What I learned</h2>
        <p v-for="(para, i) in paragraphs(project.learned)" :key="i">{{ para }}</p>
      </section>

      <section v-if="project.relatedPosts?.length">
        <h2>Related posts</h2>
        <ul class="posts">
          <li v-for="post in project.relatedPosts" :key="post.url">
            <a :href="post.url" target="_blank" rel="noopener">{{ post.title }}</a>
          </li>
        </ul>
      </section>
    </template>

    <template v-else>
      <h1>Project not found</h1>
      <RouterLink to="/" class="back">Back to all projects</RouterLink>
    </template>
  </div>
  <Footer />
</template>

<style lang="scss" scoped src="./ProjectPage.scss"></style>
