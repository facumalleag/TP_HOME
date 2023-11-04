import React from 'react'
import { StyleSheet } from 'react-native';
import { Chip } from 'react-native-paper';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string
}

export const CustomChipOptions = ({ title }: Props) => {
   /*  const [isSelected, setSelected] = useState(false);
    
      const onChange = (option:boolean) => {
       setSelected({
        option
      } )
      }  */

    return (
        <Chip selected={true}

            style={styles.chip}
            onPress={() => null}
            icon={(selected) => (
                selected?
                <Icon name="checkmark-outline" size={16} color="red" />
                :
                <Icon name="bug-outline" size={16} color="red" />
            )}
        >{title}</Chip>
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
})
