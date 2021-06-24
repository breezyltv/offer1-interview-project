import { HomeDetail_homeDetail as IHome } from "../../../lib/graphql/queries";
import NumberFormat from "react-number-format";
import { Typography, Space, Divider, Button } from "antd";
import { HeaderInfoSpace, AddressInfoDiv, OverviewSpace } from "../styles";

const { Text, Title, Paragraph } = Typography;

interface Props {
  home: IHome;
}

export const HeaderInfo = ({ home }: Props) => {
  const add2 = home.property?.address.addressLine2
    ? home.property?.address.addressLine2
    : "";
  const propAddress =
    home.property?.address.addressLine1 +
    " " +
    add2 +
    ", " +
    home.property?.address.city +
    ", " +
    home.property?.address.state +
    " " +
    home.property?.address.zip;

  return (
    <HeaderInfoSpace direction="vertical" size={10}>
      <Space split={<Divider type="vertical" />}>
        <NumberFormat
          value={home.price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
          className="priceInfo"
        />

        <Text>{home.property?.numberBedrooms} bds</Text>
        <Text>{home.property?.numberBedrooms} ba</Text>
        <Text>
          <NumberFormat
            value={home.property?.squareFeet}
            displayType={"text"}
            thousandSeparator={true}
          />{" "}
          sqft
        </Text>
      </Space>
      <AddressInfoDiv>{propAddress}</AddressInfoDiv>
      <Button type="primary">Contact Agent</Button>
      <Divider />
      <OverviewSpace direction="vertical">
        <Space direction="vertical">
          <Title level={3}>Overview</Title>
          <Paragraph>{home.property.description}</Paragraph>
        </Space>
        <Space direction="vertical">
          <Text>List by:</Text>
          <Text>
            {home.listingAgent.user?.firstName}{" "}
            {home.listingAgent.user?.lastName} {home.listingAgent.licenseNumber}
          </Text>
        </Space>
      </OverviewSpace>
    </HeaderInfoSpace>
  );
};
