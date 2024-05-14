import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <Text style={styles.text}>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEDEC",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold", 
    color: "#000000",
  }
});
