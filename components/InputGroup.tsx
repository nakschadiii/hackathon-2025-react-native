import { View } from "react-native";
import Separator from "./Separator";
import React from "react";
import tw from "twrnc";

export default ({ style, children }) => {
    const childrenArray = React.Children.toArray(children);
    return <View style={[tw`border border-gray-200 rounded-2xl`, style]}>
        {childrenArray.map((child, index) => {
            return <View key={index}>
                {child}
                {index !== childrenArray.length - 1 && <Separator />}
            </View>
        })}
    </View>
}