import { StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import Svg, { Circle, Rect } from 'react-native-svg';

export default function HomeScreen() {
  return (
    <Layout style={styles.mainContainer}>
      <View style={styles.container}>
        <View>
          <Text style={styles.hint}>Welcome Back!</Text>
          <Text style={styles.text}>Hello David,</Text>
        </View>
        <AntDesign name="setting" size={30} color="#545454" />
      </View>
      <View style={styles.cards}>
        <View>
          <Text>Sales</Text>
          <Text>Total Sales Today</Text>
          <Text>$500</Text>
        </View>
        <View>
          <Svg height="50%" width="50%" viewBox="0 0 100 100" {...props}>
            <Circle
              cx="50"
              cy="50"
              r="45"
              stroke="blue"
              strokeWidth="2.5"
              fill="green"
            />
            <Rect
              x="15"
              y="15"
              width="70"
              height="70"
              stroke="red"
              strokeWidth="2"
              fill="yellow"
            />
          </Svg>
        </View>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#ECEDEC",
  },
  container: {
    backgroundColor: "#ECEDEC",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 40,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000000",
  },
  hint: {
    color: "#545454",
  },
  cards: {
    marginTop: 30,
    width: "100%",
    paddingHorizontal: 20,
  },
});
