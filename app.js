Vue.createApp({
  data() {
    return {
      monkey: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed:{
    box() {
        return {
          transform:`
          perspective(${this.monkey}px)
            rotateX(${this.rotateX}deg)
            rotateY(${this.rotateY}deg)
            rotateZ(${this.rotateZ}deg)
          `
        }
      }
  },
  methods: {
    reset() {
      this.size = 0;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
  },
}).mount("#app");
