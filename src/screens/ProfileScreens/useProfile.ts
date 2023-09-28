import {useEffect, useMemo, useState, useTransition} from 'react';
import {storage} from '../../storages';
import {Alert} from 'react-native';

export default function useProfile() {
  const [loading, startTransition] = useTransition();
  const [form, setForm] = useState({
    name: '',
    hobby: '',
  });

  const onChangeForm = (type: 'name' | 'hobby') => (val: string) => {
    setForm({...form, [type]: val});
  };

  const onSubmit = () => {
    requestAnimationFrame(() => {
      startTransition(() => {
        storage.set('user', JSON.stringify(form));
        Alert.alert('Success', 'Data tersimpan!');
      });
    });
  };

  const disabledBtn = useMemo(() => {
    if (form.name.length >= 3 && form.hobby.length >= 3) {
      return false;
    }
    return true;
  }, [form.hobby.length, form.name.length]);

  useEffect(() => {
    const jsonUser = storage.getString('user');
    if (jsonUser !== undefined) {
      const userObj = JSON.parse(jsonUser);
      setForm({name: userObj?.name, hobby: userObj?.hobby});
    }
  }, []);

  return {form, loading, disabledBtn, onChangeForm, onSubmit};
}
