import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import useProfile from './useProfile';
import colors from '../../constants/colors';

export default function ProfileScreen() {
  const {form, loading, disabledBtn, onChangeForm, onSubmit} = useProfile();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.inputLabel}>Nama</Text>
        <TextInput
          placeholder="Masukkan Nama"
          placeholderTextColor="#aaaaaa"
          style={styles.inputText}
          onChangeText={onChangeForm('name')}
          defaultValue={form?.name}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.inputLabel}>Hobi</Text>
        <TextInput
          placeholder="Masukkan Hobi"
          placeholderTextColor="#aaaaaa"
          style={styles.inputText}
          onChangeText={onChangeForm('hobby')}
          defaultValue={form?.hobby}
        />
      </View>

      <View style={styles.section}>
        <Button
          title={loading ? 'Loading...' : 'SUBMIT'}
          disabled={loading || disabledBtn}
          color={colors.primary}
          onPress={onSubmit}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    padding: 16,
    width: '100%',
  },
  inputText: {
    borderBottomWidth: 1,
    fontFamily: 'Montserrat-Regular',
    color: colors.dark,
  },
  inputLabel: {
    color: colors.dark,
    fontFamily: 'Montserrat-SemiBold',
  },
});
