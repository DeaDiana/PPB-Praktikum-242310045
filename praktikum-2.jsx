import { StyleSheet, Text, View } from "react-native";

const praktikum2 = () => {
    const personalData = {
        name: "Dea Diana Sari"
    };

const berat = 60;
const tinggi = 1.65;
const bmi = berat / (tinggi * tinggi);

const makanan = [
  { nama: "Sarapan", kalori: 400 },
  { nama: "Makan Siang", kalori: 600 },
  { nama: "Makan Malam", kalori: 500 },
  { nama: "Camilan", kalori: 300 }
];

let totalKalori = 0;

for (let i = 0; i < makanan.length; i++) {
  totalKalori += makanan[i].kalori;
}


let status = "";

if (bmi < 18.5) {
  status = "Kurus";
} else if (bmi <= 24.9) {
  status = "Ideal";
} else if (bmi <= 29.9) {
  status = "Berlebih";
}

let statkalori = "";

if (totalKalori < 1200){
    statkalori = "Kurang";
}
else if (totalKalori <= 1800){
    statkalori = "Cukup";
}
else if (totalKalori > 1800){
    statkalori= "berlebih";
}

let statbmi = "";

switch (status) {
  case "Kurus":
    statbmi = "masih kurang";
    break;
  case "Ideal":
    statbmi = "sudah ideal";
    break;
  case "Berlebih":
    statbmi = "terlalu Berlebih";
    break;
  default:
    statbmi = "terlalu Berlebih";
}

let kalori = "";
switch (statkalori) {
  case "Kurang":
    kalori = "masih kurang";
    break;
  case "Cukup":
    kalori = "sesuai";
    break;
  case "Berlebih":
    kalori = "lebih dari yang di sarankan";
    break;
  default:
    kalori = "lebih dari yang di sarankan";
}



    return (
        <View style={styles.container}>
            <Text style={styles.title}>Evaluasi Berat Badan Ideal</Text>
            <Text style={styles.title}>Pasien</Text>
            <Text>Nama: {personalData.name}</Text>
            <Text>Berat Badan: {berat}</Text>
            <Text>Tinggi Badan: {tinggi * 100}</Text>

            <Text style={styles.title}>Porsi Makanan Harian</Text>
            {makanan.map((item, index) => (
            <Text key={index}>
            {item.nama} - {item.kalori} kalori
            </Text>
            ))}
            <Text>Total Kalori: {totalKalori}</Text>
            
            <Text style={styles.title}>Hasil Perhitungan</Text>
            <Text>BMI: {bmi.toFixed(2)}</Text>
            <Text>Status BMI: {status}</Text>
            <Text>Status Kalori: Asupan Kalori {statkalori}</Text>

            <Text style={styles.title}>Berat badan {statbmi} dan asupan kalori {kalori}. </Text>
        </View>
    );
};

 const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    marginLeft: 15,
    marginRight: 18,
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 16,
  },
});
export default praktikum2;


