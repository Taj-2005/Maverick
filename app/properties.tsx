import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  View,
} from 'react-native';
import { useRouter } from 'expo-router';

const images = {
  windows: require('../assets/images/window.jpeg'),
  doors: require('../assets/images/door.jpeg'),
  roof: require('../assets/images/roof.jpeg'),
  walls: require('../assets/images/wall.jpeg'),
  flooring: require('../assets/images/floor.jpeg'),
  furniture: require('../assets/images/furniture.jpeg'),
  lighting: require('../assets/images/lighting.jpeg'),
  plumbing: require('../assets/images/plumbing.jpeg'),
  electrical: require('../assets/images/electrical.jpeg'),
  hvac: require('../assets/images/hvac.jpeg'),
};

const categories = [
  { title: 'Window', imageSource: images.windows, bgColor: 'bg-blue-50' },
  { title: 'Door', imageSource: images.doors, bgColor: 'bg-yellow-50' },
  { title: 'Roof', imageSource: images.roof, bgColor: 'bg-red-50' },
  { title: 'Wall', imageSource: images.walls, bgColor: 'bg-purple-50' },
  { title: 'Flooring', imageSource: images.flooring, bgColor: 'bg-green-50' },
  { title: 'Furniture', imageSource: images.furniture, bgColor: 'bg-pink-50' },
  { title: 'Lighting', imageSource: images.lighting, bgColor: 'bg-indigo-50' },
  { title: 'Plumbing', imageSource: images.plumbing, bgColor: 'bg-teal-50' },
  { title: 'Electrical', imageSource: images.electrical, bgColor: 'bg-orange-50' },
  { title: 'HVAC', imageSource: images.hvac, bgColor: 'bg-cyan-50' },
];

type CategoryCardProps = {
  title: string;
  bgColor: string;
  imageSource?: any;
  onPress?: () => void;
};

const CategoryCard = ({
  title,
  bgColor,
  imageSource,
  onPress,
}: CategoryCardProps) => (
  <TouchableOpacity
    onPress={onPress}
    activeOpacity={0.7}
    className={`flex flex-col justify-center items-center ${bgColor} w-full p-4 rounded-xl shadow-sm`}
    style={{ aspectRatio: 1, margin: 8 }}
  >
    {imageSource && (
      <Image
        source={imageSource}
        className="rounded-2xl"
        style={{ width: 110, height: 110, resizeMode: 'contain' }}
      />
    )}
    <Text className="mt-2 text-base font-semibold text-gray-800 text-center">
      {title}
    </Text>
  </TouchableOpacity>
);

export default function PropertyAnalysisGrid() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={categories}
        numColumns={2}
        keyExtractor={(item) => item.title}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 30 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <View className="w-[48%]">
            <CategoryCard
              title={item.title}
              imageSource={item.imageSource}
              bgColor={item.bgColor}
              onPress={() => router.push('/analysis')}
            />
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}
