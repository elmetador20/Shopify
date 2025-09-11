import { Pressable, StyleSheet, Text, View } from 'react-native'


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard</Text>
      <View style={styles.btncontainer}>
        <Pressable style={styles.btn}>
          <Text style={styles.btntxt}>All items</Text>
        </Pressable>
        <Pressable style={styles.btn}>
          <Text style={styles.btntxt}>Low stock</Text>
        </Pressable>
         <Pressable style={styles.btn}>
          <Text style={styles.btntxt}>Create items</Text>
        </Pressable>
      </View>
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
    shadowOffset: { width: 20, height: 20 },
    shadowColor: 'black',
    shadowOpacity: 5
  },
  btncontainer: {
    // flex:1,
    flexDirection: 'row',
    gap: 10

  },
  txt: {
    paddingveritcle: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderWidth:.8,
    borderColor: "red"

  },
  btntxt:{
    color:"yellow",
    fontWeight:"500",
    fonysize:12
  }
})