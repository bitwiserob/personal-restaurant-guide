import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import Restaurant from "./Restaurant/restaurant";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = ({ navigation }) => {
  const [restaurantList, setRestaurant] = useState("");

  const getRestaurants = async () => {
    try {
      const res = await fetch(
        "https://personal-guide-restaurant.vercel.app/api/res/restaurants"
      );
      const json = await res.json();
      setRestaurant(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      {/* <Text> Home Page</Text> */}
      <View>
        <FlatList
          data={restaurantList}
          renderItem={(itemData) => {
            return (
              <Restaurant
                name={itemData.item.name}
                rating={itemData.item.rating}
                description={itemData.item.description}
                url={itemData.item.picture}
                navigation={navigation}
              />
            );
          }}
          keyExtractor={(itemData) => itemData._id}
        />
      </View>
      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e8dc",
    padding: "5%",
  },
});
export default HomeScreen;
