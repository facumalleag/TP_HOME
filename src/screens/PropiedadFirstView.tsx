import React from 'react'
import { FlatList, ActivityIndicator, View } from 'react-native'
import { usePropiedadPaginated } from '../hooks/usePropiedadPaginated'
import { FadeInImage } from '../components/FadeInImage';
import { PropCard } from '../components/PropCard';

export const PropiedadFirstView = () => {

    const { simplePropList, cargarPropiedades } = usePropiedadPaginated();
    console.log(simplePropList)

    return (
        <>
            <View
                style={{
                    alignItems:'center'
                }}>
                <FlatList
                style={{
                    top:40
                }}
                    data={simplePropList}
                    keyExtractor={(pokemon) => pokemon.id}
                    showsVerticalScrollIndicator={false}
                    numColumns={2}

                    //header
                    /* ListHeaderComponent={(
                        <Text style={{
                            ...listStyle.globalmargin,
                            ...listStyle.card,

                        }}>Propiedades</Text>
                    )
                    } */

                    renderItem={({ item }) => (
                        <PropCard
                            propiedad={item}
                        />
                        /* <FadeInImage
                        //source={{uri: item.picture}}
                        uri={item.picture}
                        style={{
                            width:200,
                            height:200
                        }}
                        /> */
                    )


                    }

                    //infinite scroll
                    onEndReached={cargarPropiedades}
                    onEndReachedThreshold={0.4}

                    //activity indicator
                    ListFooterComponent={
                        <ActivityIndicator
                            style={{ height: 100 }}
                            size={80}
                            color='#099A97'/>
                    }
                />

            </View>
        </>
    )
}