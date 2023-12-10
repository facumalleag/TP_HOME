import React from 'react';
import { View, FlatList, Text, ScrollView, StyleSheet } from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

interface CommentProps {
  name: string;
  rating: number;
  date: string;
  comment: string;

}

const CommentComponent: React.FC<CommentProps> = ({ name, rating, date, comment }) => {
  return (
    <View style={styles.commentContainer}>
      <Text style={styles.name}>{name}</Text>
      <AirbnbRating
        defaultRating={rating}
        isDisabled
        showRating={false}
        size={15} // Ajusta el tamaño según tus preferencias
      />
      <Text style={styles.date}>{date}</Text>
      <Text style={styles.comment}>{comment}</Text>
    </View>
  );
};

interface RatingProps {
  rankingPromedio: number;
  data: CommentProps[];
}



const RatingComponent: React.FC<RatingProps> = ({ rankingPromedio, data }) => {
  return (
    <View style={styles.container}>
      <View style={styles.starsContainer}>
        {data.length > 0 ? (
          <AirbnbRating
            defaultRating={rankingPromedio}
            isDisabled
            showRating={false}
            size={30}
            count={5}
            selectedColor="#FFD700"
          />
        ) : (
          <Text>Aun sin rating ni comentarios</Text>
        )}
      </View>
      {data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <CommentComponent
              name={item.name}
              rating={item.rating}
              date={item.date}
              comment={item.comment}
            />
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#B5CC2B',
    backgroundColor: 'transparent',
    margin: 10,
    //overflow: 'hidden',
  },
  starsContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'transparent',
  },
  commentContainer: {
    borderTopWidth: 2,
    borderColor: '#B5CC2B',
    padding: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  date: {
    alignSelf: 'flex-end',
  },
  comment: {
    marginTop: 10,
  },
});

export default RatingComponent;
