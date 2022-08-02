<template>
  <div class="wrapper">
    <p v-if="name === ''" class="typography">Hello anonymous</p>
    <p v-else class="typography">Hello {{ name }}</p>
    <input v-model="name" placeholder="enter your name" >
    <router-link to="room">
    <button class="join-btn" :disabled="name === ''" @click="getName">Join chat</button>
  </router-link>
</div>
</template>

<style scoped>
.wrapper {
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 100%;
  width: 100%;
}
.typography {
  font-size: 2rem;
  font-weight: 400;
}
input {
  margin-bottom: 1rem;
  border-radius: 0.25rem;
  padding: 5px 2px;
  border-color: solid 1px #8b8f8d;
}
.join-btn {
  background-color: rgb(142, 144, 242);
  padding: 15px 32px;
  border: none;
  border-radius: 15px;
  color: white;
  text-align: center;
  text-decoration: none;
  font-size: 1rem;
}
</style>

<script>
// import { bus } from '../main'

export default {
  data() {
    return {
      name: ''
    }
  },

  computed: {
    getName() {
      this.$store.dispatch('setName', this.name)
      return this.$store.getters.getName
    }
  }

};
</script>