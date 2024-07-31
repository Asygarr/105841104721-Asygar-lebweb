import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import React, { Component } from "react";
import ImageSlider from "react-native-image-slider";

export default class ImageSliderBox extends Component {
  render() {
    const imagesUrls = [];
    for (let i = 36; i <= 55; i++) {
      imagesUrls.push(
        `https://simakad.unismuh.ac.id/upload/mahasiswa/10584110${i}21.jpg`
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.content1}>
          <Text style={styles.contentText}>Kelas B Ini Mah</Text>
        </View>

        <ImageSlider
          loopBothSides
          autoPlayWithInterval={3000}
          images={imagesUrls}
          customSlide={({ index, item, style, width }) => (
            <View key={index} style={[style, styles.customSlide]}>
              <Image source={{ uri: item }} style={styles.customImage} />
            </View>
          )}
          // ini button di bawah image slider
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {imagesUrls.map((image, index) => {
                return (
                  <TouchableHighlight
                    key={index}
                    underlayColor="#ccc"
                    onPress={() => move(index)}
                    style={styles.button}
                  >
                    <Text style={position === index && styles.buttonSelected}>
                      {index + 1}
                    </Text>
                  </TouchableHighlight>
                );
              })}
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF",
  },
  content1: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3366FF",
  },
  contentText: {
    color: "white",
    fontSize: 20,
  },
  customSlide: {
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  customImage: {
    width: 100,
    height: 10000,
  },
  buttons: {
    height: 15,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  button: {
    margin: 3,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#ccc",
    opacity: 0.9,
  },
  buttonSelected: {
    opacity: 1,
    color: "#000",
  },
});
