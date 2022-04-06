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
        <div className="flex flex-col items-start py-2 space-y-2 cursor-ponter">
          <h1 className="mb-8 text-lg text-gray-800 font-sm">
            <span className="pr-2 text-xl font-bold text-violet-600">
              {store.todosCount}
            </span>
            개의 할일이 남았습니다. 테스트
          </h1>
          <ul>
            {store.todos.map((todo) => (
              <div key={todo.id} className="flex items-center mb-4">
                <div className="flex mr-2">
                <input
                    className="w-6 h-6 transition border border-gray-300 rounded-md cursor-pointer accent-violet-500 focus:accent-violet-600"
                    value={todo.id}
                    onChange={onChange}
                    type="checkbox"
                    checked={todo.isChecked}
                  />
                </div>
                <label className="font-normal text-gray-700 text-md">
                  {todo.memo}
                </label>
              </div>
            ))}
          </ul>
          <form onSubmit={handleSubmit(onSubmit)} className="space-x-2">
            <input
              className="px-2 py-2 text-gray-800 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-violet-300 font-sm"
              type="text"
              {...register("memo", { required: true })}
            />
            <button
              type="submit"
              className="px-4 py-2 text-white border rounded-md border-violet-700 bg-violet-700 hover:bg-violet-800 hover:border-violet-900"
            >
              Add
            </button>
            {errors.memo && (
              <span className="block mt-2 text-sm text-red-500">
                This field is required
              </span>
            )}
          </form>
        </div>
      </div>
    </main>
  );
});

export default Home;
