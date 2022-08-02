<template>
  <div>
    <form @submit.prevent="onSubmit" @keyup.enter="onSubmit">
      <textarea type="text" v-model="body" required placeholder="Type text here">
    </textarea>
      <br />
      <!-- <button type="submit" class="btnTweet">Submit</button> -->
    </form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      body: '',
      name: this.$store.getters.getName,
    }
  },

  methods: {
    onSubmit() {
      this.$emit('onSubmit', {
        id: Math.round(Math.random() * 30),
        name: this.name,
        avatar: `https://avatars.dicebear.com/api/micah/${Date.now()}.svg`,
        body: this.body,
        date: new Date(Date.now()).toLocaleString(),
      });
      // reset
      this.body = '';
    },
  }
}
</script>

<style scoped>
form {
  padding-bottom: 20px;
  margin-bottom: 20px;
}

form>.form-controls {
  display: flex;
  align-items: center;
}

textarea {
  width: 100%;
  font-size: 24px;
  padding: 30px 27px;
  margin-bottom: 20px;
  border-radius: 14px;
  border: 1px solid #fff;
  border-bottom: 1px solid #ebeef0;
  resize: none;
}

.btnTweet {
  display: flex;
  justify-content: center;
  
  color: #fff;
  background-color: #33a1f2;
  border: 1px solid #33a1f2;
  padding: 10px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  border-radius: 0.25rem;
}
.btnTweet:hover {
    background-color: #2c8ed6;
  }

</style>