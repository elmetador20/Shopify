import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './src/screens/HomeScreen'
const App = () => {
  return (
    <View style={styles.container}>
    <HomeScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
flex:1,
justifyContent:"center",
backgroundColor:"Yellow",
color:"pink",
alignItems:"center"
  }
})