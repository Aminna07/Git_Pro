export default{
    state:{
        ads:[
			{
				title:"Дуобукет #127",
				desc:"Цветы в букете: роза, цимбидиум.Гамма букета: белый, лавандовый",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/20b/c494gu23j33pwp61cl02g7tu3f2gmh1v/IMG_6269.JPG",
				id:"1"
			},
			{
				title:"Коробка #40",
				desc:"Цветы в букете: гиацинт , анемон , диантус , фрезия, маттиола.Цвет букета: лавандовый, белый, фиолетовый",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/131/7blk64igztsb9lc1jotz1tng5s1jmja1/IMG_6675.JPG",
				id:"2"
			},
			{
				title:"Гамма #128",
				desc:"Цветы в букете: диантус, роза кустовая, эрингиум.Цвет букета: фиолетовый, синий.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/3c4/mh0e3w01unyg7yfgj2liu6z4jrpty0yn.JPG",
				id:"3"
			},
			{
				title:"Монобукет #51 ",
				desc:"Цветы в букете: тюльпан.Цвет букета: фиолетовый.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/559/5591adb4f071f3c8b320a6cf088320c7.JPG",
				id:"4"
			},
			{
				title:"Гамма #234",
				desc:"Цветы в букете: цимбидиум , роза, леукадендрон, астранция. Цвет букета: красный, капучино.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/81f/q5x16tdsysjywnpy2somu30w3atewyzp/IMG_6657.JPG",
				id:"5"
			},
			{
				title:"Монобукет #158",
				desc:"Цветы в букете: тюльпан.Цвет букета: красный.",
				promo: true,
				src: "https://chita.klumba.store/upload/iblock/ac5/cpgcg5ufzfdm6yc82t6x34k58qsyrabg/10078534-34A0-43E8-B2AC-0FFDA3DE2F0A.jpeg",
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