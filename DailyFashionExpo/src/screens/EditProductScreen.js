/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImagePicker from 'react-native-image-crop-picker';
import {InputComponent} from '../components/InputComponent';
import SelectDropdown from 'react-native-select-dropdown';
import {categoryList} from '../../data/Data';

import realm from '../../store/realm/index';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen-hooks';

const EditProductScreen = props => {
  const {route, navigation} = props;
  const idProduct = route.params.idProduct;

  const [productData, setProductData] = useState({
    productName: '',
    imagePath: '',
    category: null,
    description: '',
    price: null,
    instagram: '',
    facebook: '',
    phoneNumber: '',
  });

  const addImage = () => {
    ImagePicker.openPicker({
      width: 2000,
      height: 2000,
      cropping: true,
    })
      .then(image => {
        console.log(image);
        setProductData({
          ...productData,
          imagePath: image.path,
        });
      })
      .catch(errorMessage => {
        console.log(errorMessage);
      });
  };

  const onInputChange = (type, value) => {
    setProductData({
      ...productData,
      [type]: value,
    });
  };

  const saveData = () => {
    if (
      productData.productName === '' ||
      productData.imagePath === '' ||
      productData.description === '' ||
      productData.price === '' ||
      productData.category === null
    ) {
      alert('Please fill all your product information');
    } else if (
      productData.phoneNumber === '' &&
      productData.instagram === '' &&
      productData.facebook === ''
    ) {
      alert('Please fill at least one seller contact');
    } else {
      const updatedData = realm
        .objects('Product')
        .filtered(`id = ${idProduct}`)[0];

      if (
        updatedData.productName === productData.productName &&
        updatedData.imagePath === productData.imagePath &&
        updatedData.category === productData.category &&
        updatedData.description === productData.description &&
        updatedData.price === parseInt(productData.price, 10) &&
        updatedData.instagram === productData.instagram &&
        updatedData.facebook === productData.facebook &&
        updatedData.phoneNumber === productData.phoneNumber
      ) {
        alert('Nothing To Update !');
      } else {
        realm.write(() => {
          updatedData.productName = productData.productName;
          updatedData.imagePath = productData.imagePath;
          updatedData.category = productData.category;
          updatedData.description = productData.description;
          updatedData.price = parseInt(productData.price, 10);
          updatedData.instagram = productData.instagram;
          updatedData.facebook = productData.facebook;
          updatedData.phoneNumber = productData.phoneNumber;
        });
        Alert.alert(
          'Success',
          'Successfully update your product information!',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
        );
      }
    }
  };

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  useEffect(() => {
    const data = realm.objects('Product').filtered(`id = ${idProduct}`)[0];
    setProductData({
      productName: data.productName,
      imagePath: data.imagePath,
      category: data.category,
      description: data.description,
      price: String(data.price),
      instagram: data.instagram,
      facebook: data.facebook,
      phoneNumber: data.phoneNumber,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            style={styles.imageButton}
            onPress={() => addImage()}>
            <Image
              style={{
                width:
                  productData.imagePath !== ''
                    ? widthPercentageToDP('50%')
                    : 200,
                height:
                  productData.imagePath !== ''
                    ? widthPercentageToDP('50%')
                    : 200,
              }}
              source={
                productData.imagePath !== ''
                  ? {uri: productData.imagePath}
                  : require('../../assets/images/placeholder.jpg')
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Product Name"
            value={productData.productName}
            onChangeText={text => onInputChange('productName', text)}
          />

          <SelectDropdown
            data={categoryList}
            defaultButtonText="Select category"
            onSelect={item => {
              onInputChange('category', item.id);
            }}
            defaultValueByIndex={productData.category - 1}
            buttonTextAfterSelection={item => {
              return item.name;
            }}
            rowTextForSelection={item => {
              return item.name;
            }}
            buttonStyle={styles.selectDropdown}
            buttonTextStyle={styles.selectText}
          />
        </View>
        <View style={styles.horizontalContainer}>
          <InputComponent
            placeholder="Description"
            value={productData.description}
            onChangeText={text => onInputChange('description', text)}
            isDescription={true}
          />
          <InputComponent
            placeholder="Price"
            value={productData.price}
            onChangeText={text => onInputChange('price', text)}
            isIcon={true}
            name="dollar"
            type="font-awesome"
            keyboardType="phone-pad"
          />
        </View>

        <Text style={styles.sellerText}>Seller Contact</Text>
        <InputComponent
          placeholder="Whastapp number (ex : +4498739230)"
          value={productData.phoneNumber}
          onChangeText={text => onInputChange('phoneNumber', text)}
          isIcon={true}
          name="whatsapp"
          type="font-awesome"
          keyboardType="phone-pad"
        />
        <InputComponent
          placeholder="Instagram username (ex : timedooracademy)"
          value={productData.instagram}
          onChangeText={text => onInputChange('instagram', text)}
          isIcon={true}
          name="instagram"
          type="font-awesome"
        />
        <InputComponent
          placeholder="Facebook username (ex : timedooracademy)"
          value={productData.facebook}
          onChangeText={text => onInputChange('facebook', text)}
          isIcon={true}
          name="facebook-square"
          type="font-awesome"
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => saveData()}>
            <Text style={styles.saveText}>EDIT</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sellerText: {
    fontSize: heightPercentageToDP('2.5%'),
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: 8,
    marginBottom: 0,
    color: 'black',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  saveButton: {
    marginTop: 16,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'mistyrose',
  },
  saveText: {
    color: 'black',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  scroll: {
    margin: 8,
    paddingBottom: 8,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 8,
  },
  imageButton: {
    width: widthPercentageToDP('50%'),
    height: widthPercentageToDP('50%'),
    borderWidth: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  selectDropdown: {
    borderRadius: 10,
    backgroundColor: 'skyblue',
    width: widthPercentageToDP('40%'),
    height: heightPercentageToDP('4%'),
    marginLeft: 8,
  },
  selectText: {
    fontSize: heightPercentageToDP('1.5%'),
  },
});

export default EditProductScreen;
