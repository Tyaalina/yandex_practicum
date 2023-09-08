<template>
  <div class="video-container">
    <h1>"Градиентный фон" (CSS gradients)</h1>
    <video controls width="640" height="360">
      <source src="путь_к_вашему_видео.mp4" type="video/mp4">
      Ваш браузер не поддерживает воспроизведение видео.
    </video>
  </div>
</template>

<script>
export default {
  name: 'VideoBlock',
};
</script>

<style scoped>
.video-container {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>