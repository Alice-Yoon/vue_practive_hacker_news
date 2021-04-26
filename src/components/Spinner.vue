<template>
  <div id="Spinner">
    <div class="spinner"></div>
  </div>
</template>

<style scoped>
  #Spinner {
    width: 100%;
    padding: 10px;
  }

  .spinner {
    border: 3px solid grey;
    border-top: 3px solid blue;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    margin: 0 auto;
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }

</style>