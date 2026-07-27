import { FlatList, Image, StyleSheet, Text, View } from "react-native";

const users = [
  {
    id: "1",
    nama: "Alya Putri",
    title: "Frontend Developer",
    department: "Engineering",
    email: "alya.putri@example.com",
    image: require("../assets/woman.jpeg"),
  },
  {
    id: "2",
    nama: "Budi Santoso",
    title: "Backend Developer",
    department: "Engineering",
    email: "budi.santoso@example.com",
    image: require("../assets/man.jpg"),
  },
  {
    id: "3",
    nama: "Citra Lestari",
    title: "UI/UX Designer",
    department: "Design",
    email: "citra.lestari@example.com",
    image: require("../assets/woman.jpeg"),
  },
  {
    id: "4",
    nama: "Dedi Kurniawan",
    title: "DevOps Engineer",
    department: "Infrastructure",
    email: "dedi.kurniawan@example.com",
    image: require("../assets/man.jpg"),
  },
];

const UserCard = ({ user }) => {
  return (
    <View style={styles.card}>
      <Image source={user.image} style={styles.image} />
      <Text style={styles.name}>{user.nama}</Text>
      <Text>Title: {user.title}</Text>
      <Text>Department: {user.department}</Text>
      <Text>Email: {user.email}</Text>
    </View>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>List User</Text>
        <Text style={styles.total}>Total User: {users.length}</Text>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <UserCard user={item} />}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f2f2f2",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    flex: 1,
    backgroundColor: "#a7d0e3",
    margin: 8,
    padding: 10,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginBottom: 8,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 10,
},
total: {
  fontSize: 14,
  color: "#555",
},
});