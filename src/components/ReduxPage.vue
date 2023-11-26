<template>
  <div class="redux_page">
    <div class="redux_page__content container">
      <div class="redux_page__item">
        <iframe width="645" height="370" :src="video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <p class="redux_page__post-video-text">{{ title }}</p>
        <div v-if="Array.isArray(downloadLink)">
          <template v-for="(link, index) in downloadLink" :key="index">
            <a  :href="link" class="redux_page__download-btn google-download-button">DOWNLOAD {{ index + 1 }}</a>
          </template>
        </div>
        <a v-else :href="downloadLink" class="redux_page__download-btn google-download-button">DOWNLOAD</a>
        <p class="redux_page__caution">Владелец сайта не несет ответственности за сохранность ваших игровых данных!</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    video: String,
    downloadLink: [String, Array],
    title: String,
  },
};
</script>

<style>
p,
a {
  font-weight: 700;
}
.redux_page__caution {
  margin-top: 25px;
}

.redux_page__download-btn {
  display: inline-block;
  border: 4px solid white;
  border-radius: 30px;
  padding: 10px 20px;
  margin-top: 20px;
}
</style>
