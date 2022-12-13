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
import { useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
  // const navigation = useNavigation();
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
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
        <AntDesign style={styles.star} name="staro" />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={{ flex: 1 }}>
        <Image
          source={{
            uri: "https://www.yummymummykitchen.com/wp-content/uploads/2020/05/oranges-citrus-1-725x1088.jpg",
          }}
          style={{ flex: 1, borderRadius: 30 }}
        />
      </View>
      {/* bottom */}
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffebec",
          borderRadius: 30,
          padding: 10,
        }}
      >
        {/* fav and save and share */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-end",
            flex: 1,
          }}
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

          <Pressable
            onPress={() =>
              console.log("  pressed sharing from details  screen")
            }
          >
            <AntDesign size={32} name="sharealt" color="green" />
          </Pressable>
        </View>

        {/* text */}
        <View style={{ flex: 5 }}>
          <Text>{resto.description}</Text>
          <Text>{resto.street}</Text>
          <Text>{resto.city}</Text>
          <Text>{resto.province}</Text>
          <Text>{resto.postal_code}</Text>
        </View>
        <View style={{ flex: 5 }}>
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
    padding: 15,
  },
  button: {
    flex: 0.5,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  star: {
    fontSize: 50,
    color: "green",
    marginLeft: 15,
  },
});
export default DetailScreen;
