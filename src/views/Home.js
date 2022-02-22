import React, {useState} from 'react';
import {View, Text, Image, TextInput, ScrollView} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import CategoryItemHeader from '../components/CategoryItemHeader';
import RestaurantItem from '../components/RestaurantItem';
import {images} from '../res/images';

function Home() {
  const tailwind = useTailwind();
  const [categories, setCategories] = useState([
    {name: 'Burger', image: images.icon.burger, isActive: true},
    {name: 'Donat', image: images.icon.donat, isActive: false},
    {name: 'Pizza', image: images.icon.pizza, isActive: false},
    {name: 'Mexican', image: images.icon.mexican, isActive: false},
    {name: 'Asian', image: images.icon.asian, isActive: false},
  ]);

  const [restaurants, setRestaurants] = useState([
    {
      name: "McDonald's",
      image: images.restaurants.McDonal,
      tags: ['burger', 'chicken', 'fast food'],
    },
    {
      name: "McDonald's",
      image: images.restaurants.McDonal,
      tags: ['burger', 'chicken', 'fast food'],
    },
  ]);

  const onCategory_Click = function (index) {
    const currentCategories = categories.map(category => ({
      ...category,
      isActive: false,
    }));
    const selectedCategory = currentCategories[index];
    selectedCategory.isActive = true;
    setCategories(currentCategories);
  };

  return (
    <View>
      <View style={tailwind('flex-row justify-between mx-[26px] my-8')}>
        <View
          style={tailwind(
            'justify-center items-center w-10 h-10 rounded-lg bg-white ios-shadow',
          )}>
          <Image source={images.icon.menu}></Image>
        </View>
        <View style={tailwind('items-center')}>
          <Text style={tailwind('text-gray-500 leading-4 mb-1')}>
            Deliver to
          </Text>
          <Text style={tailwind('text-orange-500')}>4102 Pretty View Lane</Text>
        </View>
        <View style={tailwind('w-[38px] h-[38px] rounded-xl overflow-hidden')}>
          <Image
            style={tailwind('w-full h-full')}
            source={images.common.avatar}></Image>
        </View>
      </View>
      <Text
        style={tailwind('mx-[26px] mb-5 text-3xl text-[#323643] font-bold')}>
        What would you like to order
      </Text>
      <View style={tailwind('mx-[26px] flex-row mb-[30px]')}>
        <View
          style={tailwind(
            'flex-row items-center flex-1 px-[18px] border border-gray-200 rounded-lg',
          )}>
          <Image source={images.icon.search}></Image>
          <TextInput
            style={tailwind('ml-3')}
            placeholder="Find for food or restaurant..."></TextInput>
        </View>
        <View
          style={tailwind(
            'items-center justify-center ml-[18px] w-[51px] h-[51px] bg-white rounded-lg ios-shadow',
          )}>
          <Image source={images.icon.switch}></Image>
        </View>
      </View>
      <ScrollView horizontal={true}>
        <View style={tailwind('flex-row mx-[26px]')}>
          {categories.map((category, index) => (
            <CategoryItemHeader
              key={category.name}
              index={index}
              category={category}
              onCategory_Click={onCategory_Click}
            />
          ))}
        </View>
      </ScrollView>
      <View style={tailwind('mt-4')}>
        <View
          style={tailwind(
            'flex-row items-center justify-between mx-[25px] mb-[15]',
          )}>
          <Text style={tailwind('text-lg text-[#323643]')}>
            Featured Restaurants
          </Text>
          <View style={tailwind('flex-row items-center')}>
            <Text style={tailwind('text-sm text-[#F56844]')}>View All</Text>
            <Image
              style={tailwind('ml-[5]')}
              source={images.icon.arrowRight}></Image>
          </View>
        </View>
        <ScrollView horizontal={true}>
          <View style={tailwind('flex-row px-[25] mb-6')}>
            {restaurants.map((restaurant, index) => (
              <RestaurantItem
                key={index}
                index={index}
                restaurant={restaurant}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Home;
