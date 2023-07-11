import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { Home } from '../pages/home';
import { Favorite } from '../pages/favorite';

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#FFF',
                tabBarInactiveTintColor:'#fff',

                tabBarStyle:{
                    backgroundColor: '#2E3D5A',
                    borderTopWidth: 2,
                    borderTopColor: '#EC3236'
                }
            }}
        >
            <Tab.Screen 
                name='Home' 
                component={Home}
                options={{
                    tabBarIcon:({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='home' color={color} size={size} />
                        }
                            return <Ionicons name='home-outline' color={color} size={size} />
                    }
                }} 
            />

            <Tab.Screen 
                name='Favorite' 
                component={Favorite} 
                options={{
                    tabBarIcon:({ color, size, focused }) => {
                        if(focused){
                            return <Ionicons name='heart' color='#EC3236' size={size} />
                        }
                            return <Ionicons name='heart-outline' color={color} size={size} />
                    }
                }}             
            />
        </Tab.Navigator>
    )
}