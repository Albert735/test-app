import { StyleSheet } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import HomeScreen from "./Screens/HomeScreen";
import TopNavigation from "./Components/TopNavigation";

export default function App() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <TopNavigation />
        <HomeScreen />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEDEC",
  },
});
