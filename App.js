import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Todo from "./screens/ToDo";
import Films from "./screens/Films";

const Tab = createBottomTabNavigator();
export default function App() {
  return (
      <NavigationContainer>
          <Tab.Navigator
            screenOptions = {{
                tabBarAllowFontScaling: true,
                tabBarLabelStyle: {
                    fontSize: 22,
                },
                tabBarIcon: () => {
                    return
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            }}
          >
              <Tab.Screen name="toDo" component={Todo} />
              <Tab.Screen name="Films" component={Films} />
          </Tab.Navigator>
      </NavigationContainer>
  );
}

