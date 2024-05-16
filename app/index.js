import { StyleSheet } from "react-native";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import HomeScreen from "../Screens/HomeScreen";
import TopNavigation from "../Components/TopNavigation";
import BottomNavigation from "../Components/BottomNavigation";

export default function Page() {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <Layout style={styles.container}>
        <TopNavigation />
        <HomeScreen />
        <BottomNavigation />
      </Layout>
    </ApplicationProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECEDEC",
    height: 100,
  },
});
