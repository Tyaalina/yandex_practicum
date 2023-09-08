<template>
  <div class="image-container">
    <div class="image-wrapper">
      <img src="https://tyaalina.github.io/yandex_practicum/img/now.jpg" alt="Последнее селфи" />
      <p>Последнее селфи</p>
    </div>
    <div class="image-wrapper">
      <img src="https://tyaalina.github.io/yandex_practicum/img/school.jpg" alt="Селфи из старшей школы" />
      <p>Фото из старшей школы</p>
    </div>
  </div>
</template>

<style>
  .image-container {
    display: flex;
    justify-content: center; 
    align-items: center; 
  }

  .image-wrapper {
    text-align: center;
    margin: 10px;
  }

  img {
    width: 480px; 
  }
</style>