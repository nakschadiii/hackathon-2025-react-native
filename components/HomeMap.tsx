import { ScrollView, Text } from "react-native";
import tw from "twrnc";
import { useTheme } from "@/utils/theme";

export default function() {
    const { primary, background } = useTheme();
    return <ScrollView style={[tw`flex-1 bg-${background}`, { zIndex: -99 }]} contentContainerStyle={tw`items-center justify-start flex`}>
        {/*<Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, quis sed? Tenetur veritatis quisquam necessitatibus assumenda omnis ut veniam aliquid earum iure impedit consectetur, laboriosam et deleniti eaque magni corporis!
        </Text>*/}
    </ScrollView>
}