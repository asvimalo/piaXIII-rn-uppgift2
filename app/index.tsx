import { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function Index() {

  const [count, setCount] = useState(0)

  function onPlus() {
    setCount(count + 1)
  }
  function onMinus() {
    if (count > 0) {
      setCount(count - 1)
    }

  }
  function onReset() {
    setCount(0)
  }
  return (
    <>
      <View style={styles.viewNumber}>
        <Text style={styles.number}> {count} </Text>
      </View>
      <View style={styles.viewButtons}>
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
        { count > 0 &&
          <Button
            onPress={onReset}
            title="RESET"
            color="#841584"

          />
        }
        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  viewNumber: {
    flex: 1,
    alignItems: "center",
  },
  viewButtons: {
    flex: 5,
  },
  number: {
    fontSize: 30
  }
})