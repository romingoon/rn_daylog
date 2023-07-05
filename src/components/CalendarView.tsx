import React from 'react';
import { Calendar } from 'react-native-calendars';
import { View, StyleSheet } from 'react-native';
interface CalendarViewProps {
  markedDates: any;
  selectedDate: any;
  onSelectDate: any;
}

const CalendarView: React.FC<CalendarViewProps> = ({ markedDates, selectedDate, onSelectDate }) => {
  const markedSelectedDate = {
    ...markedDates,
    [selectedDate]: { selected: true, marked: markedDates[selectedDate]?.marked },
  };
  return (
    <Calendar
      style={styles.calendar}
      onDayPress={(day) => onSelectDate(day.dateString)}
      markedDates={markedSelectedDate}
      theme={{
        selectedDayBackgroundColor: '#F43F5E',
        arrowColor: '#F43F5E',
        dotColor: '#F43F5E',
        todayTextColor: '#F43F5E',
      }}
    />
  );
};

const styles = StyleSheet.create({
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default CalendarView;
