<template>

  <div class="carousel">
    
    <div class="carousel-inner" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">

      <div class="carousel-item" v-for="(image, index) in images" :key="index" :style="{ backgroundImage: `url(${image})` }"></div>

    </div>

    <button @click="prev" class="carousel-nav prev">‹</button>
    <button @click="next" class="carousel-nav next">›</button>

    <div class="carousel-dots">
      <span v-for="(image, index) in images" :key="index" :class="{ active: index === currentIndex }" @click="goTo(index)" ></span>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      images: [
        require('@/assets/images/CUMT-view1.jpg'),
        require('@/assets/images/CUMT-view2.jpg'),
        require('@/assets/images/CUMT-view3.jpg'),
        require('@/assets/images/CUMT-view4.jpg'),
        require('@/assets/images/CUMT-view1.jpg')
      ],
      timer: null
    };
  },
  methods: {
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prev() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    goTo(index) {
      this.currentIndex = index;
    },
    startAutoPlay() {
      this.timer = setInterval(this.next, 3000);
    },
    stopAutoPlay() {
      clearInterval(this.timer);
    }
  },
  mounted() {
    this.startAutoPlay();
  },
  beforeDestroy() {
    this.stopAutoPlay();
  }
};
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
  height: 525px;
  background-size: cover;
  background-position: center;
}

.carousel-nav {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.carousel-dots {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carousel-dots span {
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
}

.carousel-dots .active {
  background-color: rgba(255, 255, 255, 1);
}
</style>
