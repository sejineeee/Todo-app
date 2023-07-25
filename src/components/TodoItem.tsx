import React from 'react';
import Button from './common/Button';
import { useAppDispatch } from '../store/hooks';
import { deleteTodoItem } from '../store/reducer';

interface TodoItemProps {
  id: number;
  content: string;
  createdDate: string;
}

const TodoItem = ({ id, content, createdDate }: TodoItemProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleClick = (id: number): void => {
    dispatch(deleteTodoItem(id));
  };
  return (
    <div>
      <p>{content}</p>
      <p>{createdDate}</p>
      <Button type="button" content="삭제" onClick={() => handleClick(id)} />
    </div>
  );
};

export default TodoItem;
