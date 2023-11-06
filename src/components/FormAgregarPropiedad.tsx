import React, { useContext, useState } from 'react'
import { StyleSheet, View, Text, RefreshControl, TouchableOpacity, Alert, ScrollView, Image} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Chip } from 'react-native-paper';
import {  TextInput } from 'react-native-gesture-handler';
import { CheckComodidades } from './CheckComodidades';
import { CustomSwitchMoneda } from './CustomSwitchMoneda';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import { CustomChipOptions } from './CustomChipOptions';
import { AuthContext } from '../context/AuthContext';

//const {authState} = useContext(AuthContext)

export const FormAgregarPropiedad = () => {

 
  const [tempUri,setTempUri]=useState<string>()

//Sacar foto
  const takeFoto=()=>{
    launchCamera({
      mediaType:'photo',
      quality:0.5
    }, (resp)=>{
      if (resp.didCancel) return;
      if(!resp.assets![0].uri) return;

      setTempUri(resp.assets![0].uri)
      console.log(resp)
    });
  }


//Formulario
  const [form, setForm] = useState({
    ownerId:'',
    tipoOperacion:'',
    direccion:'',
    numero:'',
    piso:'',
    localidad:'',
    barrio:'',
    provincia:'',
    pais:'',  
    antiguedad:'',
    fotos:[],
    comodidades:'',
    descripcion:'',
    precio:'',
    expensas:'',
  });
  const onChangeTextInput = (value: string, field: string) => {
    setForm({
      ...form,
      [field]: value
    })

  }


//Switches Pesos y USD
  const [state, setState] = useState({
    isPesos: false,
    isUSD: false,
  });
  const onChange = (value: boolean, field: keyof typeof state) => {
    setState({
      ...state,
      [field]: value
    })
  }



//Pull to Refresh 
  const [data, setData]=useState<string>()
  const [refreshing, setrefreshing] = useState(false);
  const onRefresh=()=>{
    setrefreshing(true)
    setTimeout(() => {
      console.log('Refresed')
      setrefreshing(false)
      setData('Hola Mundo')
      
    }, 2000);

  }

 


  return (

    <ScrollView
      keyboardDismissMode='on-drag'
      showsHorizontalScrollIndicator={false}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={150}
          progressBackgroundColor="#099A97"
          colors={['white','#1F4068']}
        />
      }
    >
             {/*    <View>
            {
              data && <Text>La data Existe!!!!</Text>
            }
          </View> */}
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
            onPress={() => onChangeTextInput('venta', 'tipoOperacion')}>
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
            onPress={() => onChangeTextInput('alquiler', 'tipoOperacion')}>
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
            onChangeText={(value) => onChangeTextInput(value, 'direccion')}
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
            onChangeText={(value) => onChangeTextInput(value, 'numero')}
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
              onChangeText={(value) => onChangeTextInput(value, 'piso')}
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
            onChangeText={(value) => onChangeTextInput(value, 'localidad')}
            placeholder="Localidad"
          ></TextInput>
        </View>
        <View style={{
          ...styles.container,
          width: 350,

        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={(value) => onChangeTextInput(value, 'barrio')}
            placeholder="Barrio"
          ></TextInput>
        </View>

        <View style={{
          ...styles.container,
          width: 350,
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={(value) => onChangeTextInput(value, 'provincia')}
            placeholder="Provincia"
          ></TextInput>
        </View>
        <View style={{
          ...styles.container,
          width: 350,
        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={(value) => onChangeTextInput(value, 'pais')}
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
          <CustomChipOptions title='Casa'/>
          <CustomChipOptions title='Departamento'/>
          <CustomChipOptions title='PH'/>
          <CustomChipOptions title='Local'/>
          <CustomChipOptions title='Oficina'/>
          <CustomChipOptions title='Galpón'/>
          <CustomChipOptions title='Terreno'/>
        </ScrollView>

        <View style={{
          ...styles.container,
          width: 320,

        }}>
          <TextInput
            style={styles.textInputRow}
            onChangeText={(value) => onChangeTextInput(value, 'antiguedad')}
            placeholder="Antiguedad"
          ></TextInput>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={styles.titulo}
          >Superficie (m²)</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
           <CustomChipOptions title='Cubierta'/>
           <CustomChipOptions title='Semicubierta'/>
           <CustomChipOptions title='Descubierta'/>
          
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
          <CustomChipOptions title='1'/>
          <CustomChipOptions title='2'/>
          <CustomChipOptions title='3'/>
          <CustomChipOptions title='4'/>
          <CustomChipOptions title='5+'/>
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
          <CustomChipOptions title='1'/>
          <CustomChipOptions title='2'/>
          <CustomChipOptions title='3'/>
          <CustomChipOptions title='4'/>
          <CustomChipOptions title='5+'/>
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
          <CustomChipOptions title='1'/>
          <CustomChipOptions title='2'/>
          <CustomChipOptions title='3+'/>
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
           <CustomChipOptions title='0'/>
          <CustomChipOptions title='1'/>
          <CustomChipOptions title='2'/>
          <CustomChipOptions title='3+'/>
        </View>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Fotografias</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 5,
        }}>
          <ScrollView
            style={styles.containerTitulo}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          >
            <Chip
              selectedColor='#6A6A77'
              style={{
                borderRadius: 25,
                marginHorizontal: 5,
                backgroundColor: '#FFFFFF',
                borderColor: '#099A97',
                borderWidth: 2
              }}
              onPress={takeFoto}
            >Seleccionar Fotos</Chip>
          </ScrollView>
        </View>
        {
                (tempUri) && (
                  <Image
                    source={{ uri: tempUri }}
                    style={{
                      width: '80%',
                      height: 200,
                      marginTop: 10,
                      marginLeft:10
                    }}
                    onLoadEnd={() => onChangeTextInput(tempUri, 'fotografias')}
                  />
                )
                }
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
           <CustomChipOptions title='N'/>
           <CustomChipOptions title='NO'/>
           <CustomChipOptions title='O'/>
           <CustomChipOptions title='NE'/>
           <CustomChipOptions title='E'/>
           <CustomChipOptions title='SE'/>
           <CustomChipOptions title='S'/>
           <CustomChipOptions title='SO'/>
        </ScrollView>

        <View style={styles.containerTitulo}>
          <Text
            style={{
              ...styles.titulo,
            }}
          >Sentido</Text>
        </View>

        <View style={{
          flexDirection: 'row',
          marginTop: 10,
        }}>
          <CustomChipOptions title='Frente'/>
           <CustomChipOptions title='ContraFrente'/>
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
          marginLeft: 10,
        }}>
          <TextInput
            maxLength={500}
            style={styles.textInputDesc}
            onChangeText={(value) => onChangeTextInput(value, 'descripcion')}
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
              onChangeText={(value) => onChangeTextInput(value, 'precio')}
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
          {/* <Text style={{ fontSize: 25 }}>U$D</Text>
          <CustomSwitchMoneda isPesos={false}
            onChange={(value) => onChange(value, 'isPesos')}
          />
          <Text style={{ fontSize: 25 }}>$</Text> */}

          <View style={{
            height: 40,
            marginHorizontal: 160,
            marginTop: 10,
            backgroundColor: 'white',
            borderRadius: 25,
            width: 200,

          }}>
            <TextInput
              style={styles.textInputRow}
              onChangeText={(value) => onChangeTextInput(value, 'expensas')}
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
            marginBottom:30,
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
               <Text style={{ fontSize: 25 }}>
            {JSON.stringify(form,null,5)} 
        </Text> 
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