import { StyleSheet, Text, View, TextInput, Pressable, FlatList } from 'react-native'
import { useState } from 'react'


const createScreen = ({data,setdata}) => {
  const [itemName, setitemName] = useState("")
  const [stockAmt, setstockAmt] = useState("")
  const handlerAddItems=()=>{
    const newItem={
      id:Date.now(),
      name:itemName,
      stock:stockAmt
    }
    setdata([...data, newItem])

  }
  return (
    <View style={styles.container2}>
      <TextInput placeholder="enter an item name..."
        style={styles.input}
        value={itemName}
        onChange={(item) => setitemName(item)}



      />
      <TextInput
        placeholder="enter an stock amount..."
        style={styles.input}
        value={stockAmt}
        onChange={(item) => setstockAmt(item)}



      />
      <Pressable style={styles.btn} onPress={()=> handlerAddItems()}>
        <Text style={styles.txt}>
          ADD ITEMS
        </Text>
      </Pressable>
      <View>
        <View style={styles.container}>
          <Text style={styles.headingtxt}>All Items in the stock</Text>
         
        </View>
        <FlatList style={styles.flatcontainer}
          data={data}
          // key extractor is used to extract the key or unique id form the items
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={[styles.itemcontainer, { backgroundColor: item.stock < 15 ? "#FFCCCC" : "#D7F6BFFF" }]}>
              <Text style={styles.itemtxt}>{item.name}</Text>
              <Text style={styles.itemtxt}>{item.stock}</Text>
              <View style={{flexDirection:"row",gap:10}}>
                 <Text style={styles.itemtxt}>EDIT</Text>
              <Text style={styles.itemtxt}>DELETE</Text>

              </View>

            </View>
          )}

        />
        {/* here i have used data as a prop which collected the mock data i have created and add it in the flatlist*/}



      </View>
    </View>
  )
}

export default createScreen

const styles = StyleSheet.create({

  container2: {
    padding: "4%",
    gap: 10

  },
  input: {

    borderWidth: 1,
    borderColor: "blue",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7
  },
  btn: {
    backgroundColor: "green",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"

  },
  txt: {
    color: "white"
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,

  },
  headingtxt: {
    fontWeight: "500",
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  itemcontainer: {
    flexDirection: "row",
   justifyContent: "space-between",
    paddingHorizontal: 15,
     border:10,
    paddingVertical:15,
    borderColor:"red",
    borderRadius:8,
    marginVertical:2
   
  },
  itemtxt: {
    fontWeight: "400",
    fontSize: 15,
    
    

  },
  flatcontainer:{
   
  }
})
