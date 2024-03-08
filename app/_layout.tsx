import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { Slot, SplashScreen, Stack, router } from 'expo-router'
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native'
import { TamaguiProvider, Button, View } from 'tamagui'
import '../tamagui-web.css'
import { config } from '../tamagui.config'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
export { ErrorBoundary } from 'expo-router'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [interLoaded, interError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  useEffect(() => {
    if (interLoaded || interError) {
      SplashScreen.hideAsync()
    }
  }, [interLoaded, interError])

  if (!interLoaded && !interError) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <SafeAreaProvider>
      <TamaguiProvider config={config} defaultTheme={colorScheme as any}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Slot />
        </ThemeProvider>
      </TamaguiProvider>
    </SafeAreaProvider>
  )
}
