import { Layout } from "@ui-kitten/components";
import { StyleSheet, Pressable } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import IonIcons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";

export default function BottomNavigation() {
  return (
    <>
      <Layout style={styles.container}>
        <Pressable onPress={() => router.push("/users/Revenue")}>
          <AntDesign name="home" size={30} color="#545454" />
        </Pressable>

        <Pressable>
          <IonIcons name="card-outline" size={30} color="#545454" />
        </Pressable>

        <Pressable>
          <AntDesign name="barchart" size={30} color="#545454" />
        </Pressable>
        <Pressable>
          <IonIcons name="person-outline" size={30} color="#545454" />
        </Pressable>
      </Layout>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 30,
    paddingBottom: 35,
    alignItems: "center",
  },
});
