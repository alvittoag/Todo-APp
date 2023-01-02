import { View, Text, Alert } from "react-native";
import { todoList } from "../Model";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";
import { useState } from "react";

type itemAndProps = {
  item: todoList;
  setTodo: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        todo: string;
      }[]
    >
  >;
  handleEdit: (id: string, todos: string) => void;
};

const List = ({ item: data, setTodo, handleEdit }: itemAndProps) => {
  const [done, setDone] = useState<boolean>(false);

  const handleDone = (id: string) => {
    if (id && data.id) setDone((curr) => !curr);
  };

  const handleDelete = (id: string) => {
    Alert.alert("Hapus Todo", "Yakin Ingin Menghapus Todo Anda", [
      {
        text: "Cancel",
      },
      {
        text: "Ok",
        onPress: () =>
          setTodo((todoList) => todoList.filter((list) => list.id !== id)),
      },
    ]);
  };
  return (
    <View
      style={{
        backgroundColor: "#FF2E63",
        marginHorizontal: 3,
        borderRadius: 3,
        paddingHorizontal: 6,
        paddingVertical: 14,
        margin: 8,
      }}
    >
      {done ? (
        <Text
          style={{
            color: "white",
            fontSize: 22,
            textDecorationLine: "line-through",
          }}
        >
          {data.todo}
        </Text>
      ) : (
        <Text style={{ color: "white", fontSize: 22 }}>{data.todo}</Text>
      )}

      <View
        style={{
          marginTop: 20,
          flexDirection: "row",
        }}
      >
        <Ionicons
          style={{ marginRight: 10 }}
          name="md-checkmark-circle"
          size={32}
          color="white"
          onPress={() => handleDone(data.id)}
        />
        <AntDesign
          style={{ marginRight: 10 }}
          name="delete"
          size={32}
          color="white"
          onPress={() => handleDelete(data.id)}
        />
        <AntDesign
          name="edit"
          size={32}
          color="white"
          onPress={() => handleEdit(data.id, data.todo)}
        />
      </View>
    </View>
  );
};

export default List;
