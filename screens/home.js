import { FlatList, Image, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, Pressable } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import banner from '../images/banner.png'
import { OrderContext } from "../context/listOrderContext";
import { useContext } from "react";
const Home = (props)=>{
    const coffees  = [
        {
            id:1,
            name: 'Black coffee',
            image: require('../images/coffeeImage.png'),
            price: 77,
            description: 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora. '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
             + 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora.\n '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
        },
        {
            id:2,
            name: 'Capuccino',
            image: require('../images/coffeeImage.png'),
            price: 70,
            description: 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora. '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
             + 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora.\n '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
        },
        {
            id:3,
            name: 'Matche Tea plus',
            image: require('../images/coffeeImage.png'),
            price: 71,
            description: 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora. '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
             + 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora.\n '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
        },
        {
            id:4,
            name: 'Milk coffee',
            image: require('../images/coffeeImage.png'),
            price: 73,
            description: 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora. '
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
             + 'Chocolaty coffee is also found under the sugar-browning category of coffee aromas. The result is a chocolate-like amora. \n'
             + 'The smell isn\'t necessarily like the chocolate bars that you can buy on the shelf. In fact, the coffee can smell like unsweetened chocolate, cocoa, or even vanilla.'
        },
    ]
    const WIDTH = Dimensions.get('window').width
    const numColumns = 2
    const {listOrders, setListOrders}= useContext(OrderContext)
    const newListOrders = [...listOrders]

    const oneCoffee = ({item})=>(
        
        <Pressable style = {[styles.item,{height: WIDTH/numColumns}]} onPress = {()=>{
            props.navigation.navigate('details',{item})
        }}>
            <View style = {styles.avatarContainer}>
                <Image source={item.image} style = {styles.avatar} />
            </View>
            <Text style = {styles.text}> {item.name} </Text>
            <Text style = {styles.text}> {item.price}$ </Text>
            <TouchableOpacity onPress={()=>{
                const newItem = {...item}
                delete newItem.description
                console.log(newItem)
                const index = newListOrders.findIndex(e => e.id == newItem.id)
                if(index !== -1){
                    const newItem = newListOrders[index]
                    newItem.quantity += 1
                    newItem.price =  newItem.price * newItem.quantity
                    newListOrders[index] = newItem
                    setListOrders(newListOrders)
                    
                }else{
                    const newItem = item
                    newItem.quantity = 1
                    newListOrders.push(newItem)
                    setListOrders(newListOrders)
                }
            }}>
                <AntDesign name="shoppingcart" size={24} color="#DDDACB" />
            </TouchableOpacity>
        </Pressable>
    )

    return (
        <View style = {styles.container}>
            <View style = {styles.top}>
                <View style = {styles.innerTop}>
                    <View style = {styles.wellcome}>
                        <Text style = {styles.wellcometext}>WELL COME TO COOFEE SHOP</Text>
                    </View>
                    <Feather name="message-square" size={24} color="black" />
                    <FontAwesome name="bell-o" size={24} color="black" />
                </View>
            </View>
            <View style = {styles.banner}>
                <Image source={banner} resizeMode={'cover'} style = {styles.bannerImage} />
            </View>
            <View style = {styles.selection}>
                <TouchableOpacity style = {styles.touchable}>
                    <Text> All coffees</Text>
                </TouchableOpacity >
                <TouchableOpacity style = {styles.touchable}>
                    <Text> Original coffee</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {styles.touchable}>
                    <Text> Capuccino</Text>
                </TouchableOpacity>
            </View>
            <SafeAreaView style = {styles.list}>
                <FlatList 
                data={coffees}
                renderItem = {oneCoffee}
                ListEmptyComponent = {<Text>this is very coffees</Text>}
                keyExtractor = {item => item.id}
                numColumns = {numColumns}
                key = {item =>item.id}
                />
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop:20,
        backgroundColor:'#ECDCCD'
    },
    top:{
    
        flex:1,
    },
    innerTop:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    wellcome:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    banner:{
        flexDirection:'row',
        flex:2,
        paddingHorizontal:16,
    },
    bannerImage:{
        flex:1,
        borderRadius:10,
    },
    selection:{
        flexDirection:'row',
        justifyContent:'space-evenly'
    },
    touchable:{
        borderWidth:1,
        borderRadius:10,
        backgroundColor:'#F8E7D7',
    },
    list:{
        flex:6,
    },
    item:{
        backgroundColor: '#141416',
        flex:1,
        justifyContent:'space-between',
        alignItems:'center',
        paddingVertical:13,
        paddingHorizontal:13,
        margin: 10,   
        borderRadius:20,
    },
    avatarContainer:{
        height:89,
        width:89,
        justifyContent:'center',
        alignItems:'center',
    },
    avatar:{
        height:100,
        width:100,
    },
    name:{
        fontWeight:'600',
        fontSize:16,
        color:'#DDDACB',
    },
    wellcometext:{
        fontSize: 17,
        fontWeight:'500',
        
    },
    text:{
        color:'#DDDACB',
    }
})

export default Home