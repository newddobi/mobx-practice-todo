import { useContext, useState } from "react";
import { StoreContext } from "@store/StoreProvider";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";

const Home = observer(() => {
  const store = useContext(StoreContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ memo }) => {
    store.addTodo(memo);
    reset();
  };

  const onChange = ({ target: { value } }) => {
    store.removeTodo(value);
  };

  return (
    <main>
      <h1>{store.todosCount} 개의 할일이 남았습니다.</h1>
      <ul>
        {store.todos.map((todo) => (
          <label key={todo.id}>
            <input
              value={todo.id}
              onChange={onChange}
              type="checkbox"
              checked={todo.isChecked}
            />
            {todo.memo}
            <br />
          </label>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("memo", { required: true })} />
        <button type="submit">Add</button>
        <br />
        {errors.memo && (
          <span style={{ color: "red" }}>This field is required</span>
        )}
      </form>
    </main>
  );
});

export default Home;
