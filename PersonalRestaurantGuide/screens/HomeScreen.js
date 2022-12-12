import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from "react-native";
import Restaurant from "./Restaurant/restaurant";

const HomeScreen = () => {
  // To DO
  // get restaurants list from backend api

  const restaurants = [
    {
      id: 1,
      name: "resto 1",
      description:
        "italiano restaurant  zfijhldljnavalvb abvlhvajklbav abvlvajkbavlj vaaaaaaf jhesfl hva ",
      rating: 5,
      picture: "../assets/restaurantpic.jpeg",
    },
    {
      id: 2,
      name: "resto 2",
      description: " french restaurant afesgrddvfesby5u",
      rating: 3,
      picture: "",
    },
    {
      id: 3,
      name: "resto 3",
      description: "dajfeosvffve vfjnonjvfnovfnfes",
      rating: 4,
      picture: "",
    },
  ];

  return (
    <View style={styles.container}>
      {/* <Text> Home Page</Text> */}
      <View>
        <FlatList
          data={restaurants}
          renderItem={(itemData) => {
            return (
              <Restaurant
                name={itemData.item.name}
                rating={itemData.item.rating}
                description={itemData.item.description}
                url={itemData.item.picture}
                // showDetail={showDetailsScreen}
                id={itemData.item.id}
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
