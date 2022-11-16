import { StyleSheet, Text, View,SafeAreaView,FlatList,Pressable,Image } from 'react-native'
import { useContext } from 'react'
import { OrderContext } from '../context/listOrderContext'
const Order  = (props)=>{
    // const {route} = props
    // const {listOrders} = route.params
    const {listOrders} = useContext(OrderContext)
    // console.log(listOrders,typeof listOrders)
    const x = [...listOrders]
    var total = x.reduce( (money,item) => money+ item.price,0)
    const oneCoffee = ({item})=>(
        
        <View style = {styles.item}>
            <View style = {styles.avatarContainer}>
                <Image source={item.image} style = {styles.avatar} />
            </View>
            <Text> {item.name} </Text>
            <Text> {item.quantity}</Text>
            <Text> {item.price}$ </Text>
        </View>
    )

    return (
        <View style = {styles.container}>
            <SafeAreaView style = {styles.list}>
                <FlatList 
                data={listOrders}
                renderItem = {oneCoffee}
                ListEmptyComponent = {<Text>this is very coffees</Text>}
                keyExtractor = {item => item.id}
                key = {item =>item.id}
                />
            </SafeAreaView>
            <View style = {styles.cost}>
                <Text style  = {styles.total}> Total</Text>
                <Text style = {styles.money}> {total}$ </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,

    },
    list:{
        flex:1,
    }
    ,
    item:{
        backgroundColor: '#F8E7D7',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin: 5,   
    },
    avatarContainer:{
        backgroundColor:'#2C1503',
        height:100,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    avatar:{
        height:100,
        width:100,
    },
    cost:{
        height:50,
        paddingHorizontal:8,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
    },
    total:{
        fontSize:17,
        fontWeight:'500',
    },
    money:{
        color:'red',
        fontSize:17,
        fontWeight:'500',
    }
})

export default Order