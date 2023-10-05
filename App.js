import { View, Text, TextInput, StyleSheet, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>
      <Image
      style={styles.login}
      source={require('./assets/database1.png')}/>
      </View>
      <Text style={styles.texto}> Nome categoria </Text>

      {/*} Campo de nome{*/}
      <View style={styles.containerTextInput}>
        <Ionicons 
          name='text-outline' 
          size={25}
          marginLeft={5}
        />
        <TextInput 
          style={styles.textInput} 
          placeholder=''
        />
      </View>

      <Text style={styles.texto}> Observações categoria</Text>

      {/*} Campo de observações{*/}
      <View style={styles.containerTextInput}>
        <TextInput 
          style={styles.textInput} 
          multiline 
          placeholder=''
        />
      </View>

      {/*} Botao de cadastro{*/}

      <TouchableOpacity style={styles.btcadastro}>
        <Text style={styles.txtLogin}>CADASTRAR</Text>
      </TouchableOpacity>

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },

  topo: {
    alignItems: "center"
  },

  login: {
    width: 350,
  },

  texto: {
    color: '#333',
    marginTop: 10,
    fontWeight: '500',
    fontSize: 24
  },

  containerTextInput: {
    borderColor: '#000',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10,
    borderRadius:5,
    borderBottomLeftRadius:20,
    borderTopRightRadius:20
  },

  textInput: {
    padding: 10,
  },

  btcadastro: {
    backgroundColor: '#AB96F3',
    borderRadius: 20,
    marginBottom: 30,
    padding: 20,
    fontSize: 15,
    marginTop: 30
  },

  txtLogin: {
    textAlign: 'center',
    fontWeight: '700',
    color: ''
  },


});