import { ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import Options from './Options'

const HomeScreen = ({navigation}) => {

  const [weight, setWeight] = useState("")
  const [lenght, setLenght] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [result, setResult] = useState("")
  const [multiple, setMultiple] = useState(0)

 
{ /* useEffect(() => {
      setWeight("")
      setLenght("")
      setAge("")
      setGender("")
      setResult("")
      setMultiple(0)
  }, []) */}

  return (
    <View style = {styles.container}>
     <ImageBackground
     style = {{flex: 1, resizeMethod: "cover"}}
     source = {{uri: "https://assets.hongkiat.com/uploads/beautiful-minimalist-desktop-wallpapers/4k/preview/01.jpg?3"}}
     >
        <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>Step Calculator</Text>
        </View>
        <View style = {styles.mainContainer}>
            <Options
            setWeight = {setWeight}
            weight = {weight}
            setLenght = {setLenght}
            lenght = {lenght}
            setAge = {setAge}
            age = {age}
            setGender = {setGender}
            gender = {gender}
            setResult = {setResult}
            setMultiple = {setMultiple}
            multiple = {multiple}
            />          
        </View>
        {result !== "" &&
        <View style = {{alignItems: "center", marginTop: -20}}>
            <Text style = {{fontSize: 20, fontWeight: "bold"}}>Your daily calorie intake is: {result}</Text>
        </View>
        }
        <View style = {{width: "70%", backgroundColor: "white", padding: 15, alignSelf: "center", borderRadius: 20, borderWidth: 1, marginTop: 150}}>
            <TouchableOpacity style = {{justifyContent: "center", alignItems: "center"}}
            onPress = {() => navigation.navigate("Steps")}
            >
                <Text style = {{fontSize: 15, fontWeight: "bold"}}>Press to enter the steps calculator</Text>
            </TouchableOpacity>
        </View>
     </ImageBackground>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerContainer: {
        alignItems: "center",
        marginTop: 60,
    },
    headerText: {
        fontSize: 30,
        fontWeight: "bold"
    },
    mainContainer: {
        height: "60%",
        marginTop: 20,
        paddingHorizontal: 20,
    },
   option: {
        borderWidth: 1,
        height: 70,
        marginTop: 5,
        flexDirection: "row",
   },
   optionHeader: {
        marginLeft: 2,
        fontSize: 18
   },
   optionInput: {
        fontSize: 18,
        marginLeft: 2,
        color: "white"
   }
})