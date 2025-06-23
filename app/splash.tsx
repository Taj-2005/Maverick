import { images } from '@/constants/images';
import React from 'react';
import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';

export default function HomeScreenForAIApp() {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeArea} className="flex-1 bg-gray-50">
        <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
        <ScrollView className="flex-1">
          <View className="flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-100 shadow-sm">
            <View className="flex-row pt-6 items-center">
              <Text className="text-xl font-bold text-gray-800">Project Location,</Text>
              <Text className="text-xl font-bold ml-2 text-purple-600">Site A</Text>
              <Icon name="chevron-down" type="font-awesome-5" size={16} color="#6B7280" style={{ marginLeft: 6 }} />
            </View>
            <TouchableOpacity className="p-3 rounded-full bg-purple-50">
              <Icon name="bell" type="font-awesome-5" size={20} color="#6B7280" solid />
            </TouchableOpacity>
          </View>

          <View className="px-6 mt-6">
            <Text className="text-3xl font-extrabold text-gray-900 leading-tight">Analyze your property</Text>
            <Text className="text-3xl font-extrabold text-purple-700 leading-tight">elements today</Text>

            <View className="relative flex flex-row justify-center items-center mt-6 rounded-2xl overflow-hidden shadow-lg" style={{ aspectRatio: 16 / 9 }}>
              <Image
                source={images.aiproperty}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>

          <View className="flex-row items-center bg-white rounded-xl mx-6 mt-8 p-4 shadow-md border border-gray-200">
            <Icon name="search" type="font-awesome-5" size={20} color="#6B7280" />
            <TextInput
              placeholder="Search for 'building plans' or 'roof analysis'"
              className="flex-1 ml-3 text-base text-gray-700"
              placeholderTextColor="#9CA3AF"
            />
            <TouchableOpacity className="p-3 rounded-xl bg-purple-600 ml-3 shadow-sm">
              <Icon name="sliders-h" type="font-awesome-5" size={20} color="white" />
            </TouchableOpacity>
          </View>

          <View className="mt-8 px-6">
            <View className="flex-row items-center justify-between mb-5">
              <Text className="text-2xl font-bold text-gray-900">Analysis Types</Text>
              <TouchableOpacity>
                <Text className="text-purple-600 text-base font-semibold">View All</Text>
              </TouchableOpacity>
            </View>

            <View className="flex-row flex-wrap justify-between">
              <CategoryCard
                iconName="ruler-combined"
                iconType="font-awesome-5"
                iconColor="#F59E0B"
                bgColor="bg-yellow-50"
                title="Dimensions"
              />
              <CategoryCard
                iconName="tree"
                iconType="font-awesome-5"
                iconColor="#A855F7"
                bgColor="bg-purple-50"
                title="Landscape"
              />
              <CategoryCard
                iconName="warehouse"
                iconType="font-awesome-5"
                iconColor="#EC4899"
                bgColor="bg-pink-50"
                title="Structural"
              />
              <CategoryCard
                iconName="solar-panel"
                iconType="font-awesome-5"
                iconColor="#EF4444"
                bgColor="bg-red-50"
                title="Energy"
              />
              <CategoryCard
                iconName="water"
                iconType="font-awesome-5"
                iconColor="#3B82F6"
                bgColor="bg-blue-50"
                title="Water Systems"
              />
              <CategoryCard
                iconName="clipboard-list"
                iconType="font-awesome-5"
                iconColor="#10B981"
                bgColor="bg-green-50"
                title="Compliance"
              />
            </View>
          </View>
          <View style={{ height: 20 }} />
        </ScrollView>

        <View className="flex-row justify-around items-center bg-white border-t border-gray-100 py-3 px-4 shadow-xl">
          <NavItem iconName="home" iconType="font-awesome-5" text="Home" isActive={true} />
          <NavItem iconName="chart-bar" iconType="font-awesome-5" text="Reports" isActive={false} />
          <NavItem iconName="camera-retro" iconType="font-awesome-5" text="Capture" isActive={false} />
          <NavItem iconName="user-circle" iconType="font-awesome-5" text="Profile" isActive={false} />
        </View>
      </SafeAreaView>
    </React.Fragment>
  );
}

type CategoryCardProps = {
  iconName: string;
  iconType: string;
  iconColor: string;
  bgColor: string;
  title: string;
};

const CategoryCard = ({ iconName, iconType, iconColor, bgColor, title }: CategoryCardProps) => (
  <TouchableOpacity
    className={`w-[48%] ${bgColor} p-4 rounded-xl mb-4 items-center justify-center shadow-sm`}
    style={{ aspectRatio: 1 }}
  >
    <Icon name={iconName} type={iconType} size={36} color={iconColor} />
    <Text className="mt-3 text-lg font-semibold text-gray-800 text-center">{title}</Text>
  </TouchableOpacity>
);

type NavItemProps = {
  iconName: string;
  iconType: string;
  text: string;
  isActive: boolean;
};

const NavItem = ({ iconName, iconType, text, isActive }: NavItemProps) => (
  <TouchableOpacity className="flex-1 items-center justify-center p-2">
    <Icon
      name={iconName}
      type={iconType}
      size={24}
      color={isActive ? "#8B5CF6" : "#6B7280"}
      solid={isActive}
    />
    <Text className={`text-xs mt-1 ${isActive ? "text-purple-600 font-semibold" : "text-gray-600"}`}>
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#f8f8f8',
  },
});