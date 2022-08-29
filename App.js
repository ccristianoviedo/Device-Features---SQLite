import 'react-native-gesture-handler';
import {useFonts} from "expo-font";
import AppLoading from 'expo-app-loading';
import MainNavigator from "./navigation/Index";
import { Provider } from "react-redux";
import store from './store'
import { init } from './db'

init()
  .then(() => console.log('database initialized'))
  .catch((err) => {
    console.log('database fail connect')
    console.log(err.message)
})

export default function App() { 

  const [loaded] = useFonts({
    UbuntuBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    UbuntuRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
 })

if (!loaded) return <AppLoading/>

return (
  <Provider store={store}>
    <MainNavigator/>
  </Provider>
  )
}