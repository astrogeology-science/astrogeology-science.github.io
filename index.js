
Vue.use(VueMaterial.default)

new Vue({
	el: '#app',
	data: {
		content: {
			news0: {
				id: 0,
				title: 'We took the first step',
				subhead: '2018/01/01',
				content: 'Work has begun. The first template of our site is complete. Here we will write news and publish projects about the Earth, the Solar System and the Universe.',
				img: "news/news_0001/back.jpg",
				alt: "Earth",
				seen: false
			},
		}
	},
	methods: {
		show_content: function(news) {
			news.seen = !news.seen
			// this.seen = !this.seen
		}
	}
})