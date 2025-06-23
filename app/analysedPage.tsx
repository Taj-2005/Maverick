import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

const AnalysedPage = () => {
    const router = useRouter();
    const handleGoBackToHome = () => router.push('/home');
  return (
    <View className="flex-1 bg-gray-50 justify-center items-center p-5">
      <View className="bg-white rounded-2xl p-8 items-center w-[90%] max-w-[400px] shadow-lg mb-8">
        <Text className="text-2xl font-bold mb-6 text-gray-800">Analysis Results</Text>
        <Text className="text-lg mb-2 text-gray-700">Height : 3.2 m</Text>
        <Text className="text-lg mb-2 text-gray-700">Width : 2.4 m</Text>
        <Text className="text-lg mb-10 text-gray-700">Area : 7.68 m²</Text>
      </View>

      <TouchableOpacity onPress={handleGoBackToHome} className="bg-orange-500 py-4 px-10 rounded-lg mt-5 w-[80%] max-w-[300px] items-center">
        <Text className="text-white text-base font-semibold">Go Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnalysedPage;