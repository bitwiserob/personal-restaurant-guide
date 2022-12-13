import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Restaurant = ({
  name,
  rating,
  description,
  url,
  showDetail,
  id,
  navigation,
}) => {
  const showDetailsScreen = (id, navigation) => {
    // To DO
    // get restaurant by id  from backend api
    const restaurant = {
      id: 1,
      name: "resto 1",
      description:
        "italiano restaurant  zfijhldljnavalvb abvlhvajklbav abvlvajkbavlj vaaaaaaf jhesfl hva ",
      rating: 5,
      picture: "../assets/restaurantpic.jpeg",
    };
    // TO DO navigate to detials screen
    // navigation.navigate("Details");
  };
  return (
    <Pressable
      style={({ pressed }) => pressed && styles.pressedItem}
      onPress={() => showDetailsScreen(id, navigation)}
    >
      <View
        style={{
          flexDirection: "row",
          marginVertical: "5%",
          height: "15%",
          width: "100%",
          marginBottom: "5%",
          flex: 1,
        }}
      >
        {/* left */}
        <View
          style={{
            height: "100%",
            width: "30%",
          }}
        >
          <Image
            style={{
              maxWidth: "100%",
              flex: 1,
              borderRadius: "30%",
            }}
            // //   not sure why this doesnt work
            // source={require(url)}
            source={require("../../assets/restaurantpic.jpeg")}
          ></Image>
        </View>
        {/* right */}
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginLeft: "5%",
          }}
        >
          {/* right-top */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.title}>{rating + " stars"}</Text>
          </View>
          {/* right bottom */}
          <Text style={{ flex: 1 }}> {description}</Text>
          <Text></Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
    backgroundColor: "gray",
  },
});
export default Restaurant;
