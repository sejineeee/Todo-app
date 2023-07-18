import React from 'react';

import { useAppSelector } from '../store/hooks';

import TodoItem from './TodoItem';

const TodoList = (): JSX.Element => {
  const { todoList } = useAppSelector((state) => ({
    todoList: state.todoList,
  }));

  if (!todoList.length) {
    return <p>아직 할 일이 없어요</p>;
  }
  return (
    <div>
      {todoList.map(({ id, content, createdDate }) => (
        <TodoItem key={id} content={content} createdDate={createdDate} />
      ))}
    </div>
  );
};

export default TodoList;
