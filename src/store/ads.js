export default{
    state:{
        ads:[
			{
				title:"Монобукет #36",
				desc:"Цветы в букете: роза кустовая. Цвет букета: персиковый, красный.",
				promo: true,
				src:"https://chita.klumba.store/upload/iblock/67a/67a702ca8d95e76b8292028afb3453da.JPG",
				id:"1"
			},
			{
				title:"Дуобукет #115",
				desc:"Цветы в букете: тюльпан, роза кустовая. Гамма букета: персиковый, розовый.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/b85/wcusayxqisixgl57742sirm2xhe4k9yt/IMG_3030.JPG",
				id:"2"
			},
			{
				title:"Гамма #231",
				desc:"Цветы в букете: диантус, роза, роза кустовая, цимбидиум.Цвет букета: белый, капучино, персиковый, красный.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/352/3etqj8wtn8eey76fjp918ato4weeljyb/IMG_6308.JPG",
				id:"3"
			},
			{
				title:"Монобукет #105",
				desc:" Цветы в букете: диантус.Цвет букета: голубой, жёлтый, розовый..",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/892/33u14oh9w19d2e779fiy6zwhkx95ch3h.jpg",
				id:"4"
			},
			{
				title:"Монобукет #121",
				desc:"Цветы в букете: роза кустовая. Цвет букета: лавандовый.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/f89/1ss65jir9hftb6oeq32n22xs4zgfklmg.JPG",
				id:"5"
			},
			{
				title:"Дуобукет #127",
				desc:"Цветы в букете: роза, цимбидиум. Гамма букета: белый, лавандовый.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/20b/c494gu23j33pwp61cl02g7tu3f2gmh1v/IMG_6269.JPG",
				id:"6"
			}
        ]
    },
    mutations: {
		createAd(state, payload){
			state.ads.push(payload)
		}
	},
    actions: {
		createAd({commit},payload){
			payload.id = Math.random()
			commit('createAd', payload)
		}
	},
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {return ad.promo})
        },
        myAds(state) {
            return state.ads
        },
		adById(state){
			return id => {
				return state.ads.find(ad=> ad.id == id)
			}
		}
    }
}