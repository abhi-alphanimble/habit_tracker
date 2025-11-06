import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.view}
    >
      <Text style={{fontSize: 20,fontFamily:"Urbanist-Bold"}}>You can login here!!</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  view : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  navButton : {
    width: 200,
    height: 25,
    backgroundColor: "coral",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontSize: 16,
    fontFamily: "Urbanist-Bold",
  },
});