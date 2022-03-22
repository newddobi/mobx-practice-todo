import { createContext } from "react";
import { useLocalObservable } from "mobx-react";
import { nanoid } from "nanoid";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  const store = useLocalObservable(() => ({
    todos: [],
    addTodo: (memo) => {
      store.todos.push({
        memo,
        id: nanoid(),
        isChecked: false,
      });
    },
    removeTodo: (id) => {
      const index = store.todos.findIndex((todo) => todo.id === id);
      store.todos[index].isChecked = !store.todos[index].isChecked;
    },
    get todosCount() {
      return store.todos.filter((todo) => todo.isChecked === false).length;
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
