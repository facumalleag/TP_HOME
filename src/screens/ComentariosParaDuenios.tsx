import React from 'react'
import { View, Text } from 'react-native'
import RatingComponent from '../components/RatingComponent'

export const ComentariosParaDuenios = () => {

  interface CommentProps {
    name: string;
    rating: number;
    date: string;
    comment: string;
  }
  interface RatingProps {
    rankingPromedio: number;
    data: CommentProps[];
  }
  const dummyData: CommentProps[] = [
    {
      name: 'Usuario1',
      rating: 4.5,
      date: '2023-01-15',
      comment: '¡Buena experiencia! El lugar es increíble.',
    },
    {
      name: 'Usuario2',
      rating: 3.2,
      date: '2023-01-14',
      comment: 'Nada mal, pero podría mejorar en algunos aspectos.',
    },
    {
      name: 'Usuario3',
      rating: 5.0,
      date: '2023-01-13',
      comment: '¡Excelente! No tengo quejas en absoluto.',
    },
    {
      name: 'Usuario4',
      rating: 2.8,
      date: '2023-01-12',
      comment: 'No fue una experiencia agradable. No lo recomendaría.',
    },
    {
      name: 'Usuario5',
      rating: 4.5,
      date: '2023-01-15',
      comment: '¡Buena experiencia! El lugar es increíble.',
    },
    {
      name: 'Usuario6',
      rating: 3.2,
      date: '2023-01-14',
      comment: 'Nada mal, pero podría mejorar en algunos aspectos.',
    },
    {
      name: 'Usuario7',
      rating: 4.3,
      date: '2023-01-13',
      comment: '¡Excelente! No tengo quejas en absoluto.',
    },
    {
      name: 'Usuario8',
      rating: 2.8,
      date: '2023-01-12',
      comment: 'No fue una experiencia agradable. No lo recomendaría.',
    },
    
  ];
  
  const dummyRating: RatingProps = {
    rankingPromedio: 3.8,
    data: dummyData,
  };

  return (
    <View>
        <RatingComponent rankingPromedio={dummyRating.rankingPromedio} data={dummyRating.data} />
    </View>
  )
}