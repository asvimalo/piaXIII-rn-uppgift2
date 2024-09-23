import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {

  const [count, setCount] = useState(0)
  return (
    <View
      style={styles.vista}
    >
      <Text style={styles.numero}> {count} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  vista: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
  },
  numero: {
    fontSize: 30
  }
})