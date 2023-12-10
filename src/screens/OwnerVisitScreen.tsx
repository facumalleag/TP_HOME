import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

// Función dummy para obtener visitas (simula llamada a la API)
const getVisitsForDay = async (date: string): Promise<Visit[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simulación de datos dummy
      const visits: Visit[] = [
        { turno: 'mañana', nombre: 'Juan', apellido: 'Pérez', id_propiedad: '001', direccion: 'Calle 123', tipo_transaccion: 'Venta' },
        { turno: 'tarde', nombre: 'María', apellido: 'Gómez', id_propiedad: '002', direccion: 'Avenida 456', tipo_transaccion: 'Alquiler' },
        // Agrega más datos dummy si es necesario
      ];
      resolve(visits);
    }, 1000);
  });
};

interface Visit {
  turno: string;
  nombre: string;
  apellido: string;
  id_propiedad: string;
  direccion: string;
  tipo_transaccion: string;
}

const OwnerVisitScreen = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [visits, setVisits] = useState([]);

  const handleDateChange = async (event: Event, date?: Date) => {
    if (date) {
      setSelectedDate(date);
      const formattedDate = moment(date).format('YYYY-MM-DD');
      const dummyVisits = await getVisitsForDay(formattedDate);
      setVisits(dummyVisits as Visit[]);
    }
    setShowDatePicker(false);
  };

  useEffect(() => {
    // Cargar las visitas del día al montar el componente
    const formattedDate = moment(selectedDate).format('YYYY-MM-DD');
    getVisitsForDay(formattedDate).then((dummyVisits) => {
      setVisits(dummyVisits as Visit[]);
    });
  }, [selectedDate]);

  const renderVisitCard = ({ item }) => {
    return (
      <View style={styles.visitCard}>
        <Text>{item.turno}</Text>
        <Text>{`${item.nombre} ${item.apellido}`}</Text>
        <Text>{`ID Propiedad: ${item.id_propiedad}`}</Text>
        <Text>{`Dirección: ${item.direccion}`}</Text>
        <Text>{`Transacción: ${item.tipo_transaccion}`}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <TouchableOpacity onPress={() => setShowDatePicker(true)}>
          <Text>Seleccionar fecha</Text>
        </TouchableOpacity>
        
        {showDatePicker && (
          <DateTimePicker
            value={selectedDate}
            mode="date"
            display="spinner"
            onChange={handleDateChange}
            style={{ width: 200 }}
          />
        )}
      </View>

      <Text style={styles.title}>{`Agenda del día ${moment(selectedDate).format('DD/MM/YYYY')}`}</Text>

      <FlatList
        data={visits}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderVisitCard}
        ListEmptyComponent={() => (
          <Text style={styles.noVisitsText}>Sin visitas para el día seleccionado</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'transparent',
  },
  datePickerContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#B5CC2B',
  },
  visitCard: {
    borderWidth: 1,
    borderColor: '#B5CC2B',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  noVisitsText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#B5CC2B',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
});

export default OwnerVisitScreen;
