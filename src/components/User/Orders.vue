<template> 
	<v-container>
		<v-layout row> 
		<v-flex xs12 sm6 offset-sm3>
					<h1 class="text--secondary mb-3 mt-3">Orders</h1>
	<v-card
    class="mx-auto"
    max-width="300"
    tile
  >
    <v-list subheader
    two-line
    flat>
        <v-list-item v-for="order in orders" :key="order.id">
          
          <v-list-item-content>
            <v-list-item-title>{{order.name}}</v-list-item-title>
			<v-list-item-subtitle>{{order.phone}}</v-list-item-subtitle>
          </v-list-item-content>

	<v-list-item-action>
		<v-checkbox
		:input-value="order.done"
		
		color="#7C99AC"
    @click="markDone(order)">
		</v-checkbox>
    </v-list-item-action>

	<v-list-item-action>
		<v-btn class="#FFEFEF" :to="'/ad/' + order.adId">Open</v-btn>
    </v-list-item-action>

        </v-list-item>
    </v-list>
  </v-card>
		</v-flex>
		</v-layout> 
	</v-container>
</template>

<script>
  export default {
    data() {
      return{
        orders:[
          {
            id:"111",
            name:"Kate",
            phone:"+79785630593",
            adId:"1",
            done:true
          },
          {
            id:"112",
            name:"Daniel",
            phone:"+79786784524",
            adId:"2",
            done:true
          },
          {
            id:"113",
            name:"Max",
            phone:"+79781230004",
            adId:"3",
            done:true
          }
        ]
      }
    },
    mathods:{
      markDone(order){
        order.done=!order.done
        console.log(order.done)
      }
    } 
  }
</script>