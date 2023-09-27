import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import colors from '../../constants/colors';

const dataMakanan = [
  {
    title: 'Rendang',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/1.jpg',
  },
  {
    title: 'Nasi Goreng',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/nasigoreng.jpg',
  },
  {
    title: 'Tengkleng',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/tengkleng.jpg',
  },
  {
    title: 'Bakso',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/bakso.jpg',
  },
  {
    title: 'Rawon',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/the-ultimate-guide-to-must-try-indonesian-food/8.jpg',
  },
  {
    title: 'Sate',
    img: 'https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/are-you-a-culinary-enthusiast-explore-java-road-trip-culinary-adventure/image2.jpg',
  },
];

export default function HomeScreen() {
  const renderItem = ({item}: {item: (typeof dataMakanan)[0]}) => (
    <View style={styles.food}>
      <Image
        source={{uri: item?.img}}
        resizeMode="cover"
        style={styles.imgFood}
      />
      <View style={styles.foodBody}>
        <Text style={styles.foodTitle}>{item?.title}</Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>Selamat datang di Beranda</Text>
      <Text style={styles.headerSubtitle}>
        Monggo bisa dilihat dulu galeri makanan di bawah ini.
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataMakanan}
        keyExtractor={(_i, index) => index.toString()}
        renderItem={renderItem}
        ListHeaderComponent={renderHeader}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    margin: 16,
  },
  headerTitle: {
    fontSize: 72,
    fontWeight: 'bold',
    color: colors.dark,
    fontFamily: 'Montserrat-Bold',
  },
  headerSubtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.dark,
    fontFamily: 'Montserrat-SemiBold',
  },
  food: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  foodBody: {
    marginTop: -2,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    elevation: 1,
    shadowColor: colors.dark,
    zIndex: -1,
    backgroundColor: '#FFFFFF',
  },
  foodTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.dark,
    fontFamily: 'Montserrat-SemiBold',
  },
  imgFood: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
});
