import { useContext, useState } from "react";
import { StoreContext } from "@store/StoreProvider";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";
import type { NextPage } from "next";

const Home: NextPage = observer(() => {
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
      <div className="flex items-center justify-center my-16">
        <div className="flex flex-col items-start py-2 space-y-4 divide-y-2 cursor-ponter">
          <h1>{store.todosCount} 개의 할일이 남았습니다.</h1>
          <ul>
            {store.todos.map((todo) => (
              <div key={todo.id} className="pt-4 space-x-2">
                <label className="text-blue-600 text-md fomt-medium">
                  <input
                    className="w-6 h-6 transition border-2 border-blue-400 rounded-md focus:ring-0"
                    value={todo.id}
                    onChange={onChange}
                    type="checkbox"
                    checked={todo.isChecked}
                  />
                  {todo.memo}
                  <br />
                </label>
              </div>
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
        </div>
      </div>
    </main>
  );
});

export default Home;
