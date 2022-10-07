import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const name = "joo";
  const add = (a, b) => a + b;
  const isFullname = false;

  return (
    <>
      {/*  주석 */}
      <View style={styles.container}>
        {/* <Text>My name {name} </Text> */}
        <Text>1 + 2 = {add(1, 2)} </Text>
        <Text>{isFullname === true ? name + "Kim" : name} </Text>
        <StatusBar style="auto" />
      </View>
      <Text>show joo</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
