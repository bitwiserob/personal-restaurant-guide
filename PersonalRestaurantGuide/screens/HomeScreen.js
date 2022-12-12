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

const HomeScreen = () => {
  const [restaurantList, setRestaurant] = useState("")
  
  const getRestaurants = async () => {
    try{
      const res = await fetch('http://localhost:8081/api/res/restaurants')
      const json = await res.json();
      setRestaurant(json)
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getRestaurants();
  }, [])

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
              />
            );
          }}
          keyExtractor={(itemData) => itemData.id}
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
