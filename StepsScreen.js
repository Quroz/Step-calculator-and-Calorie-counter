import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Pedometer} from "expo-sensors"
import { useEffect, useState } from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';

const StepsScreen = () => {

  const [steps, setSteps] = useState(0);

  useEffect(() => {
     const stepsCallback = Pedometer.watchStepCount((res) =>{
      setSteps(res.steps)
    })
  }, [])

  return (
    <View style = {styles.container}>
        <ImageBackground
            style = {styles.imageBackground}
            source={{uri:'https://wallpaperaccess.com/full/654840.jpg'}}
        >
          <View style = {styles.headerContainer}>
            <Text style = {styles.headerText}>Step counter</Text>
          </View>
          <View style = {styles.circularContainer}> 
              <CircularProgress
              value = {steps}
              maxValue={6500}
              radius={180}
              textColor = {"#ECF0F1"}
              activeStrokeColor= {"#F39C12"}
              inActiveStrokeColor={"#9B59B6"}
              inActiveStrokeOpacity={0.5}
              inActiveStrokeWidth={40}
              activeStrokeWidth={40}
              title={"Steps"}
              titleColor = {"#ECF0F1"}
              titleStyle={{fontWeight: "bold"}}
              />
          </View>
        </ImageBackground>
    </View>
  )
}

export default StepsScreen

const styles = StyleSheet.create({
 container: {
     flex: 1
 },

 imageBackground: {
    flex: 1,
    resizeMode: "cover",
  },
  headerContainer: {
    margin: 60,
    alignItems: "center"
  },
  headerText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#F39C12"
  },
  circularContainer: {
    alignItems: "center",
    marginTop: "35%"
  }
})