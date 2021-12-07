let vm = Vue.createApp({
    data() {
        return {
            perspective: 100,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            duration: 3

        }
    },
    computed: {
        box() {
            return {
                transform: `perspective(${this.perspective}px)
                rotateX(${this.rotateX}deg) 
                rotateY(${this.rotateY}deg) 
                rotateZ(${this.rotateZ}deg)`,
                'transition-duration': `${this.duration}s`
            }
        }
    },
    methods: {
        random() {
            this.perspective = Math.floor(Math.random() * 999);
            this.rotateX = Math.floor(Math.random() * 180);
            this.rotateY = Math.floor(Math.random() * 180);
            this.rotateZ = Math.floor(Math.random() * 180);
            this.duration = Math.floor(Math.random() * 10) + 's';
        },
        reset() {
            this.perspective = 100;
            this.rotateX = 0;
            this.rotateY = 0;
            this.rotateZ = 0;
        },
        copy() {
            const el = document.createElement('textarea');
            el.setAttribute('readonly', '')
            el.position = 'absolute';
            el.style.left = '-9999px';
            el.value = `transform: ${this.box.transform}`
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
        }
    }
});

vm.mount('#app')
