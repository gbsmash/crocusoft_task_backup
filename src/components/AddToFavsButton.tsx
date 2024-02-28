import React from 'react';
import { Pressable } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';



const AddToFavsButton: React.FC<{ onPress: () => void, favorite: boolean, buttonStyles?: {}, iconStyles: {size: number, color: string} }> = ({ onPress, favorite, buttonStyles, iconStyles }) => {
    return (
      <Pressable onPress={onPress} style={buttonStyles}>
        <Ionicon name={favorite ? 'heart' : 'heart-outline'} size={iconStyles?.size} color={iconStyles.color} />
      </Pressable>
    );
};

export default AddToFavsButton;
