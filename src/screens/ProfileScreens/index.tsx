import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../constants/colors';

const dataHobby = ['Ngoding', 'Main Game', 'Membaca', 'Tidur'];

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.background} />

        {/* Profil */}
        <View style={styles.profile}>
          <Image
            source={{
              uri: 'https://babaiyu.my.id/_next/image?url=%2Fprofile_picture.webp&w=2048&q=75',
            }}
            resizeMode="cover"
            style={styles.imgProfile}
          />

          <Text style={styles.title}>Bayu Permana Putra</Text>
          <Text style={styles.subtitle}>Frontend Engineer</Text>
        </View>

        {/* Hobi */}
        <Text style={styles.hobbyTitle}>Hobiku:</Text>
        <View style={styles.hobby}>
          {dataHobby.map(item => (
            <View style={styles.hobbyItem} key={item}>
              <Text style={styles.hobbyText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={{height: 300}} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profile: {
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    marginTop: 75,
    marginBottom: 16,
    marginHorizontal: 16,
    paddingBottom: 16,
  },
  hobby: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginHorizontal: 16,
    marginTop: 16,
  },
  hobbyItem: {
    width: '47.5%',
    height: 100,
    backgroundColor: colors.primary,
    marginBottom: 16,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hobbyText: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  hobbyTitle: {
    fontSize: 16,
    color: colors.dark,
    fontWeight: '600',
    textAlign: 'center',
  },
  background: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 200,
    position: 'absolute',
    zIndex: -1,
    borderBottomLeftRadius: 150,
    borderBottomRightRadius: 150,
    opacity: 0.9,
  },
  imgProfile: {
    width: 175,
    height: 175,
    borderRadius: 999,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    marginTop: 16,
  },
  subtitle: {
    fontWeight: '600',
    color: colors.dark,
    fontStyle: 'italic',
  },
});
