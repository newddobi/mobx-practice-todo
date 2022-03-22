import { useContext, useState } from "react";
import { StoreContext } from "@store/StoreProvider";
import { observer } from "mobx-react";
import { useForm } from "react-hook-form";

const Home = observer(() => {
  const store = useContext(StoreContext);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = ({ name }) => {
    store.addBug(name);
    reset();
  };

  return (
    <main>
      <h1>{store.bugsCount} 마리의 벌레를 수집하자</h1>
      <ul>
        {store.bugs.map((bug, index) => (
          <li key={index}>{bug}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <button type="submit">Add</button>
      </form>
    </main>
  );
});

export default Home;
