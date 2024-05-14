import { ScrollView, StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import Svg, { Circle } from "react-native-svg";

export default function HomeScreen() {
  return (
    // Screens/HomeScreen.js
    <ScrollView>
      <Layout style={styles.mainContainer}>
        <View style={styles.container}>
          <View>
            <Text style={styles.text}>Hello David,</Text>
            <Text style={styles.hint}>Welcome Back!</Text>
          </View>
          <AntDesign name="setting" size={30} color="#545454" />
        </View>
        <View style={styles.cards1}>
          <View style={styles.cardsContent}>
            <Text style={styles.header}>Sales</Text>
            <Text>Total Sales Today</Text>
            <Text style={styles.fig}>$500</Text>
          </View>
          <View style={styles.progressCircle}>
            <Svg viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="blue"
                strokeWidth="4.5"
                fill={"none"}
              />
            </Svg>
          </View>
        </View>
        <View style={styles.cards2}>
          <View style={styles.cardsContent}>
            <Text style={styles.header}>Profit</Text>
            <Text>Per day ratio</Text>
            <Text style={styles.fig}>$150</Text>
          </View>
          <View style={styles.progressCircle}>
            <Svg viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="blue"
                strokeWidth="4.5"
                fill={"none"}
              />
            </Svg>
          </View>
        </View>
        <View style={styles.cards3}>
          <View style={styles.cardsContent}>
            <Text style={styles.header}>Order</Text>
            <Text>Order for today</Text>
            <Text style={styles.fig}>1000</Text>
          </View>
          <View style={styles.progressCircle}>
            <Svg viewBox="0 0 100 100">
              <Circle
                cx="50"
                cy="50"
                r="45"
                stroke="blue"
                strokeWidth="4.5"
                fill={"none"}
              />
            </Svg>
          </View>
        </View>
      </Layout>
    </ScrollView>
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
    marginVertical: 25,
  },
  text: {
    fontSize: 40,
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#000000",
  },
  header: {
    fontSize: 20,
    fontFamily: "sans-serif",
    fontWeight: "bold",
  },
  hint: {
    color: "#545454",
  },
  cards1: {
    marginTop: 30,
    paddingHorizontal: 20,
    flexDirection: "row",
    height: 150,
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#FAD6BA",
  },
  cards2: {
    marginTop: 30,
    paddingHorizontal: 20,
    height: 150,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#A4E5A9",
  },
  cards3: {
    marginTop: 30,
    height: 150,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#66D7EE",
  },
  progressCircle: {
    width: 100,
    height: 100,
  },
  cardsContent: {
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 30,
  },
  fig: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#000000",
  }
});
