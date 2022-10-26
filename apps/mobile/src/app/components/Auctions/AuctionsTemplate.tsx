import React from 'react';
import { PixelRatio, StyleSheet } from 'react-native';
import { CategoryFilter, mapCategoriesToSelect } from '@inheartive/ui/molecules';
import { View } from 'native-base';
import { ICategory } from '@inheartive/data';

interface Props {
  categories: ICategory[];
  selectedCategoryID: string;
  onCategoryChange: (id: string) => void;
}

export function AuctionsTemplate(props: Props) {
  const { categories, selectedCategoryID, onCategoryChange } = props;

  return (
    <View style={styles.container}>
      <CategoryFilter
        items={mapCategoriesToSelect(categories)}
        selectedValue={selectedCategoryID}
        onChange={onCategoryChange}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: PixelRatio.getPixelSizeForLayoutSize(16),
    paddingTop: PixelRatio.getPixelSizeForLayoutSize(50),
    height: '100%',
  },
});

export default AuctionsTemplate;
