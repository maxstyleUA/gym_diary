import React from 'react'
import { Button } from 'react-native'
import {RootStackParamList} from "../Routes";
import {NativeStackScreenProps} from "@react-navigation/native-stack";

type Props = NativeStackScreenProps<RootStackParamList>
const Navigation = ({ navigation }: Props) => {
  return (
    <>
      <Button
        title="Go to Exercises"
        onPress={() => navigation.navigate('Exercises')}
      />
      <Button
        title="Go to Workout"
        onPress={() => navigation.navigate('Workout')}
      />
    </>
  )
}

export default Navigation
