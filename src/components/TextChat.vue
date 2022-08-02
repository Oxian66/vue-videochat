<template>
  <div class="wrapper">
    <div class="wrapper-content">
      <div class="view">
        <div class="container">
          <TextChatForm @onSubmit="handleSubmit" />
          <List :items="items" />
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script>

import TextChatForm from '@/components/TextChatForm'
import List from '@/components/List'
export default {
  components: { TextChatForm, List },
  data() {
    return {
      items: [
        {
          id: 1,
          name: 'John Snow',
          body: 'hello vue 3',
          likes: 12,
          avatar: `https://avatars.dicebear.com/api/male/1.svg`,
          date: new Date(Date.now()).toLocaleString()
        },
        {
          id: 2,
          name: 'Shrek',
          body: 'hello world',
          likes: 6,
          avatar: `https://avatars.dicebear.com/api/male/2.svg`,
          date: new Date(Date.now()).toLocaleString()
        }
      ]
    }
  },
  methods: {
    handleSubmit(item) {
      this.items.push(item)
    }
  }
}
</script>

<style>
  .wrapper {
    overflow-y: scroll;
    height: 100%;
  }
</style>