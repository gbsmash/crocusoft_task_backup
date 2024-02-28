import React from 'react';
import { Pressable, Text } from 'react-native';
import { Icon } from 'react-native-vector-icons/Icon';


const CustomButton :React.FC<{type : string, content: string}> = ({type, content}) => {
    return (
        <Pressable>
            {
                type === 'icon' ?
                <Icon name={content} size={20} color="white" />
                : <Text>{content}</Text>
            }
        </Pressable>
    );
};


export default CustomButton;
