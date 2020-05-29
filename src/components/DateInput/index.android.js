import React, {useMemo} from 'react';
import {View} from 'react-native';
import {format} from 'date-fns';
import pt from 'date-fns/locale/pt';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText} from './styles';

export default function DateInput({date, onChange}) {
  const dateFormatted = useMemo(() => {
    format(date, "dd 'de' MMMM 'de' yyyy", {locale: pt});
  }, [date]);

  function handleOpenPicker() {}

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" color="#FFF" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}
