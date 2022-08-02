<template>
  <div id="app2">
    <div class="flex mb-4 mt-4 ml-4 mr-4 pb-4">
        <div class="w-full content-center h-12">
          <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4" >
              <p>You enter as {{name}}</p>
            </div>
            <div class="flex flex-row ">
            <vue-webrtc id="call-canvas" :roomId="roomId" ref="webrtc" @share-started="shareStarted"  class="w-full h-full" @share-stopped="leftRoom" @left-room="leftRoom" @joined-room="joinedRoom" width="100%" />
             <TextChat v-if="isVisible" :name="name" />
             </div>
          <div class="flex items-center justify-center">
            <button type="button" @click="copyClipboard" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Share Meeting</button>
            <button type="button" id="join-btn" @click="toggleRoom" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{{hasJoined ? 'Leave meeting' : 'Join again'}}</button>
            <button type="button" @click="openChat"  class="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">{{isVisible ? 'Close chat' : 'Open chat'}}</button>
          </div>
        </form>
       
      </div>
    </div> 
  </div>
</template>

<script>

import TextChat from './TextChat.vue'

export default {
  components: { TextChat },
  data () {
    return {
      roomId: 'roomId',
      hasJoined: false,
      mediaRecorder: {},
      chunks: [],
      userStream: {},
      isVisible: false,
      name: this.$store.getters.getName,
    }
  },

  
  mounted () {
    const hash =  window.location.hash
    if(hash != '') {
      this.roomId = hash.substring(1)
      this.toggleRoom()
    }
  },
  methods: {
    onStop () {
      var blob = new Blob(this.chunks, { 'type' : 'video/webm' });
      this.chunks = [];
      const file = new File ([blob], 'meeting.webm', { 'type' : 'video/webm' })
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
        a.href = url;
        a.download = 'meeting.webm';
        document.body.appendChild(a);
        a.click()
    },
    pushData (e) {
      this.chunks.push(e.data);
    },

    // record () {
    //   this.mediaRecorder.start()
    // },

    async toggleRoom () {
      try {
        if(this.hasJoined) {
          this.$refs.webrtc.leave()
          this.hasJoined = false
          this.mediaRecorder.stop()
        } else {
          await this.$refs.webrtc.join()
          this.userStream = this.$refs.webrtc.videoList[0].stream
          this.mediaRecorder = new MediaRecorder(this.userStream)
          this.mediaRecorder.ondataavailable = e => this.pushData(e)
          this.mediaRecorder.onstop = () => this.onStop()
          this.hasJoined = true
        }
      } catch (e) {
        alert(e)
      }
    },

    async addTrack() {
      try {
        const streams = this.$refs.webrtc.videoList
        streams.forEach(stream => {
          this.userStream.addTrack(stream)
        })
      } catch (e) {
          alert(e)
      }
    },
    joinedRoom (streamId) {
      //this.addTrack(streamId)
      console.log(streamId)
    },
    shareStarted (streamId) {
      console.log(streamId)
      // this.addTrack(streamId)
    },
    leftRoom (streamId) {
      // this.mediaRecorder.removeTrack(streamId)
      console.log(streamId)
    },
    async copyClipboard () {
      await navigator.clipboard.writeText(`http://localhost:8080//#${this.roomId}`)
      alert('Link copied to clipboard!')
    },
    async share () {
    const shareData = {
        title: 'Super videochat',
        text: 'Join my meeting!',
        url: `https://meet.jcompsolu.com/#${this.roomId}`
      }
      try {
      await navigator.share(shareData)
      } catch(err) {
      this.copyClipboard()
      }
    },
    openChat() {
      this.isVisible = !this.isVisible
    },
    
  }
}
</script>

<style scoped>
#room-input {
  margin-bottom: 3px;
}
#call-canvas {
  background-color: transparent;
}
#app2 {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#join-btn {
  margin: 4px 2px;
}
p {
  font-size: 2rem;
  font-weight: 400;
}
</style>
