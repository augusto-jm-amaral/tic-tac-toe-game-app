<template>
  <div class="row wait-dots" v-bind:class="{ 'in': active }">
    <div class="col s12">
      <div class="wrapper">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
  name: 'waitDots',
  data () {
    return {
      active: true
    }
  }
  // methods: {
  //   submitName () {
  //     this.$store.dispatch('enterGame', {
  //       name: this.$refs.name.value,
  //       socket: this.$socket,
  //       router: this.$router
  //     })

  //     this.active = false
  //   }
  // },
  // computed: {
  //   ...mapGetters({
  //     playersOnline: 'currentPlayersOnline'
  //   })
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.active = true
  //   }, 1000)
  // }
}
</script>
<style lang="scss" scoped>

.wait-dots {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1.1);
  transition: all .4s cubic-bezier(.8, 0, 0, 1.2);
  opacity: 0;
  z-index: -1;

  &.in {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
    z-index: 1;

  }

  .wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100px;

    .dot {
      background-color: red;
      border-radius: 50%;
      float: left;
      margin: 0 3px;
      width: 10px;
      height: 10px;
      transform: scale(0);
      animation: grow 1.5s ease 1 0s;

      &:nth-child(2) {
        animation: grow 1.5s ease infinite .2s;
      }

      &:nth-child(3) {
        animation: grow 1.5s ease infinite .4s;
      }

      &:nth-child(4) {
        animation: grow 1.5s ease infinite .6s;
      }

      &:nth-child(5) {
        animation: grow 1.5s ease infinite .8s;
      }

      @keyframes grow {
        50% {
          transform: scale(1);
          opacity: 1;
        }

        100% {
          opacity: 0;
        }
      }
    }
  }
}
</style>
