interface itemType {
  coffee_categories: {
    id?: number; // Include if id is present in your JSON
    category: string;
    coffees: {
      id: number;
      title: string;
      price: number;
      image: string;
      description: string;
      rating: number;
    }[];
  }[];
}

export default itemType;
