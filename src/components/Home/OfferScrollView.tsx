import React from 'react';
import { Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { offerScrollViewStyles } from '../../styles/OfferScrollViewStyle';
import Offer from '../../types/Offer';


type OfferCardProps = {
  offer: Offer;
};

const OfferCard: React.FC<OfferCardProps> = ({ offer }) => {
  return (
      <ImageBackground
        source={ offer.imgPath }
        style={offerScrollViewStyles.card}
        imageStyle={offerScrollViewStyles.img}
      >
        <Text style={offerScrollViewStyles.offerDiscount}>{offer.discount}% Off</Text>
        <Text style={offerScrollViewStyles.offerDescription}>{offer.description}</Text>
        <Text style={offerScrollViewStyles.offerCode}>With code:{offer.code}</Text>
        <TouchableOpacity style={offerScrollViewStyles.button}>
          <Text style={offerScrollViewStyles.buttonText}>Get Now</Text>
        </TouchableOpacity>
      </ImageBackground>
  );
};


const OfferScrollView: React.FC<{ offers: Offer[] }> = ({ offers }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={offerScrollViewStyles.scrollView}
    >
      {offers.map((offer) => (
        <OfferCard key={offer.id} offer={offer} />
      ))}
    </ScrollView>
  );
};


export default OfferScrollView;
