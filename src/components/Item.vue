<template>
  <li class="tweet__wrapper">
    <div class="tweet">
      <div class="avatar">
        <img :src="item.avatar" />
      </div>
      <div class="tweet-content">
        <div class="tweet-header">
          <span class="pr-1 font-bold">{{ item.name}}</span>
          <span>{{ item.date }}</span>
        </div>
        <div>{{ item.body }}</div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      reqired: true
    }
  }
}
</script>

<style scoped>
  .tweet-header {
  display: block;
  margin-bottom: 14px;
  color: #5b7083;
  font-size: 15px;
  white-space: nowrap;
}
.tweet-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  padding-left: 74px;
}
.tweet__wrapper {
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  padding: 14px 16px;
  border-bottom: 1px solid #ebeef0;
  transition: background-color 1s linear;
}
.tweet__wrapper :hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
.tweet {
  display: flex;
  margin-top: 3px;
  position: relative;
}
.tweet>.avatar {
    width: 49px;
    height: 49px;
    position: absolute;
    top: 0;
    left: 0;
  }
  .tweet>img {
      width: 100%;
      height: 100%;
      border: 1px solid #fff;
      border-radius: 50%;
    }

</style>