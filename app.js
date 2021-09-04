Vue.createApp({
  data() {
    return {
      monkey: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
      clicked: false,
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
          `,
          
        }
      }
  },
  methods: {
    reset() {
      this.size = 0;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
      this.backgroundColor='black'
    },
    copy(){
        const el = document.createElement('textarea')

         el.setAttribute('readonly', '')

         //el.style.position ='absolute'

         //el.style.left='-9999px'

        el.value = `transform: ${this.box.transform}`

        document.body.appendChild(el)

        el.select()

        document.execCommand('copy')

         //document.body.removeChild(el)
    },
}
 
}).mount("#app");
