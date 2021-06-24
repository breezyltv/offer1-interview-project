import NumberFormat from "react-number-format";
import {
  ListingCardWrapper,
  MetaInfoSpace,
  MetaPriceDiv,
  CoverImageFallbackDiv,
} from "../../Common/styles";
import { Image, Typography, Skeleton } from "antd";
import { PictureOutlined } from "@ant-design/icons";
import { homes_homes_result as IHome } from "../../../lib/graphql/queries/";
const { Meta } = ListingCardWrapper;
const { Text } = Typography;
interface Props {
  home: IHome;
  loadingListings: boolean;
}
export const ListingCard = ({ home, loadingListings }: Props) => {
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
    <ListingCardWrapper
      hoverable
      cover={
        <>
          {home.property?.primaryImageUrl ? (
            <Image
              preview={false}
              alt={home.property.propertyType}
              src={home.property?.primaryImageUrl}
            />
          ) : (
            <CoverImageFallbackDiv>
              <PictureOutlined />
            </CoverImageFallbackDiv>
          )}
        </>
      }
    >
      <Skeleton loading={loadingListings} active paragraph={{ rows: 2 }}>
        <Meta
          description={
            <MetaPriceDiv>
              <Text>
                <NumberFormat
                  value={home.price}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
              </Text>
            </MetaPriceDiv>
          }
        />
        <MetaInfoSpace direction="vertical">
          <Text>
            {home.property?.propertyType} - {home.property?.numberBedrooms} bds{" "}
            {home.property?.numberBedrooms} ba{" "}
            <NumberFormat
              value={home.property?.squareFeet}
              displayType={"text"}
              thousandSeparator={true}
            />{" "}
            sqft
          </Text>
          <Text>{propAddress}</Text>
          <Text>State: {home.state}</Text>
        </MetaInfoSpace>
      </Skeleton>
    </ListingCardWrapper>
  );
};
