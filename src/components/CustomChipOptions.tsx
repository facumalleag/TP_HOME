import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Chip } from 'react-native-paper';
import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    title: string
}

export const CustomChipOptions = ({ title }: Props) => {
    
    const [isSelected, setSelected] = useState(false);
    const [form, setForm] = useState({
        valor:''
    });
      

    const onChange = (option: boolean, { title }: Props, field: string) => {
        setSelected(option)
        if (form.valor==title) {
            onChangeValue('',field)
            return;
        }
        onChangeValue(title,field)
    }

 
      const onChangeValue = (value: string, field: string) => {
        setForm({
          ...form,
          [field]: value
        })
      }

    return (
            <Chip
                style={styles.chip}
                onPress={() => onChange(!isSelected, { title }, 'valor')}
                icon={() => (
                    isSelected ?
                        <Icon name="checkmark-outline" size={16} color="blue" />
                        :
                        null
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
