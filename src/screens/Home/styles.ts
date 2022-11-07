import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  logo: {
    width: 40,
    height: 40,
  },

  textContainer: {
    paddingLeft: 12,
  },

  textAbove: {
    fontFamily: 'sans',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 12,
    color: '#27272A',
  },

  textBelow: {
    fontFamily: 'sans',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 14,
    color: '#27272A',
  },

  carouselContainer: {
    marginTop: 16,
    paddingLeft: 16,
  },

  restaurantFeatures : {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    padding: 16,
    marginTop: 24,
    backgroundColor: '#FFF',
    borderRadius: 8,
  },

  featureBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  restaurantFeaturesTextAbove: {
    fontFamily: 'Inter-Medium',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#27272A",
  },

  restaurantFeaturesTextBelow: {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: "#808089",
  },

  verticalLine: {
    width: 1,
    height: 48,
    backgroundColor: '#EBEBF0',
  },

  reservation : {
    marginTop: 12,
    borderRadius: 8,
    marginHorizontal: 16,
    padding: 16,
    backgroundColor: '#FFF',
  },

  reservationTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  reservationTitleText: {
    fontFamily: 'Inter-Medium',
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    color: "#27272A",
  },

  reservationTitleText2: {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    color: "#808089",
  },

  reservationAction: {
    marginTop: 12,
    flexDirection: 'row',
  },

  reservationButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#1A94FF",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  reservationBtnText: {
    marginLeft: 8,
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: "#1A94FF",
  },

  reservationBtnText2 : {
    fontFamily: 'Inter-Regular',
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 14,
    color: "#1A94FF",
  },

  reservationButton2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#1A94FF",
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  
  productsCard: {
    marginHorizontal: 16,
    marginTop: 24,
    flex: 1,
  },

  productsTitle: {
    marginBottom: 12,
    fontFamily: 'Inter-Bold',
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    color: "#27272A",
  },

  productList: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  }

});
