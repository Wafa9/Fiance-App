import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { COLORS, SIZES, FONTS } from "../styles/theme.js";
import Category from "../components/Category.js";
import CategorySlider from "../components/CategorySlider";
import Transactions from "../components/Transactions";
import globalText from "../styles/globalText";
import globalStyles from "../styles/globalElements";
import axios from "axios";
import axiosInstance from "../helpers/axiosInterceptor.js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Home = ({ navigation }) => {
  const [ChartData, setChartData] = useState([]);
  const [BalanceData, setBalanceData] = useState([]);
  const [ExpensesData, setExpensesData] = useState([]);
  const [SavingsData, setSavingsData] = useState([]);
  const [IncomeData, setIncomeData] = useState([]);
  const [LoansData, setLoansData] = useState([]);
  const [user, setUser] = useState();

  const getUser = async () => {
    try {
      const data = await AsyncStorage.getItem("username");
      if (data !== null) {
        setUser(data);
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };

  getUser();

  const getData = () => {
    axiosInstance
      .get("transactions/")
      .then(function (response) {
        // handle success
        console.log(response);
        setChartData(response.data);
        let data = response.data;
        let balance = data?.filter((vl) => {
          return vl?.type == "BALANCE";
        });

        setBalanceData(balance);

        let savings = data?.filter((vl) => {
          return vl?.type == "SAVING";
        });

        setSavingsData(savings);

        let loans = data?.filter((vl) => {
          return vl?.type == "LOANS";
        });
        setLoansData(loans);

        let income = data?.filter((vl) => {
          return vl?.type == "INCOME";
        });
        setIncomeData(income);

        let expenses = data?.filter((vl) => {
          return vl?.type == "EXPENSES";
        });

        setExpensesData(expenses);
      })
      .catch(function (error) {
        // handle error
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("Chart Data", ChartData);

  function renderHeader() {
    return (
      <View style={globalStyles.homeHeader}>
        <View style={{ flex: 1 }}>
          <Text style={{ ...globalText.h1 }}>Hello , {user}</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
      {/* HEADER */}
      {renderHeader()}

      {/* Content */}
      <View style={{ height: 130, marginTop: SIZES.margin }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Category
            name="Balance"
            title="money-check-alt"
            style={COLORS.brown}
            onPress={() => {
              navigation.navigate("Details", {
                id: 1,
                name: "Balance",
                chartdata: BalanceData,
              });
            }}
          />
          <Category
            name="Saving"
            title="donate"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", {
                id: 2,
                name: "Saving",
                chartdata: SavingsData,
              });
            }}
          />
          <Category
            name="Income"
            title="money-bill-wave"
            style={COLORS.green}
            onPress={() => {
              navigation.navigate("Details", {
                id: 3,
                name: "Income",
                chartdata: IncomeData,
              });
            }}
          />
          <Category
            name="Loans"
            title="warehouse"
            style={COLORS.gray}
            onPress={() => {
              navigation.navigate("Details", {
                id: 4,
                name: "Loans",
                chartdata: LoansData,
              });
            }}
          />
          <Category
            name="Expenses"
            title="star"
            style={COLORS.pink}
            onPress={() => {
              navigation.navigate("Details", {
                id: 5,
                name: "Expenses",
                chartdata: ExpensesData,
              });
            }}
          />
        </ScrollView>
      </View>
      <CategorySlider />
      {/* Transactions */}

      <Transactions data={ChartData} />
    </View>
  );
};

export default Home;
