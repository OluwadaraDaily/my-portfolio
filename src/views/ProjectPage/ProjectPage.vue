<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { projects, mediaUrl } from '../../data/projects'

const project = projects.find((p) => p.slug === useRoute().params.slug)
const story = project?.story ?? {}

const video = project?.media.find((m) => m.type === 'youtube')
const videoId = video?.id
const otherMedia = project?.media.filter((m) => m !== video) ?? []
const playing = ref(false)

const paragraphs = (text) => (text ? text.split(/\n\s*\n/) : [])
const sections = project
  ? [
      { title: 'The problem', body: paragraphs(story.problem) },
      { title: 'My approach', body: paragraphs(story.approach) }
    ].filter((s) => s.body.length)
  : []
</script>

<template>
  <div class="project-page">
    <template v-if="project">
      <div v-if="videoId" class="video">
        <iframe
          v-if="playing"
          :src="`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`"
          :title="video.title"
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
        <a v-if="project.links.live" :href="project.links.live" target="_blank" rel="noopener">
          Live project
        </a>
        <a v-if="project.links.repo" :href="project.links.repo" target="_blank" rel="noopener">
          View code
        </a>
      </div>

      <section v-for="section in sections" :key="section.title">
        <h2>{{ section.title }}</h2>
        <p v-for="(para, i) in section.body" :key="i">{{ para }}</p>
      </section>

      <section v-if="story.tradeoffs?.length">
        <h2>Trade-offs</h2>
        <div v-for="t in story.tradeoffs" :key="t.decision" class="tradeoff">
          <h3>{{ t.decision }}</h3>
          <p v-if="t.why"><strong>Why:</strong> {{ t.why }}</p>
          <p v-if="t.cost"><strong>Cost:</strong> {{ t.cost }}</p>
        </div>
      </section>

      <section v-if="story.learned">
        <h2>What I learned</h2>
        <p v-for="(para, i) in paragraphs(story.learned)" :key="i">{{ para }}</p>
      </section>

      <section v-if="otherMedia.length">
        <h2>Videos and posts</h2>
        <ul class="posts">
          <li v-for="m in otherMedia" :key="mediaUrl(m)">
            <a :href="mediaUrl(m)" target="_blank" rel="noopener">{{ m.title }}</a>
          </li>
        </ul>
      </section>
    </template>

    <template v-else>
      <h1>Project not found</h1>
      <RouterLink to="/" class="back">Back to all projects</RouterLink>
    </template>
  </div>
</template>

<style lang="scss" scoped src="./ProjectPage.scss"></style>
