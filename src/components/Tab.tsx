import React from 'react';
import { Text, View } from 'react-native';
import { tabStyles } from '../styles/TabStyle';
import Ionicon from 'react-native-vector-icons/Ionicons';
import FoundationIcon from 'react-native-vector-icons/Foundation';


export const TabIcon: React.FC<{ focused: boolean, title: string }> = ({ focused, title }) => {
    return (
        <View style={focused ? tabStyles.iconWrapper : null}>
            <View style={focused ? [tabStyles.iconCircle,tabStyles.activeIcon] : [tabStyles.iconCircle,tabStyles.inactiveIcon]} >
            {
                title === 'home' ?
                <FoundationIcon
                    style={tabStyles.icon}
                    name={title}
                    size={20}
                    color={focused ? '#ffffff' : '#000000'}
                />
                : <Ionicon
                    style={tabStyles.icon}
                    name={title}
                    size={20}
                    color={focused ? '#ffffff' : '#000000'}
                />
            }
            </View>
        </View>
    );
};


export const TabLabel = ({ focused, title }: { focused: boolean, title: string }) => {
    {
        return (focused ? 
            <View style={tabStyles.labelWrapper}>
                <Text style={tabStyles.tabLabel}>{title}</Text>
            </View>
            : <></>
        );
    }
}
