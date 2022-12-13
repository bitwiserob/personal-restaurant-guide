import {
  Image,
  ScrollView,
  StyleSheet,
  Linking,
  Text,
  View,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const ShareScreen = () => {
  onLinkToFacebook = async () => {
    const facebookURL = `https://www.facebook.com/`;
    return Linking.openURL(facebookURL);
  };

  onLinkToInstagram = async () => {
    const instagramURL = `https://www.instagram.com/`;
    return Linking.openURL(instagramURL);
  };

  onLinkToTwitter = async () => {
    const twitterURL = `https://twitter.com/`;
    return Linking.openURL(twitterURL);
  };

  return (
    <View style={styles.box1}>
      <View style={styles.box2}>
        <Image
          source={{
            uri: "https://www.yummymummykitchen.com/wp-content/uploads/2020/05/oranges-citrus-1-725x1088.jpg",
          }}
          style={{ width: 333, height: 270 }}
        />
      </View>
      <View style={styles.box3}>
        <Text style={styles.text4}>Odio</Text>
        <Text style={styles.text5}>
          facilisis mauris sit amet massa vitae tortor condimentum lacinia.
          Donec massa sapien faucibus et molestie ac feugiat.
        </Text>
      </View>
      <View style={styles.box4}>
        <View style={styles.box10}>
          <Text style={styles.text1}>Share Information</Text>
        </View>
        <View style={styles.box9}>
          <FontAwesome.Button
            style={styles.box6}
            name="facebook"
            size={32}
            color="#ffffff"
            onPress={this.onLinkToFacebook}
          />
          <FontAwesome.Button
            style={styles.box7}
            name="instagram"
            size={32}
            color="#ffffff"
            onPress={this.onLinkToInstagram}
          />
          <FontAwesome.Button
            style={styles.box8}
            name="twitter"
            size={32}
            color="#ffffff"
            onPress={this.onLinkToTwitter}
          />
        </View>
      </View>
      <View style={styles.box5}>
        <Text style={styles.text2}>About Us</Text>
        <Text style={styles.text3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box1: {
    flex: 1,
    flexDirection: "column",
  },
  box2: {
    flex: 4,
    backgroundColor: "#ffebec",
    alignItems: "center",
  },
  box3: {
    flex: 2,
    backgroundColor: "#ffebec",
    borderTopColor: "#ead8d8",
    borderTopWidth: 3,
  },
  box4: {
    flex: 3,
  },
  box5: {
    flex: 3,
    backgroundColor: "#ffebec",
    borderTopColor: "#ead8d8",
    borderTopWidth: 3,
  },
  box6: {
    flex: 1,
  },
  box7: {
    flex: 1,
  },
  box8: {
    flex: 1,
  },
  box9: {
    flex: 1,
    backgroundColor: "#ffebec",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopColor: "#ead8d8",
    borderTopWidth: 3,
  },
  box10: {
    backgroundColor: "#ffebec",
    borderTopColor: "#ead8d8",
    borderTopWidth: 3,
  },
  text1: {
    fontSize: 30,
    margin: 20,
  },
  text2: {
    fontSize: 20,
    margin: 20,
    fontWeight: "bold",
  },
  text3: {
    fontSize: 15,
    margin: 20,
  },
  text4: {
    fontSize: 15,
    margin: 10,
  },
  text5: {
    fontSize: 15,
    margin: 10,
  },
});

export default ShareScreen;
