import { HomeDetail_homeDetail as IHome } from "../../../lib/graphql/queries";
import { Typography, Space, Divider, Button } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { FeaturesDiv } from "../styles";
const { Text, Title } = Typography;

interface Props {
  home: IHome;
}

export const FeaturesInfo = ({ home }: Props) => {
  return (
    <>
      <FeaturesDiv>
        <Title level={4}>Facts and features</Title>
        <Text>
          <HomeOutlined /> Type: Single Family Residence
        </Text>
      </FeaturesDiv>
      <FeaturesDiv>
        <Title level={4}>Interior details</Title>
        <Space align="start" size={35}>
          <Space direction="vertical">
            <Title level={5}>Bedrooms and bathrooms</Title>
            <Text>Bedrooms: {home.property?.numberBedrooms}</Text>
            <Text>Bathrooms: {home.property?.numberBaths}</Text>
          </Space>
          <Space direction="vertical">
            <Title level={5}>Appliances</Title>
            {home.includedItems &&
              home.includedItems.map((item) => <Text>{item.name}</Text>)}
          </Space>
        </Space>
      </FeaturesDiv>
    </>
  );
};
