import { View, Text, Image, FlatList, TouchableOpacity, Dimensions, StatusBar } from "react-native";
import { Link } from "expo-router";
import { ArrowRight, Rocket, Play } from "lucide-react-native";
import { useState, useRef } from "react";
import { images } from "@/constants/images";

const { width, height } = Dimensions.get("screen");

const slides = [
  {
    id: 1,
    image: images.slide1,
    title: "Capture & Analyze Property Elements",
    description: "Easily capture images of property features and let our AI provide detailed analysis.",
    bg: "#e4f7d2",
  },
  {
    id: 2,
    image: images.slide2,
    title: "Comprehensive AI-Powered Insights",
    description: "From dimensions to structural integrity, get accurate insights for various property aspects.",
    bg: "#fbd8e0",
  },
  {
    id: 3,
    image: images.slide3,
    title: "Access Your Project Data",
    description: "Sign in to save your analysis reports, track projects, and generate comprehensive summaries.",
    bg: "#f4f4f4",
  },
];

export default function HomeScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<any>>(null);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: currentIndex + 1 });
      }
    }
  };

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  type SlideProps = {
    item: {
      id: number;
      image: any;
      title: string;
      description: string;
      bg: string;
    };
  };

  const Slide = ({ item }: SlideProps) => (
    <View style={{ width, height, flex: 1 }}>
      <Image
        source={item.image}
        style={{ width: '100%', height: '100%', resizeMode: "cover" }}
      />
      <View className="absolute top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4]"
        style={{
          justifyContent: 'flex-end',
          paddingBottom: 150,
          paddingHorizontal: 24,
        }}
      >
        <Text className="text-3xl font-bold text-white text-center mb-2">{item.title}</Text>
        <Text className="text-base text-gray-200 text-center">{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />

      <FlatList
        data={slides}
        renderItem={({ item }) => <Slide item={item} />}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        ref={flatListRef}
        contentContainerStyle={{ height: height }}
      />

      <View className="absolute bottom-10 w-full px-8 flex-row justify-between items-center z-10">
        <View className="flex-row space-x-2">
          {slides.map((_, i) => (
            <View
              key={i}
              className={`w-2.5 h-2.5 rounded-full ${i === currentIndex ? "bg-white" : "bg-gray-400"}`}
            />
          ))}
        </View>

        {currentIndex === slides.length - 1 ? (
          <Link href="/login" asChild>
            <TouchableOpacity className="flex flex-row justify-center gap-2 items-center bg-purple-600 px-4 py-2 rounded">
              <Text className="text-xl font-semibold text-white">Get Started</Text>
              <ArrowRight color="white" size={20} />
            </TouchableOpacity>
          </Link>
        ) : (
          <TouchableOpacity onPress={handleNext} className="bg-purple-500 px-5 py-2 rounded-2xl">
            <ArrowRight color="white" size={24} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}