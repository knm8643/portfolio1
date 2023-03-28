/* eslint-disable */
export default {
    name: 'App',
    data() {
        return {
            title: "Hello, World!",
            subtitle: "Welcome to my website",
            delay: 100,
            cursorVisible: true
        };
    },
    mounted() {
        this.showText();
        setInterval(() => {
            const star = document.querySelector('.intro-star')
            star.style.animation = 'none'
            setTimeout(() => {
                star.style.animation = 'star 60s linear infinite'
            }, 1000)
        }, 30000)
    },
    methods: {
        showText() {
            let titleIndex = 0;
            let subtitleIndex = 0;
            const titleInterval = setInterval(() => {
                    if (titleIndex < this.title.length) {

                    } else if (subtitleIndex < this.subtitle.length) {

                    } else {

                    }
            }, this.delay);
        }
    }
}