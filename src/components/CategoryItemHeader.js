import React from 'react';
import {View, Text, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';

function CategoryItemHeader({category, index, onCategory_Click}) {
  const tailwind = useTailwind();

  categoryItem_Click = function (index) {
    onCategory_Click(index);
  };

  return (
    <View
      style={tailwind(
        `${
          index !== 0 ? 'ml-[14px]' : ''
        } p-[5px] my-3 items-center rounded-full ${
          category.isActive ? 'bg-[#FE724C]' : 'bg-white'
        } ios-shadow`,
      )}
      onTouchStart={() => categoryItem_Click(index)}>
      <View
        style={tailwind(
          `items-center justify-center h-[50px] w-[50px] mb-3 bg-white rounded-full overflow-hidden`,
        )}>
        <Image source={category.image}></Image>
      </View>
      <Text
        style={tailwind(
          `${
            category.isActive ? 'text-white font-semibold' : 'text-gray-500'
          } text-xs mb-4`,
        )}>
        {category.name}
      </Text>
    </View>
  );
}

export default CategoryItemHeader;
