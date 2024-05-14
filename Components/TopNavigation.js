import { StyleSheet } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Layout } from "@ui-kitten/components";
import { Avatar } from "@ui-kitten/components";
import Profileimg from "../assets/7 Items I Never Buy From the Women's Section.jpeg";
export default function TopNavigation() {
  return (
    <Layout style={styles.container}>
      <Entypo name="menu" size={30} color="black" />
      <Avatar source={Profileimg} size="medium" />
    </Layout>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical:10,
    alignItems: "center",
    marginTop: 50,

  },
});
