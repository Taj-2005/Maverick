import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image, Dimensions, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { images } from "@/constants/images";

const { width, height } = Dimensions.get("window");

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    router.push("/home");
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password Pressed");
  };

  const handleSignUp = () => {
    router.push("/signup");
  };

  return (
    <View className="flex-1 bg-gray-900">
      <Image
        source={images.loginbg}
        style={{
          width: width,
          height: height,
          position: 'absolute',
          resizeMode: 'cover',
          opacity: 0.6,
          zIndex: 0,
        }}
      />
      <View
        style={{
          position: 'absolute',
          width: width,
          height: height,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1,
        }}
      />

      <KeyboardAvoidingView
        style={{ flex: 1, zIndex: 2 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}>
          <View className="items-center mb-10">
            <Image
              source={images.aiproperty}
              style={{ width: 120, height: 120, borderRadius: 60, marginTop: 20 }}
            />
          </View>

          <Text className="text-2xl font-semibold mb-8 text-center text-white">
            Sign In to Your Account
          </Text>

          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
            placeholderTextColor="#C0C0C0"
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-4 text-base text-white focus:border-purple-500"
          />

          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#C0C0C0"
            className="bg-gray-800 border border-gray-700 rounded-lg p-4 mb-3 text-base text-white focus:border-purple-500"
          />

          <TouchableOpacity onPress={handleForgotPassword} className="self-end mb-8">
            <Text className="text-purple-400 text-base font-semibold">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            className="bg-purple-600 py-4 rounded-lg shadow-lg"
            style={{ shadowColor: '#6b62ff', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 5 }}
          >
            <Text className="text-white text-center font-bold text-lg">
              Login
            </Text>
          </TouchableOpacity>

          <View className="flex-row justify-center mt-6">
            <Text className="text-gray-400 text-base">Don't have an account? </Text>
            <TouchableOpacity onPress={handleSignUp}>
              <Text className="text-purple-400 text-base font-semibold">Sign Up</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}