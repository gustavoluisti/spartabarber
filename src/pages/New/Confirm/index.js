import React from 'react';
import {TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../../components/Background';

// import {Container} from './styles';

export default function Confirm() {
  return <Background />;
}

Confirm.navigationOptions = ({navigation}) => ({
  title: 'Confirmar agendamento',
  headerLeft: () => (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Icon name="chevron-left" size={20} color="#FFF" />
    </TouchableOpacity>
  ),
});
