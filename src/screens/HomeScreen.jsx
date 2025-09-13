import { Pressable, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'

import AllItems from './AllItems'
import LowStock from './LowStock'
import CreateScreen from './createScreen' 

const HomeScreen = () => {
   const data=
    [
  {
    id:1,
    name: "iPhone 14",
    stock: 20,
    price: 80000
  },
  {
    id:2,
    name: "Samsung Galaxy S23",
    stock: 15,
    price: 75000
  },
  {
    id:3,
    name: "OnePlus 11",
    stock: 25,
    price: 60000
  },
  {
    id:4,
    name: "Google Pixel 7 Pro",
    stock: 10,
    price: 70000
  },
  {
    id:5,
    name: "Xiaomi 13 Pro",
    stock: 30,
    price: 55000
  },
  {
    id:6,
    name: "Realme GT Neo 5",
    stock: 18,
    price: 42000
  },
  {
    id:7,
    name: "Vivo X90 Pro",
    stock: 22,
    price: 63000
  },
  {
    id:8,
    name: "Oppo Find X6",
    stock: 12,
    price: 58000
  },
  {
    id:9,
    name: "Asus ROG Phone 7",
    stock: 8,
    price: 72000
  },
  {
    id:10,
    name: "Nothing Phone (2)",
    stock: 16,
    price: 48000
  }
]

   
   
  const [view, setview] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.btncontainer}>
        <Pressable style={[styles.btn,view===0?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(0)}>
          <Text style={styles.btntxt}>All items</Text>
        </Pressable>
        <Pressable style={[styles.btn,view===1?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(1)}>
          <Text style={[styles.btntxt,view===1?{color:"white"}:null]}>Low stock</Text>
        </Pressable>
         <Pressable style={[styles.btn,view===2?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(2)}>
          <Text style={[styles.btntxt,view===2?{color:"white"}:null]}>Create items</Text>
        </Pressable>
      </View>
      {view===0 &&<AllItems data={data}/>}
      {view===1 &&<LowStock/>}
      {view===2 &&<CreateScreen/>}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    padding: "10%",
    width: '100%',
    height: '100%',
    backgroundColor: 'grey',
    marginBottom:"10%"

  },
  text: {
    fontSize: 25,
    alignItems: 'center',
    color: 'blue',
    
  },
  btncontainer: {
    // flex:1,
    flexDirection: 'row',
    gap: 10

  },
  btn: {
    paddingveritcle: 4,
    paddingHorizontal: 10,
    borderRadius:50,
    borderWidth:0.8,
    borderColor: "red",
    mouseCursor:"pointer"

  },
  btntxt:{
    color:"yellow",
    fontWeight:"500",
    fonysize:12,
    gap:20,
    // marginTop:8
    padding:8
  }
})