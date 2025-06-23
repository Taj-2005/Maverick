import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import { useEffect } from 'react'
import { useRouter } from 'expo-router'

const analysis = () => {
    const router = useRouter()
    useEffect(() => {
        setTimeout(() => router.push('/analysedPage'), 3000)
    }, [])
  return (
    <View className='flex flex-col justify-center items-center min-h-screen'>
        <Image
            source={require('@/assets/images/analysis.png')}
            className='w-50 h-50 mb-4'
            resizeMode='contain'
         />
        <Text className="text-center text-base text-gray-500">Analysing...</Text>
    </View>
  )
}

export default analysis

const styles = StyleSheet.create({})