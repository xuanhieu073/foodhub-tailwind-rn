import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';
import {images} from '../res/images';

function RestaurantItem({index, restaurant}) {
  const tailwind = useTailwind();
  return (
    <View
      style={tailwind(
        `rounded-2xl bg-white ios-shadow ${index !== 0 ? 'ml-[15px]' : ''}`,
      )}>
      <Image
        style={tailwind('w-[266] h-[136] mb-3 rounded-t-2xl')}
        source={restaurant.image}></Image>
      <View style={tailwind('ml-[13] mb-[14]')}>
        <View style={tailwind('flex-row items-center mb-[6px]')}>
          <Text style={tailwind('text-[15px] font-semibold')}>
            {restaurant.name}
          </Text>
          <Image
            style={tailwind('ml-[5]')}
            source={images.icon.checkGray}></Image>
        </View>
        <View style={tailwind('flex-row mb-[10px]')}>
          <Image source={images.icon.deliverMoto}></Image>
          <Text style={tailwind('text-xs text-[#7E8392] ml-[6px]')}>
            Free Delivery
          </Text>
          <Image
            style={tailwind('ml-[17px]')}
            source={images.icon.clock}></Image>
          <Text style={tailwind('ml-1 text-xs text-[#7E8392]')}>
            10-15 mins
          </Text>
        </View>
        <View style={tailwind('flex-row')}>
          {restaurant.tags.map((tag, tagIndex) => (
            <View
              style={tailwind(
                `rounded-md bg-gray-100 py-1 px-[6px] ${
                  tagIndex !== 0 ? 'ml-2' : ''
                }`,
              )}>
              <Text
                style={tailwind(
                  'uppercase text-xs text-[#8A8E9B] font-normal',
                )}>
                {tag}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default RestaurantItem;
