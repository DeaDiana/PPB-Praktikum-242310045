import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const user = {
    nama: "Alya Putri",
    title: "Frontend Developer",
    department: "Engineering",
    email: "alya.putri@example.com",
    image: require("../assets/woman.jpeg"),
  };

  const portofolio = [
    {
      code: "FE001",
      nama: "UI Dashboard",
      image: require("../assets/woman.jpeg"),
    },
    {
      code: "FE002",
      nama: "Landing Page",
      image: require("../assets/man.jpg"),
    },
    {
      code: "FE003",
      nama: "Portfolio Site",
      image: require("../assets/woman.jpeg"),
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.header}>
        <Text style={styles.backText}>BACK</Text>
      </TouchableOpacity>

      <ScrollView>
        <View style={styles.userSection}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{user.nama}</Text>
            <Text>Title: {user.title}</Text>
            <Text>Department: {user.department}</Text>
            <Text>Email: {user.email}</Text>
          </View>

          <Image source={user.image} style={styles.profileImage} />
        </View>

        <Text style={styles.portoTitle}>Portofolio List</Text>

        <View style={styles.portoContainer}>
          {portofolio.map((item) => (
            <View key={item.code} style={styles.portoCard}>

              <Image source={item.image} style={styles.portoImage} />

              <View style={styles.line} />

              <View style={styles.textWrapper}>

              </View><Text style={[styles.portoName, { textAlign: "center" }]}>
                Nama: {item.nama}
              </Text>

              <Text style={[styles.portoCode, { textAlign: "center" }]}>
                Code: {item.code}
              </Text>

            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  header: {
    backgroundColor: "#1976d2",
    padding: 12,
    alignItems: "center",
  },

  backText: {
    color: "white",
    fontWeight: "bold",
  },

  userSection: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  portoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
    marginTop: 10,
  },

  portoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    marginTop: 10,
  },

  portoCard: {
    width: "48%",
    alignItems: "center",
    marginBottom: 20,
  },

  portoImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  line: {
    width: "80%",
    height: 2,
    backgroundColor: "#1976d2",
    marginVertical: 5,
  },

  textWrapper: {
    width: "100%",
    alignItems: "flex-start", 
  },

  portoName: {
    fontWeight: "bold",
  },

  portoCode: {
    color: "#666",
    fontSize: 12,
  },
});