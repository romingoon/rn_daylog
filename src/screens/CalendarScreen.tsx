import React, { useContext, useState, useMemo } from 'react';
import { format } from 'date-fns';
import CalendarView from '../components/CalendarView';
import LogContext, { LogContextType } from '../contexts/LogContext';
import FeedList from '../components/FeedList';

const CalendarScreen = () => {
  const { logs } = useContext<LogContextType>(LogContext);
  const [selectedDate, setSelectedDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const filteredLogs = logs.filter((log) => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate);

  const markedDates = useMemo(
    () =>
      logs.reduce((acc: any, log: any) => {
        const formattedDate = format(new Date(log.date), 'yyyy-MM-dd');
        acc[formattedDate] = { marked: true };
        return acc;
      }, {}),
    [logs]
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView markedDates={markedDates} selectedDate={selectedDate} onSelectDate={setSelectedDate} />
      }
    />
  );
};

export default CalendarScreen;
