import { StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native'

const AllItems = ({ data }) => {
  return (
    <View>
      <View  style={styles.container}>
        <Text style={styles.headingtxt}>All Items</Text>
        <Text style={styles.headingtxt}>Quantity</Text>
      </View>
      <FlatList style={styles.flatcontainer}
        data={data}
        // key extractor is used to extract the key or unique id form the items
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={[styles.itemcontainer,{backgroundColor:item.stock<15?"#FFCCCC":"#D7F6BFFF"}]}>
            <Text style={styles.itemtxt}>{item.name}</Text>
            <Text style={styles.itemtxt}>{item.stock}</Text>
          </View>
        )}

      />
      {/* here i have used data as a prop which collected the mock data i have created and add it in the flatlist*/}



    </View>
  )
}

export default AllItems

const styles = StyleSheet.create({
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