import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TodoItem {
  id: number;
  content: string;
  createdDate: string;
}

interface TodoState {
  id: number;
  content: string;
  todoList: Array<TodoItem>;
  createdDate: string | null;
}

const initialState: TodoState = {
  id: 100,
  content: '',
  todoList: [],
  createdDate: null,
};

const reducers = {
  changeTodoContent(state: TodoState, { payload: content }: PayloadAction<string>) {
    return {
      ...state,
      content,
    };
  },
  addTodoList(state: TodoState, { payload: createdDate }: PayloadAction<string>) {
    const { id, content, todoList } = state;
    return {
      ...state,
      id: id + 1,
      content: '',
      todoList: [...todoList, { id, content, createdDate }],
      createdDate: null,
    };
  },
  deleteTodoItem(state: TodoState, { payload: id }: PayloadAction<number>) {
    const { todoList } = state;
    return {
      ...state,
      todoList: todoList.filter((todoItem) => todoItem.id !== id),
    };
  },
};

const { actions, reducer } = createSlice({
  name: 'todoApp',
  initialState,
  reducers,
});

export const { changeTodoContent, addTodoList, deleteTodoItem } = actions;

export default reducer;
