import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {

  const [count, setCount] = useState(0)

//PLUS" och "MINUS" som ökad/minskar siffran med 1. Låt inte siffra bli mindre än noll.
  function onPlus() {
    setCount(count + 1)
  }
  function onMinus() {
    if (count > 0) {
      setCount(count - 1)
    }
    
  }
  return (
    <>
      <View style={styles.vista1}>
        <Text style={styles.numero}> {count} </Text>
      </View>
      <View style={styles.vista2}>
      <Button
        onPress={onPlus}
        title="PLUS"
        color="green"
        
      />
      <Button
        onPress={onMinus}
        title="MINUS"
        color="red"
        
      />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  vista1: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  vista2: {
    flex: 5,
  },
  numero: {
    fontSize: 30
  }
})