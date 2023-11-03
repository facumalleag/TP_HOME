import React from 'react'
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { PropiedadFullDesc, Type } from '../interfaces/propiedadInterfaces';
import { FadeInImage } from './FadeInImage';
import { TouchableOpacity } from 'react-native-gesture-handler';


interface Props {
    propiedad: PropiedadFullDesc
}


export const PropiedadBottomDetail = ({ propiedad }: Props) => {
    return (
        <ScrollView
        showsVerticalScrollIndicator={false}
            style={{
                ...StyleSheet.absoluteFillObject,
            }}>
                

            {/* Types */}
            <View
                style={{
                    ...stylesDet.container,
                    marginTop: 370
                }}>
                <Text
                    style={{
                        ...stylesDet.title
                    }}>Types</Text>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {
                        propiedad.types.map(({ type }) => (
                            <Text
                                key={type.name}
                                style={{
                                    ...stylesDet.regularText,
                                    marginRight: 10,
                                }}
                            >{type.name}
                            </Text>
                        ))
                    }
                </View>
            </View>
            {/* Peso */}
            <View
                style={{
                    ...stylesDet.container,
                }}>
                <Text style={stylesDet.title}>Peso</Text>
                <Text style={stylesDet.regularText}>{propiedad.weight}Kg</Text>
            </View>

            {/* Sprites */}
            <View
                style={{
                    ...stylesDet.container,
                }}>
                <Text style={stylesDet.title}>Sprites</Text>
            </View>

            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                <FadeInImage
                    uri={propiedad.sprites.back_default}
                    style={stylesDet.basicSprite}
                />

                <FadeInImage
                    uri={propiedad.sprites.front_shiny}
                    style={stylesDet.basicSprite}
                />

                <FadeInImage
                    uri={propiedad.sprites.back_shiny}
                    style={stylesDet.basicSprite}
                />

            </ScrollView>

            {/* Habilidades */}

            <View
                style={stylesDet.container}>
                <Text
                    style={{
                        ...stylesDet.title
                    }}>Habilidades Base</Text>
                <View
                    style={{
                        flexDirection: 'row'
                    }}
                >
                    {
                        propiedad.abilities.map(({ ability }) => (
                            <Text
                                key={ability.name}
                                style={{
                                    ...stylesDet.regularText,
                                    marginRight: 10,
                                }}
                            >{ability.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

             {/* Movimientos */}

             <View
                style={stylesDet.container}>
                <Text
                    style={{
                        ...stylesDet.title
                    }}>Movimientos</Text>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap:'wrap',
                       
                    }}
                >
                    {
                        propiedad.moves.map(({ move }) => (
                            <Text
                                key={move.name}
                                style={{
                                    ...stylesDet.regularText,
                                    marginRight: 10,
                                }}
                            >{move.name}
                            </Text>
                        ))
                    }
                </View>
            </View>

             {/* Stats */}

             <View
                style={stylesDet.container}>
                <Text
                    style={{
                        ...stylesDet.title
                    }}>Estados iniciales</Text>
                <View>
                    {
                        propiedad.stats.map((stat, i) => (
                            <View 
                            style={{flexDirection:'row'}}
                            key={stat.stat.name + i}>
                                <Text
                                key={stat.stat.name}
                                style={{
                                    ...stylesDet.regularText,
                                    marginRight: 10,
                                    width:160
                                }}
                            >{stat.stat.name}
                            </Text>

                            <Text
                               
                                style={{
                                    ...stylesDet.regularText,
                                    fontWeight:'bold'
                                }}
                            >{stat.base_stat}
                            </Text>
                            </View>
                        ))
                    }
                </View>

                <View
                style={{marginBottom:20,
                alignItems:'center'}}
                >
                <FadeInImage
                    uri={propiedad.sprites.front_default}
                    style={stylesDet.basicSprite}
                />
</View>
            </View>

        </ScrollView>
    )
}


const stylesDet = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20
    },
    regularText: {
        fontSize: 20
    },
    basicSprite: {
        width: 100,
        height: 100
    }
})