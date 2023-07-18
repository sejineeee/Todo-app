import React from 'react';

import { useAppSelector, useAppDispatch } from '../store/hooks';

import { changeTodoContent, addTodoList } from '../store/reducer';

import Input from './common/Input';
import Button from './common/Button';

const TodoForm = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const { content } = useAppSelector((state) => ({
    content: state.content,
  }));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(changeTodoContent(e.target.value));
  };

  const handleClick = (): void => {
    if (!content) {
      return;
    }

    const createdDate = new Date().toLocaleString('ko-KR', {
      timeZone: 'Asia/Seoul',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    dispatch(addTodoList(createdDate));
  };

  return (
    <div>
      <Input
        type="text"
        name="content"
        placeholder="할 일을 입력해주세요"
        onChange={handleChange}
        value={content}
      />
      <Button type="button" content="등록" onClick={handleClick} />
    </div>
  );
};

export default TodoForm;
