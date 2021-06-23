import { Typography, Button } from "antd";
import { FilterSpace } from "../styles";
const { Text } = Typography;

export const FilterHeader = () => {
  return (
    <FilterSpace size={20}>
      <Text>Filter: </Text>
      <Button>Price</Button>
      <Button>City</Button>
      <Button>Bedrooms</Button>
    </FilterSpace>
  );
};
