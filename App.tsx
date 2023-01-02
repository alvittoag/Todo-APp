import { View, FlatList } from "react-native";
import { db } from "./db/db";
import Header from "./components/Header";
import List from "./components/List";
import InputTodo from "./components/InputTodo";
import { useState } from "react";

type Edit = {
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const App = () => {
  const [todo, setTodo] = useState(db);
  const [input, setInput] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = (id: string, todos: string) => {
    if (isEdit) {
      alert("Selesaikan Edit Terlebih Dahulu");
    } else {
      setTodo(todo.filter((tod) => tod.id !== id));
      setInput(todos);
      setIsEdit(true);
    }
  };

  return (
    <View
      style={{
        marginTop: 40,
        paddingHorizontal: 10,
      }}
    >
      <FlatList
        data={todo}
        renderItem={({ item }) => (
          <List item={item} setTodo={setTodo} handleEdit={handleEdit} />
        )}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Header />
            <InputTodo
              setIsEdit={setIsEdit}
              setTodo={setTodo}
              input={input}
              setInput={setInput}
            />
          </>
        }
      />
    </View>
  );
};

export default App;
