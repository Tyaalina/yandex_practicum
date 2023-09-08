<template>
  <div id="app">
    <header>
      <h1>Тестовое задание на позицию Наставника для подростков по курсу “Web разработка”</h1>
    </header>
    <main>
      <div>
      
      <ul>
        <li @click="showBlock('block1')">Фотографии</li>
        <li @click="showBlock('block2')">Почему я захотела стать программистом</li>
        <li @click="showBlock('block3')">Ссылка на публичный репозиторий</li>
        <li @click="showBlock('block4')">Видео о классной фишки из CSS</li>
      </ul>

      <div v-show="currentBlock === 'block1'">
        <photoBlock-component></photoBlock-component>
      </div>
      <div v-show="currentBlock === 'block2'">
        <aboutMeBlock-component></aboutMeBlock-component>
      </div>
      <div v-show="currentBlock === 'block3'">
        <a href='https://github.com/Tyaalina/yandex_practicum'>Ссылка на публичный репозиторий с исходниками приложения</a>
      </div>
      <div v-show="currentBlock === 'block4'">
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
        currentBlock: 'block1',
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
      color: red; /* Изменение цвета выбранного элемента <li> */
    }

    a{
      font-size: 18px;
      text-align:center;
      display:block;
    }
</style>