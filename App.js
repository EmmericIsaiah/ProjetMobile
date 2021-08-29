import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { shuffle, dict } from './test'
import { useState } from 'react';


//Page d'accueil avec un bouton clickable "Jouer"
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
      <Button
        title="Jouer"
        onPress={() => navigation.navigate('Lettre')}
      />
    </View>
  );
}

//Permet de mélanger les lettres d'un mot du dictionnaire de test.js, 
//et de les afficher individuellement dans des boutons clickables. 
function Lettre({ navigation }){
  //const [count, setCount] = useState(0)
  const melangemot = shuffle(dict.key1.split(""))
  const buttons = melangemot.map((Lettre, index) =>
   <Button title={Lettre} onPress={() => handleClick(Lettre)}/> //handleClick n'est pas défini
   )
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Mot à deviner</Text>
      {buttons}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

//Permet de retourner sur la page précédente
function RegleScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
      <Button
        title="Go to Notifications"
        onPress={() => navigation.navigate('Notifications')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

//Tentative afin d'utiliser un hook d'état afin de permettre de créer plusieurs états dans mon jeu, 
//afin d'obtenir une page initial, et ensuite de gérer dynamiquement les différentes interactions avec l'utilisateur
// function Etat() {
//   const [count, setCount] = useState(0);
//     return (
//       <div>
//         <p>Vous avez cliqué {count} fois</p>
//         <button onClick={() => setCount(count + 1)}>   
//         Cliquez ici
//         </button>
//       </div>
//     );
//   }

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Regle" component={RegleScreen} />
        <Stack.Screen name="Lettre" component={Lettre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//A noter la tentative d'utiliser la librairie NativeBase afin de créer un template. 
//Ceci n'a pas fonctionné car les boutons du jeu n'apparaissait plus.

export default App;
