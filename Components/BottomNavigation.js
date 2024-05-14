import { Layout, Text } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import IonIcons from "@expo/vector-icons/Ionicons";

export default function BottomNavigation() {
  return (
    <Layout style={styles.container}>
      <AntDesign name="home" size={30} color="#545454" />
      <IonIcons name="card-outline" size={30} color="#545454" />
      <AntDesign name="barchart" size={30} color="#545454" />
      <IonIcons name="person-outline" size={30} color="#545454" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    paddingBottom: 35,
    alignItems: "center",
   
  },
});
