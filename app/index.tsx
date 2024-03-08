import { router } from 'expo-router'
import { View, Button } from 'tamagui'

export default function index() {
  const goToMatch = () => router.navigate('/match');

  return (
    <View margin="auto">
        <Button size="$6" onPress={goToMatch}>Go to screen</Button>
    </View>
  )
}
