import React, { ChangeEvent } from "react";
import { LayoutChangeEvent, NativeScrollEvent } from "react-native";
import RN from "../common/react-native";

const images = [
  require("../../assets/Slider.png"),
  require("../../assets/Slider1.png"),
  require("../../assets/Slider2.png"),
]

const WIDTH = RN.Dimensions.get("window").width;
const HEIGHT = RN.Dimensions.get("window").height;



const Carousel = () => {
  const [active, setActive] = React.useState(0);

  const onchange = (nativeEvent: NativeScrollEvent) => {
    if (nativeEvent) {
      const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);
      console.log(slide);
      if (slide !== active) {
        setActive(slide);
      }
    }
  }

  return (
    <RN.View>
      <RN.View style={styles.container}>
        <RN.View style={styles.mainDiv}>
          <RN.ScrollView
            pagingEnabled={false}
            horizontal
            style={styles.imagesDiv}
            onScroll={({ nativeEvent }) => onchange(nativeEvent)}
            showsHorizontalScrollIndicator={false}
          >
            {images.map((e, index) => (
              <RN.Image
                key={index}
                resizeMode="stretch"
                source={e}
                style={styles.wrap}
              />
            ))}
          </RN.ScrollView>
        </RN.View>
      </RN.View>
      <RN.View style={styles.wrapDot}>
        {images.map((e, index) => (
          <RN.View
            key={index}
            style={active === index ? styles.dotActive : styles.dot}
          >

          </RN.View>
        ))}
      </RN.View>
    </RN.View>
  )
};

export default Carousel;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },

  mainDiv: {
    width: "100%",
  },

  imagesDiv: {
    width: "100%",
  },

  wrap: {
    borderRadius: 10,
    marginRight: 8,
  },

  wrapDot: {
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "center",
  },

  dotActive: {
    color: "black",
    margin: 3,
    width: 24,
    height: 2,
    borderRadius: 4,
    backgroundColor: "#1A94FF",
  },

  dot: {
    color: "white",
    margin: 3,
    width: 16,
    height: 2,
    borderRadius: 4,
    backgroundColor: "rgba(0, 0, 0, 0.1);",
  },
});
