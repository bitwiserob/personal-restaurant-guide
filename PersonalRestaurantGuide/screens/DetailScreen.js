import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "../app/colors";
import React from "react";

const DetailScreen = ({ description, address, stars }) => {
  // To DO
  // get restaurant by id  from backend api
  const resto = {
    id: 1,
    name: "resto 1",
    description:
      "italiano restaurant  zfijhldljnavalvb abvlhvajklbav abvlvajkbavlj vaaaaaaf jhesfl hva ",
    rating: 5,
    picture: "../assets/restaurantpic.jpeg",
    street: "12345 street west",
    city: "Toronto",
    provinve: "ON",
    postal_code: "l2k 3g5",
  };
  const [isFavorite, setFavorite] = React.useState(false);
  const [isSaved, setSaved] = React.useState(false);

  const Emptystars = () => {
    return (
      <View style={{ flexDirection: "row" }}>
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
      </View>
    );
  };
  const calcStars = () => {
    for (let index = 0; index < resto.rating; index++) {
      element = <Ionicons name="star-outline" size={32} color="green" />;
    }
    return <View></View>;
  };
  return (
    <View style={styles.container}>
      {/* top */}
      <View style={{ flex: 1 }}></View>
      {/* bottom */}
      <View style={{ flex: 1, backgroundColor: "#ffebec" }}>
        {/* fav and save */}
        <View
          style={{ flexDirection: "row", justifyContent: "flex-end", flex: 1 }}
        >
          {isFavorite ? (
            <Pressable onPress={() => setFavorite(false)}>
              <Ionicons name="heart" size={32} color="green" />
            </Pressable>
          ) : (
            <Pressable onPress={() => setFavorite(true)}>
              <Ionicons name="heart-outline" size={32} color="green" />
            </Pressable>
          )}
          {isSaved ? (
            <Pressable onPress={() => setSaved(false)}>
              <Ionicons name="save" size={32} color="green" />
            </Pressable>
          ) : (
            <Pressable onPress={() => setSaved(true)}>
              <Ionicons name="save-outline" size={32} color="green" />
            </Pressable>
          )}
        </View>

        {/* text */}
        <View style={{ flex: 5 }}>
          <Text>{resto.description}</Text>
          <Text>{resto.street}</Text>
          <Text>{resto.city}</Text>
          <Text>{resto.province}</Text>
          <Text>{resto.postal_code}</Text>
        </View>
        <View style={{ flex: 5, justifyContent: "flex-end" }}>
          <Emptystars />
          <TouchableHighlight
            style={[styles.button, { backgroundColor: colors.pink }]}
            activeOpacity={0.6}
            underlayColor="#DDDDDD"
            onPress={() => {
              console.log("submitted");
            }}
          >
            <Text> Submit</Text>
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d6e8dc",
    padding: "5%",
  },
  button: {
    flex: 0.5,
    borderRadius: 20,
    marginVertical: "5%",
    alignItems: "center",
    justifyContent: "center",
  },

  star: {
    marginLeft: "2%",
    fontSize: 50,
    color: "green",
    marginLeft: "5%",
  },
});
export default DetailScreen;
