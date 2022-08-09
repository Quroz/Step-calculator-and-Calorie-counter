import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

const Options = ({setWeight,weight, setLenght, lenght, setAge, age , setGender, gender, setResult, setMultiple, multiple}) => {

let factor;

 function calculate(){
  if(weight === "" || lenght === "" || age ==="" || gender ==="" || multiple === 0){
      setResult("")
      console.warn("You need to fill in all options")
  }
  else{
      if(gender === "man"){
        if(multiple === 1)
          factor = 1.2
        if(multiple === 2)
          factor = 1.375
        if(multiple === 3)
          factor = 1.55
        if(multiple === 4)
          factor = 1.725
        if(multiple === 5)
          factor = 1.9
        let result = (10 * weight + (6.25*lenght) - (5*age) + 5)
        setResult(result * factor)
    }
    if(gender === "woman"){
        if(multiple === 1)
          factor = 1.2
        if(multiple === 2)
          factor = 1.375
        if(multiple === 3)
          factor = 1.55
        if(multiple === 4)
          factor = 1.725
        if(multiple === 5)
          factor = 1.9
        let result = ((10 * weight) +( 6,25*lenght) - (5*age - 161))
        setResult(result * factor)
    }
   }
 }

  return (
         <>
            <View style = {styles.option}>
                <View style = {{flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center"}}>
                   <Text style = {styles.optionHeader}>Weight in Kilo</Text>
                </View> 
                <View style = {{ backgroundColor: "#808080",flex: 1, justifyContent: "center"}}>
                    <TextInput
                    style = {styles.optionInput}
                    placeholder = "Kg"
                    placeholderTextColor={"white"}
                    clearButtonMode = {true}
                    value = {weight}
                    onChangeText = {text => setWeight(text)}
                    />
                </View>
             </View> 
                <View style = {styles.option}>
                <View style = {{flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center"}}>
                   <Text style = {styles.optionHeader}>Lenght in cm</Text>
                </View> 
                <View style = {{ backgroundColor: "#808080",flex: 1, justifyContent: "center"}}>
                    <TextInput
                    style = {styles.optionInput}
                    placeholder = "Cm"
                    placeholderTextColor={"white"}
                    clearButtonMode = {true}
                    value = {lenght}
                    onChangeText = {text => setLenght(text)}
                    />
                </View>
             </View> 
                <View style = {styles.option}>
                <View style = {{flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center"}}>
                   <Text style = {styles.optionHeader}>Age in years</Text>
                </View> 
                <View style = {{ backgroundColor: "#808080",flex: 1, justifyContent: "center"}}>
                    <TextInput
                    style = {styles.optionInput}
                    placeholder = "Years"
                    placeholderTextColor={"white"}
                    clearButtonMode = {true}
                    value = {age}
                    onChangeText = {text => setAge(text)}
                    />
                </View>
             </View> 
                <View style = {styles.option}>
                <View style = {{flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center"}}>
                   <Text style = {styles.optionHeader}>Gender</Text>
                </View> 
                <View style = {{ backgroundColor: "#F5F5F5",flex: 1, justifyContent: "center", flexDirection: "row"}}>
                        <TouchableOpacity style = {styles.buttonOne}
                        onPress = {() => setGender("man")}
                        >
                            <Text style = {{fontSize: 18, color: "white"}}>Man</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style = {styles.buttonTwo}
                        onPress = {() => setGender("woman")}
                        >
                            <Text style = {{fontSize: 18, color: "white"}}>Woman</Text>
                        </TouchableOpacity>
                </View>
             </View> 
             <View style = {styles.option}>
                <View style = {{flex: 1, backgroundColor: "#F5F5F5", justifyContent: "center", alignItems: "center"}}>
                   <Text style = {styles.optionHeader}>How much do you train?</Text>
                </View> 
                <View style = {{ backgroundColor: "#F5F5F5",flex: 2.5, justifyContent: "center", flexDirection: "row"}}>
                     <TouchableOpacity style = {{flex:1, justifyContent: "center", backgroundColor: "#808080" }}
                     onPress = {() => setMultiple(1)}
                     >
                         <Text style = {{color: "white", fontSize: 15}}>Little to no training</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {{flex:1, justifyContent: "center", backgroundColor: "#808080", marginLeft: 4}}
                     onPress = {() => setMultiple(2)}
                     >
                         <Text style = {{color: "white", fontSize: 15}}>1-3 times a week</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {{flex:1, justifyContent: "center", backgroundColor: "#808080", marginLeft: 4 }}
                     onPress = {() => setMultiple(3)}
                     >
                         <Text style = {{color: "white", fontSize: 15}}>4-5 times a week</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {{flex:1, justifyContent: "center", backgroundColor: "#808080", marginLeft: 4 }}
                     onPress = {() => setMultiple(4)}
                     >
                         <Text style = {{color: "white", fontSize: 15}}>6-7 times a week</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style = {{flex:1, justifyContent: "center", backgroundColor: "#808080", marginLeft: 4 }}
                     onPress = {() => setMultiple(5)}
                     >
                         <Text style = {{color: "white", fontSize: 15}}>2 times per day</Text>
                     </TouchableOpacity>
                </View>
             </View> 
             <View style = {styles.buttonContainer}>
                 <TouchableOpacity style = {styles.buttonResult} onPress = {calculate}>
                     <Text style = {{fontSize: 13, fontWeight: "bold"}}>Press to see your daily calorie balance</Text>
                 </TouchableOpacity>
             </View>
        </>
  )
}

export default Options

const styles = StyleSheet.create({
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
   },
   buttonOne: {
        flex: 1,
        backgroundColor: "#808080",
        justifyContent: "center"
   },
   buttonTwo: {
        flex: 1,
        marginLeft: 7,
        backgroundColor: "#808080",
        justifyContent: "center"
   },
   buttonContainer: {
       padding: 50,
   },
   buttonResult: {
       backgroundColor: "white",
       padding: 10,
       justifyContent: "center",
       alignItems:"center" ,
       borderRadius: 20,
       height: 60,
       borderWidth: 1
   }
})