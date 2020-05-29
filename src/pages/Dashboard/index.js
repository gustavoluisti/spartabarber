import React, {useEffect, useState} from 'react';
import api from '../../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Background from '../../components/Background';
import Appointment from '../../components/Appointment';

import {Container, Title, List} from './styles';

export default function Dashboard() {
  const [appointments, setAppointmens] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const response = await api.get('appointments');

      setAppointmens(response.data);
    }
    loadAppointments();
  }, []);

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <Appointment data={item} />}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({tintColor}) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
