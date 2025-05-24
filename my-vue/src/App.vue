<template>
  <h1>Food</h1>
  <p>Food items are generated with v-for from the 'foods' array.</p>
  <div id="wrapper">
    <food-item v-for="x in foods" :key="x.name" :food-name="x.name" :food-desc="x.desc" :is-favorite="x.favorite"
      @toggle-favorite="receiveEmit" />
  </div>

  <div>
    <button @click="changeCountry">Change Country</button>
    <KeepAlive include="CompIndonesia">
      <component :is="activeComponent"></component>
    </KeepAlive>
  </div>
</template>

<script>
import { KeepAlive } from 'vue';

export default {
  data() {
    return {
      foods: [
        {
          name: 'Apples',
          desc: 'Apples are a type of fruit that grow on trees.',
          favorite: true
        },
        {
          name: 'Pizza',
          desc: 'Pizza has a bread base with tomato sauce, cheese, and toppings on top.',
          favorite: false
        },
        {
          name: 'Rice',
          desc: 'Rice is a type of grain that people like to eat.',
          favorite: false
        },
        {
          name: 'Fish',
          desc: 'Fish is an animal that lives in water.',
          favorite: true
        },
        {
          name: 'Cake',
          desc: 'Cake is something sweet that tastes good.',
          favorite: false
        },
      ],
      country: 'Indonesia'
    };
  },
  computed: {
    activeComponent() {
      if (this.country === 'Indonesia') {
        return 'indonesia'
      } else {
        return 'malaysia'
      }
    }
  },
  methods: {
    receiveEmit(foodName) {
      let food = this.foods.find(fi => fi.name === foodName)

      if (food) {
        food.favorite = !food.favorite
      }
    },
    changeCountry() {
      if (this.country === 'Indonesia') {
        this.country = 'Malaysia'
      } else {
        this.country = 'Indonesia'
      }
    }
  }
}
</script>

<style>
#wrapper {
  display: flex;
  flex-wrap: wrap;
}

#wrapper>div {
  border: dashed black 1px;
  flex-basis: 120px;
  margin: 10px;
  padding: 10px;
  background-color: lightgreen;
}
</style>