import { useState } from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

// COMPONENT PROPS
function ProfileCard(props) {
    return (
        <View style={styles.card}>

            <Text style={styles.cardTitle}>Data Preview</Text>

            <Text style={styles.cardText}>
                <Text style={styles.bold}>Nama: </Text>
                {props.nama}
            </Text>

            <Text style={styles.cardText}>
                <Text style={styles.bold}>NIP: </Text>
                {props.nip}
            </Text>

            <Text style={styles.cardText}>
                <Text style={styles.bold}>Jabatan: </Text>
                {props.jabatan}
            </Text>

            <Text style={styles.cardText}>
                <Text style={styles.bold}>Institusi: </Text>
                {props.institusi}
            </Text>

        </View>
    );
}

export default function App() {

    let [nama, setNama] = useState("");
    let [nip, setNip] = useState("");
    let [jabatan, setJabatan] = useState("");
    let [institusi, setInstitusi] = useState("");

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.imageWrapper}>

                <Image
                    source={require("../../assets/images/user-icons.png")}
                    style={styles.image}
                />

            </View>

            <View style={styles.form}>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Nama</Text>

                    <TextInput
                        placeholder="Masukkan Nama"
                        value={nama}
                        onChangeText={setNama}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>NIP</Text>

                    <TextInput
                        placeholder="Masukkan NIP"
                        value={nip}
                        onChangeText={setNip}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Jabatan</Text>

                    <TextInput
                        placeholder="Masukkan Jabatan"
                        value={jabatan}
                        onChangeText={setJabatan}
                        style={styles.input}
                    />
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Institusi</Text>

                    <TextInput
                        placeholder="Masukkan Institusi"
                        value={institusi}
                        onChangeText={setInstitusi}
                        style={styles.input}
                    />
                </View>

            </View>

            <ProfileCard
                nama={nama}
                nip={nip}
                jabatan={jabatan}
                institusi={institusi}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        alignItems: "center",
        padding: 20,
    },

    imageWrapper: {
        width: 140,
        height: 140,
        borderRadius: 70,
        overflow: "hidden",
        borderWidth: 4,
        borderColor: "black",
        marginTop: 20,
        marginBottom: 25,
        backgroundColor: "white",
    },

    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },

    form: {
        width: "100%",
        maxWidth: 320,
        gap: 18,
    },

    inputGroup: {
        gap: 6,
    },

    label: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#555",
    },

    input: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "#ccc",
        borderRadius: 12,
        padding: 12,
        fontSize: 14,
    },

    card: {
        width: "100%",
        maxWidth: 320,
        backgroundColor: "white",
        marginTop: 25,
        padding: 20,
        borderRadius: 15,
        elevation: 4,
    },

    cardTitle: {
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 15,
    },

    cardText: {
        fontSize: 15,
        marginBottom: 8,
    },

    bold: {
        fontWeight: "bold",
    },

});