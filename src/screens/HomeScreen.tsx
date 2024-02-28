import React from 'react';
import { FlatList } from 'react-native';
import Header from '../components/Header';
import Greeting from '../components/Home/Greeting';
import Search from '../components/Search';
import OfferScrollView from '../components/Home/OfferScrollView';
import NewArrivals from '../components/Home/NewArrivals';
import { offers } from '../data/Offers';
import { newArrivals } from '../data/NewArrivals';
import { homeStyles } from '../styles/HomeStyle';


const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const homeScreenComponents = [
    { key: 'Header', component: <Header page="Home"/> },
    { key: 'Greeting', component: <Greeting /> },
    { key: 'Search', component: <Search /> },
    { key: 'OfferScrollView', component: <OfferScrollView offers={offers} /> },
    { key: 'NewArrivals', component: <NewArrivals newArrivals={newArrivals} />},
  ];

  return (
    <FlatList
      data={homeScreenComponents}
      renderItem={({ item }) => React.cloneElement(item.component, { navigation})}
      keyExtractor={(item) => item.key}
      style={homeStyles.pageContainer}
    />
  );
};

export default HomeScreen;
