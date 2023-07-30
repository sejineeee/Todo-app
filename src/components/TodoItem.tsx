import React, { useState } from 'react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import Button from './common/Button';
import { useAppDispatch } from '../store/hooks';
import { deleteTodoItem } from '../store/reducer';

interface TodoItemProps {
  id: number;
  content: string;
}

const TodoItem = ({ id, content }: TodoItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = (id: number): void => {
    dispatch(deleteTodoItem(id));
  };

  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(new Date());

  return (
    <div>
      <div>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
        />
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
        />
      </div>
      <p>{content}</p>
      <Button type="button" content="삭제" onClick={() => handleClick(id)} />
    </div>
  );
};

export default TodoItem;
