interface MapHeaderProps {
  restaurants: any[];
}

const MapHeader = ({ restaurants }: MapHeaderProps) => {
  return (
    <header>
      <h1>Lyon Restaurants</h1>
      <p>{restaurants.length} restaurants found</p>
    </header>
  );
};

export default MapHeader;
