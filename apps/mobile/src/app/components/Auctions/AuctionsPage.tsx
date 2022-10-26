import React, { useEffect, useState } from 'react';
import AuctionsTemplate from './AuctionsTemplate';
import { categoriesMock, ICategory } from '@inheartive/data';

export function AuctionsPage() {
  const [selectedCategoryID, setSelectedCategoryID] = useState<string>('');
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    // TODO: Categories API call
    setCategories(categoriesMock);
  }, []);

  return (
    <AuctionsTemplate
      categories={categories}
      selectedCategoryID={selectedCategoryID}
      onCategoryChange={(id) => setSelectedCategoryID(id)}
    />
  );
}

export default AuctionsPage;
