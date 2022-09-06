import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import Transactions from "../components/Transactions";
import { AntDesign } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { WP } from "../utils/resources.js";
import globalText from "../styles/globalText.js";


const width = Dimensions.get("screen").width;


export default function Details({ route, navigation }) {
  const { id } = route.params;
  const { name , chartdata} = route.params;

  const [location, setLocation] = useState("");
  const [openDropDown, setOpenDropDown] = useState(false);
  const [chartAmountData, setChartAmountData] = useState();

  useEffect(() => {
    let aarr = [];
      chartdata?.map((itemmm) => {
          let amount = parseFloat(itemmm?.amount);
          aarr.push(amount);
      });
      setChartAmountData(aarr);
  }, []);

  
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={COLORS.brown} />
      <View style={styles.headerContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>{name}</Text>
        <View style={{ width: 30 }}></View>
      </View>

      
        

        {chartAmountData?.length > 0 && <LineChart
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
            datasets: [
              {
                data: chartAmountData,
                strokeWidth: 2,
              },
            ],
          }}
          bezier
          withInnerLines={false}
          width={WP("100%")}
          height={WP("60%")}
          chartConfig={{
            backgroundColor: "#383e42",
            backgroundGradientFrom: "#7F7F7F",
            backgroundGradientTo: "#68AB9F",
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.lineChart}
        />}
      
      
     <View style={{ marginTop:20 }}>
      <Transactions data={chartdata}/>
     </View>
      </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
  },
  headerContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: StatusBar.currentHeight,
    backgroundColor: COLORS.brown,
    width: width,
    padding: WP("5%"),
  },
  lineChart: {
    margin: 10,
    marginBottom:-14,
    borderRadius: WP("5%"),
    alignSelf: "center",
  },
  headerText: {
    fontSize: 22,
    fontFamily: "Normal",
    marginLeft: 20,
  },
  dropDownWrapper: {
   
  },
  dropItems: {
  
    
  },
});
