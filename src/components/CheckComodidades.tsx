import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'


export const CheckComodidades = () => {

const [comodidad, setComodidad]=useState([])
const options=['Terraza','Balcon','Baulera','Quincho','Pileta','Jacuzzi','Sauna','SUM','Sala de Juegos','Otros']

const  pickComodidad=(selectedComodidad:any)=>{
    if(comodidad.includes(selectedComodidad)){
        setComodidad(comodidad.filter(comodidad=>comodidad!==selectedComodidad))
        return;
    }
    setComodidad(comodidad=>comodidad.concat(selectedComodidad))
    onChange('comodidades',selectedComodidad)
}

const [form, setForm] = useState({
    comodidades: ['']
  });



 const onChange = ( field: string,value: string) => {

    setForm({
      ...form,
      [field]:value
    }) 

  } 
 /*  onChangeText={(value) => onChange(value, 'comodidades')} */

  return (
    <View style={styles.options}>
              <Text>{
              JSON.stringify(form, null, 3)
            }
            </Text>
      {
        options.map(option => 
            <View key={option} style={styles.comodidad}>
                <TouchableOpacity 
                onPress={()=>pickComodidad(option)}
                style={styles.checkbox}>
                    {comodidad.includes(option) &&<Text style={styles.check}>X</Text>}
                </TouchableOpacity>
                <Text style={styles.comodidadName}>{option}</Text>
            </View>
        )
      }

    </View>

  )
}

const styles = StyleSheet.create({
    comodidad:{
        flexDirection:'row',
        marginVertical:5,
    },
    checkbox:{
        width:25,
        height:25,
        borderWidth:2,
        borderColor:'gray',
        marginRight:5
    },
    options:{
        marginLeft:20,
        marginTop:5
    },
    check:{
        alignSelf:'center',
        color:'#1F4068',
    },
    comodidadName:{
        textTransform:'capitalize',
        fontSize:16,
        color:'#6A6A77'
    }
    
});