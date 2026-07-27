import { StatusBar } from "expo-status-bar";
import { Button, Image, ScrollView, StyleSheet, Text } from "react-native";
import Filler from "../../components/page/filler";

const latihan_3 = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Latihan 3</Text>

      <Image
        source={require("../../assets/images/icon.png")}
        style={styles.image}
      />

      <Filler />

      <Button
        title="Go to latihan 2"
        onPress={() => console.log("Go to latihan 2")}
      />

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    // justifyContent: "center",
    // alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});