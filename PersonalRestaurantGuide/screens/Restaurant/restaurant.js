import { Image, StyleSheet, Text, View } from "react-native";

const Restaurant = ({ name, rating, description, image }) => {
  return (
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
          //   not sure why this doesnt work
          //   source={require(image)}
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
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.title}>{rating + " stars"}</Text>
        </View>
        {/* right bottom */}
        <Text style={{ flex: 1 }}> {description}</Text>
        <Text></Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: "700",
    fontSize: 16,
  },
});
export default Restaurant;
