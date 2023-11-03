import React, { useState } from 'react'
import { StyleSheet, View, Text, Switch, TouchableOpacity, Alert } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Chip } from 'react-native-paper';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { CheckComodidades } from './CheckComodidades';
import { CustomSwitchMoneda } from './CustomSwitchMoneda';

export const FormAgregarPropiedad = () => {

  const [text, onChangeText] = React.useState('');
  const [state, setState] = useState({
    isPesos: false,
    isUSD: false,
    isEUR: false
  });

  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    })
  }


  return (

    <ScrollView style={{ ...StyleSheet.absoluteFillObject, }}
      keyboardDismissMode='on-drag'
      showsHorizontalScrollIndicator={false}
    >
      <Animatable.View animation="fadeInDownBig" >

        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 20,
          marginBottom: 10

        }}>
          <TouchableOpacity
            style={[
              {
                width: 205,
                height: 40,
                flexShrink: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 10,
                borderWidth: 1,
                padding: 10,
                borderColor: '#099A97',
                borderStyle: 'solid',
              },
              ,
            ]}
            onPress={() => {
              Alert.alert('Left button pressed')
            }}>
            <Text style={{ color: '#6A6A77', textAlign: 'center', }}>
              Ventas
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 205,
              height: 40,
              flexShrink: 0,
              padding: 10,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 10,
              borderBottomRightRadius: 10,
              borderBottomLeftRadius: 0,
              borderWidth: 1,
              borderColor: '#099A97',
              borderStyle: 'solid',
              backgroundColor: '#099A97',
            }}
            onPress={() => Alert.alert('Right button pressed')}

          >
            <Text style={{ color: 'white', textAlign: 'center', }}>
              Alquiler
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{
          ...styles.container,
          width: 350,
        }}>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeText}
            value={text}
            autoCorrect={false}
            placeholder="Direccion"
          ></TextInput>
        </View>
        <View style={{
          ...styles.containerRow,
          width: 180,
          marginLeft: 20
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Numero"
            keyboardType='number-pad'
            autoCorrect={false}
            autoCapitalize='none'
          ></TextInput>

          <View style={{
            ...styles.containerRow,
            width: 150,
            marginHorizontal: 125,
            alignSelf: 'flex-end',
          }}>
            <TextInput
              style={styles.textInputRow}
              onChangeText={onChangeText}
              value={text}
              placeholder="Piso"
              keyboardType='number-pad'
            ></TextInput>
          </View>

        </View>

        <View style={{
          ...styles.containerRow,
          width: 350,
          marginLeft: 20
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Localidad"
          ></TextInput>
        </View>
        <View style={{
          ...styles.container,
          width: 350,

        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Barrio"
          ></TextInput>
        </View>

        <View style={{
          ...styles.container,
          width: 350,
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Provincia"
          ></TextInput>
        </View>
        <View style={{
          ...styles.container,
          width: 350,
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Pais">
          </TextInput>

        </View>
        <View style={styles.containerTitulo}>
          <Text
            style={styles.titulo}
          >Tipo Propiedad</Text>
        </View>

        <ScrollView
          style={styles.containerTitulo}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Casa</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Departamento</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >PH</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Local</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Oficina</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Galpón</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Terreno</Chip>
        </ScrollView>

        <View style={{
          ...styles.container,
          width: 320,

        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={onChangeText}
            value={text}
            placeholder="Antiguedad"
          ></TextInput>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={styles.titulo}
          >Superficies</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Cubierta</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Semicubierta</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Descubierta</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Cantidad Ambientes</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >1</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >2</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >3</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >4</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >5+</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Cantidad de Dormitorios</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >1</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >2</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >3</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >4</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >5+</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Cantidad de Baños</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >1</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >2</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >3+</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Cantidad de Cocheras</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >0</Chip>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >1</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >2</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >3+</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Comodidades</Text>
        </View>
        <View style={styles.checkboxContainer}>
          <CheckComodidades />
        </View>


        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Orientación</Text>
        </View>
        <ScrollView
          style={styles.containerTitulo}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >N</Chip>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >NO</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >O</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >NE</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >E</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >SE</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >S</Chip>
          <Chip
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >SO</Chip>
        </ScrollView>

        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >Frente</Chip>
          <Chip
            selectedColor='#6A6A77'
            // #099A97
            style={styles.chip}
            onPress={() => console.log('Pressed')}
          >ContraFrente</Chip>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Descripción</Text>
        </View>
        <View style={{
          ...styles.containerRow,
          width: 370,
          height: 370,
          marginLeft: 20,
        }}>
          <TextInput
            maxLength={500}

            style={styles.textInputDesc}
            onChangeText={onChangeText}
            value={text}
          ></TextInput>
        </View>

        <View style={{
          ...styles.switchRow,
          marginTop: 20,
        }}>
          <Text style={{ fontSize: 25 }}>U$D</Text>
          <CustomSwitchMoneda isPesos={false}
            onChange={(value) => onChange(value, 'isPesos')}
          />
          <Text style={{ fontSize: 25 }}>$</Text>

          <View style={{
            height: 40,
            marginHorizontal: 50,
            backgroundColor: 'white',
            borderRadius: 25,
            width: 200,
          }}>
            <TextInput
              style={styles.textInputRow}
              onChangeText={onChangeText}
              value={text}
              placeholder="Precio"
              keyboardType='number-pad'
            ></TextInput>
          </View>
        </View>



        <View style={{
          ...styles.switchRow,
          marginTop: 5,
          alignItems: 'center'
        }}>
          <Text style={{ fontSize: 25 }}>U$D</Text>
          <CustomSwitchMoneda isPesos={false}
            onChange={(value) => onChange(value, 'isPesos')}
          />
          <Text style={{ fontSize: 25 }}>$</Text>

          <View style={{
            height: 40,
            marginHorizontal: 50,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 25,
            width: 200,

          }}>
            <TextInput
              style={styles.textInputRow}
              onChangeText={onChangeText}
              value={text}
              placeholder="Expensas"
              keyboardType='number-pad'
            ></TextInput>
          </View>
        </View>

        <TouchableOpacity
        style={[
          {
            width: 205,
            height: 40,
            padding: 10,
            borderRadius:25,
            borderWidth: 1,
            borderColor: '#099A97',
            borderStyle: 'solid',
            backgroundColor: '#099A97',
            alignSelf:'center',
            marginTop:40,
            marginBottom:30
          },
          ,
        ]}
        onPress={() => {
          Alert.alert('Propiedad Creada')
        }}>
        <Text style={{ color: 'white', textAlign: 'center', }}>
          Crear Propiedad
        </Text>
      </TouchableOpacity>


        {/*         <Text style={{ fontSize: 25 }}>
            {JSON.stringify(state,null,5)} 
        </Text> */}
      </Animatable.View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    marginLeft: 10
  },
  chip: {
    borderRadius: 25,
    marginHorizontal: 5,
    backgroundColor: '#FFFFFF',
  },
  textInputRow: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  containerRow: {
    height: 40,
    backgroundColor: 'white',/* #EAEAEA */
    borderRadius: 25,
    flexDirection: 'row',
    marginTop: 10,
  },
  container: {
    height: 40,
    marginHorizontal: 20,
    marginTop: 10,
    backgroundColor: 'white',
    borderRadius: 25,
  },
  textInput: {
    fontSize: 15,
    marginHorizontal: 5,
  },
  titulo: {
    color: '#1F4068',
    fontWeight: 'bold',
    fontSize: 15,
  },
  containerTitulo: {
    marginLeft: 10,
    marginTop: 10
  },
  checkboxContainer: {
    borderRadius: 25,
    backgroundColor: 'white',
    width: 350,
    height: 370,
    marginHorizontal: 10,
    marginTop: 10,/* 
    
    flexDirection: 'row',
    marginHorizontal:10,
    marginTop:10, */
  },
  checkbox: {
    alignSelf: 'center',
  },
  textInputDesc: {
    marginHorizontal: 5,
    alignSelf: 'flex-start',
    fontSize: 15,
  }
});