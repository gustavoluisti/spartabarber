import React, {useMemo} from 'react';
import {DatePickerAndroid, Alert} from 'react-native';
import PropTypes from 'prop-types';
import {format} from 'date-fns';
import en from 'date-fns/locale/en-US';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, DateButton, DateText} from './styles';

export default function DateInput({date, onChange}) {
  const dateFormatted = useMemo(
    () => format(date, "MMMM do',' yyyy", {locale: en}),
    [date],
  );

  async function handleOpenPicker() {
    try {
      const {action, year, month, day} = await DatePickerAndroid.open({
        mode: 'spinner',
        date,
        minDate: new Date(),
      });

      if (action === DatePickerAndroid.dateSetAction) {
        const selectedDate = new Date(year, month, day);

        onChange(selectedDate);
      }
    } catch ({code, message}) {
      Alert.alert('Cannot open date picker', message);
    }
  }

  return (
    <Container>
      <DateButton onPress={handleOpenPicker}>
        <Icon name="event" size={20} color="#fff" />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
    </Container>
  );
}

DateInput.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  onChange: PropTypes.func.isRequired,
};
