import { View, Text, TextInput, TouchableOpacity } from "react-native";

type Props = {
  setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
  setTodo: React.Dispatch<
    React.SetStateAction<
      {
        id: string;
        todo: string;
      }[]
    >
  >;
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
};

const InputTodo = ({ setTodo, setIsEdit, input, setInput }: Props) => {
  const handleInput = (text: string) => {
    setInput(text);
  };

  const id = Math.random();

  const handlePress = () => {
    if (!input.length) {
      return alert("Isi Todo");
    } else {
      setTodo((currentTodo) => [
        ...currentTodo,
        { id: id.toString(), todo: input },
      ]);
      setInput("");
      setIsEdit(false);
      alert("Todo Berhasil Ditambahkan");
    }
  };

  return (
    <View
      style={{
        marginVertical: 10,
        marginHorizontal: 2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <TextInput
        style={{
          fontSize: 22,
          borderRadius: 10,
          backgroundColor: "#EAEAEA",
          borderColor: "gray",
          borderStyle: "solid",
          borderWidth: 1,
          paddingVertical: 15,
          paddingHorizontal: 5,
          width: "75%",
        }}
        value={input}
        placeholder="Masukan Kegiatan Kamu..."
        onChangeText={handleInput}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#08D9D6",
          paddingVertical: 20,
          margin: 10,
          paddingHorizontal: 25,
          borderRadius: 10,
        }}
        onPress={handlePress}
      >
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Add</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InputTodo;
