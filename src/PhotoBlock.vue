<template>
  <div class="image-container">
    <div class="image-wrapper">
      <img src="img/now.JPG" alt="Последнее селфи" />
      <p>Последнее селфи</p>
    </div>
    <div class="image-wrapper">
      <img src="img/school.JPG" alt="Селфи из старшей школы" />
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