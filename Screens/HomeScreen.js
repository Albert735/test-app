import { ScrollView, StyleSheet, View } from "react-native";
import { Layout, Text } from "@ui-kitten/components";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { PieChart } from "react-native-gifted-charts";

export default function HomeScreen() {
  const salesData = [
    {
      value: 70,
      color: "#E86830",
      label: "Sales",
      backgroundColor: "transparent",
    },
    { value: 30, color: "transparent", },
  ];
  const profitData = [
    {
      value: 30,
      color: "#16C72E",
      label: "Profit",
      backgroundColor: "transparent",
    },
    { value: 70, color: "transparent" },
  ];
  const orderData = [
    {
      value: 80,
      color: "#16A9C7",
      label: "Orders",
      backgroundColor: "transparent",
    },
    { value: 20, color: "transparent" },
  ];
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
            <Text appearance="hint" style={styles.hint}>
              Total Sales Today
            </Text>
            <Text style={styles.fig}>$500</Text>
          </View>
          <View style={styles.progressCircle}>
            <PieChart
              innerCircleColor={"#FADDD1"}
              donut
              radius={60}
              innerRadius={50}
              data={salesData}
              centerLabelComponent={() => {
                return (
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    70%
                  </Text>
                );
              }}
            />
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={26}
              color="#E86830"
              style={styles.arrow}
            />
          </View>
        </View>
        <View style={styles.cards2}>
          <View style={styles.cardsContent}>
            <Text style={styles.header}>Profit</Text>
            <Text>Per day ratio</Text>
            <Text style={styles.fig}>$150</Text>
          </View>
          <View style={styles.progressCircle}>
            <PieChart
              innerCircleColor={"#A4E5A9"}
              donut
              radius={60}
              innerRadius={50}
              data={profitData}
              centerLabelComponent={() => {
                return (
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    30%
                  </Text>
                );
              }}
            />
            <MaterialCommunityIcons
              name="arrow-bottom-right"
              size={26}
              color="#16C72E"
              style={styles.arrow1}
            />
          </View>
        </View>
        <View style={styles.cards3}>
          <View style={styles.cardsContent}>
            <Text style={styles.header}>Order</Text>
            <Text>Order for today</Text>
            <Text style={styles.fig}>1000</Text>
          </View>
          <View style={styles.progressCircle}>
            <PieChart
              innerCircleColor={"#9CE5F4"}
              donut
              radius={60}
              innerRadius={50}
              data={orderData}
              centerLabelComponent={() => {
                return (
                  <Text
                    style={{
                      fontSize: 22,
                      color: "black",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    80%
                  </Text>
                );
              }}
            />
            <MaterialCommunityIcons
              name="arrow-top-right"
              size={26}
              color="#16A9C7"
              style={styles.arrow}
            />
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
    marginTop: 10,
    flexDirection: "row",
    height: 160,
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#FADDD1",
  },
  cards2: {
    marginTop: 30,
    height: 160,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#A4E5A9",
  },
  cards3: {
    marginTop: 30,
    height: 160,
    flexDirection: "row",
    marginHorizontal: 20,
    borderRadius: 30,
    justifyContent: "space-between",
    backgroundColor: "#9CE5F4",
  },
  cardsContent: {
    alignItems: "start",
    justifyContent: "center",
    flexDirection: "column",
    padding: 30,
    letterSpacing: 7,
  },
  header: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
  fig: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#000000",
    lineHeight: 50,
  },
  progressCircle: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    flex: 1,
  },
  arrow: {
    position: "absolute",
    top: 10,
    right: 30,
  },
  arrow1: {
    position: "absolute",
    top: 30,
    right: 30,
  },
});
