import React from 'react';
import { View, Image, Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Octicon from 'react-native-vector-icons/Octicons';
import { homeStyles } from '../styles/HomeStyle';


const Header: React.FC<{ page: string }> = ({ page }) => {


  return (
    <View style={homeStyles.headerContainer}>
      {page === 'Home' ? (
        <View style={homeStyles.menuIcon}>
          <Ionicon name={'menu'} size={20} color={'white'} />
        </View>
      ) : (
        <Pressable onPress={()=>{}} style={homeStyles.menuIcon}>
          <Octicon name="chevron-left" size={20} color={'#fff'} />
        </Pressable>
      )}

      <View style={homeStyles.imgWrapper}>
        <Image source={require('../assets/images/profile.png')} />
      </View>
    </View>
  );
};

export default Header;
