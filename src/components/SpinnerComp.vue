<template>
    <div>
      <div v-if="loading" class="spinner">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10" />
        </svg>
      </div>
      <div v-else>
        <!-- your content here -->
        {{ content }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loading: true,
        content: null
      }
    },
    mounted() {
      // simulate a delay to load the content
      setTimeout(() => {
        this.loading = false
        this.content = 'Loaded content!'
      }, 2000)
    }
  }
  </script>
  
  <style>
  .spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .spinner svg {
    width: 50px;
    height: 50px;
    animation: rotate 2s linear infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  </style>