import { Pressable, StyleSheet, Text, View } from 'react-native'
import {useState} from 'react'

import AllItems from './AllItems'
import LowStock from './LowStock'
import CreateScreen from './createScreen' 

const HomeScreen = () => {

  const [view, setview] = useState(0)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.btncontainer}>
        <Pressable style={[styles.btn,view===0?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(0)}>
          <Text style={styles.btntxt}>All items</Text>
        </Pressable>
        <Pressable style={[styles.btn,view===1?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(1)}>
          <Text style={styles.btntxt}>Low stock</Text>
        </Pressable>
         <Pressable style={[styles.btn,view===2?{backgroundColor:"slateblue"}:null]} onPress={()=>setview(2)}>
          <Text style={styles.btntxt}>Create items</Text>
        </Pressable>
      </View>
      {view===0 &&<AllItems/>}
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