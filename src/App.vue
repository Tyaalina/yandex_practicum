<template>
  <div id="app">
    <header>
      <h1>Тестовое задание на позицию Наставника для подростков по курсу “Web разработка”</h1>
    </header>
    <main>
      <div>
      
      <ul>
        <li
          v-for="(block, index) in blocks"
          :key="index"
          @click="showBlock(block)"
          :class="{ active: currentBlock === block }"
        >
          {{ block }}
        </li>
      </ul>

      <div v-show="currentBlock === 'Фотографии'">
        <photoBlock-component></photoBlock-component>
      </div>
      <div v-show="currentBlock === 'Почему я захотела стать программистом'">
        <aboutMeBlock-component></aboutMeBlock-component>
      </div>
      <div v-show="currentBlock === 'Ссылка на публичный репозиторий'">
        <a href='https://github.com/Tyaalina/yandex_practicum'>Ссылка на публичный репозиторий с исходниками приложения</a>
      </div>
      <div v-show="currentBlock === 'Видео о классной фишки из CSS'">
        <videoBlock-component></videoBlock-component>
      </div>
      </div>
    </main>
  </div>
</template>

<script>
import PhotoBlock from './PhotoBlock.vue';
import AboutMeBlock from './AboutMeBlock.vue';
import VideoBlock from './VideoBlock.vue';
  export default {
    components: {
      'photoBlock-component': PhotoBlock,
      'aboutMeBlock-component': AboutMeBlock,
      'videoBlock-component': VideoBlock,
    },
    data() {
      return {
        blocks: ['Фотографии', 'Почему я захотела стать программистом', 'Ссылка на публичный репозиторий', 'Видео о классной фишки из CSS'],
        currentBlock: 'Фотографии',
      };
    },
    methods: {
      showBlock(block) {
        this.currentBlock = block;
      },
    },
  };
</script>

<style>
  h1{
    text-align:center;
  }

  ul {
    margin-top: 30px;
    margin-bottom: 30px;
    list-style-type: none;
    padding: 0;
    text-align: center;
  }

    ul li {
      display: inline;
      margin-right: 10px; 
      padding: 10px;
      border: 2px solid #333;
      border-radius: 30px;
      box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
      cursor: pointer;
    }

    li.active {
      background: #e0dcdc;
      border: solid #5c5959;
      box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    }

    a{
      font-size: 18px;
      text-align:center;
      display:block;
    }
</style>