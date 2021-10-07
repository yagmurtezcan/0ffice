import React, {useState, useEffect} from 'react';
import Background from '../components/Background';
import {ListItem} from 'react-native-elements';

export default function ProfileScreen({navigation}) {
  const [suppliers, setSuppliers] = useState([]);

  //component render olduktan sonra api den dataları çek
  useEffect(() => {
    //fetch servisten dataları çekmemi sağladı.
    //Http kanalı üzerinden belirttiğim url e bir GET isteği yaptım. ve istek sonucu dönen response dan aldığım dataları console a yazdırdım.
    fetch('https://northwind.vercel.app/api/suppliers')
      .then(res => res.json())
      .then(data => {
        setSuppliers(data);
      });
  }, []);

  return (
    <Background>
      {suppliers.map((item, key) => (
        <ListItem key={key} bottomDivider>
          <ListItem.Content>
            <ListItem.Title>{item.id}</ListItem.Title>
            <ListItem.Subtitle>{item.companyName}</ListItem.Subtitle>
            <ListItem.Subtitle>{item.address.city}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </Background>
  );
}
