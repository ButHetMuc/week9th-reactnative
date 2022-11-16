import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from "react-native"
import { Foundation } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useState, useContext} from "react";
import { OrderContext } from "../context/listOrderContext";

const deviceWidth = Dimensions.get('window').width

const Details = (props)=>{
    const {route} = props
    const {item} = route.params
    const {listOrders,setListOrders} = useContext(OrderContext)
    // console.log(listOrders)
    var newListOrders = [...listOrders]
    const buyItem = {...item}
    delete buyItem.description
    console.log(listOrders)
    
    const [price,setPrice] = useState(item.price)
    const [amout,setAmout] = useState(0)
    const onpressIncrease = ()=>{
        setAmout(amout+1)
        setPrice(item.price * (amout+1) )
    }
    const onpressDecrease = ()=>{
        if(amout <1){
            setAmout(0)
        }else{
            setAmout(amout-1)
            setPrice(item.price * (amout-1))
        }
    }
    return (
        <View style = {styles.container}>
            <View style = {styles.banner}>
                <Image source={item.image} style={styles.avatar}/>
            </View>
            <View style = {styles.info}>
                <View style = {styles.nameView}>
                    <Text style = {styles.name}>{item.name}</Text>
                </View>
                <View style = {styles.feedbackView}> 
                    <AntDesign name="staro" size={24} color="black" />
                    <Text>4.7 rating</Text>
                    <Foundation name="comments" size={24} color="black" style={styles.comment}/>
                    <Text> 200 comments</Text>
                </View>
                <View style = {styles.behaviorView}>
                    <TouchableOpacity onPress={onpressDecrease}>
                        <AntDesign name="minuscircleo" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style ={styles.quantity}> {amout} </Text>
                    <TouchableOpacity onPress={onpressIncrease}>
                        <AntDesign name="pluscircleo" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style = {styles.price}> {price}$ </Text>
                </View>
                <View style = {styles.descriptionView}>
                    <Text style = {styles.about}> About</Text>
                    <Text styles = {[styles.description,styles.text]}> {item.description}  </Text>
                </View>
            </View>
            <TouchableOpacity style = {styles.add} onPress = {()=>{
                buyItem.quantity = amout
                buyItem.price = price
                // console.log(buyItem)
                newListOrders.push(buyItem)
                setListOrders(newListOrders)
            }}>
                <Text> Add to cart</Text>
            </TouchableOpacity>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingTop:20,
    },
    banner:{
        flex:1,
        marginHorizontal:8,
        borderRadius:10,
        alignItems:'center',
        backgroundColor:'#2C1503',
    },
    info:{
        flex:2,
    },
    avatar:{
        height:deviceWidth/2,
        width: deviceWidth/2,
    },
    nameView:{
        padding:12,
        flexDirection:'row',
        justifyContent:'flex-start',
    },
    name:{
        fontSize:30,
        fontWeight:'500',
    },
    feedbackView:{
        padding:12,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    comment:{
        marginLeft:24,
    },
    behaviorView:{
        padding:12,
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
    },
    quantity:{
        fontSize:18,
        marginHorizontal:12,
    },
    price:{
        position:'absolute',
        right:0,
        marginRight:28,
        fontSize:20,
        fontWeight:'bold',
        color:'red',
    },
    descriptionView:{
        flex:1,
        padding:12,
    },
    about:{
        fontSize:24,
        fontWeight:'400',
        lineHeight: 30,
    },
    description:{
        fontSize: 16,
        fontWeight:'200',
        
    },
    text:{
        color:'#DDDACB',
    },
    add:{
        backgroundColor:'#DDDACB',
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:16,
        borderRadius:10,
        marginBottom:20,
    }
})

export default Details 