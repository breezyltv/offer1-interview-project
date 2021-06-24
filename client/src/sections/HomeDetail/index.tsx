import { useQuery } from "react-apollo";
import { RouteComponentProps } from "react-router-dom";
import {
  HOME_DETAIL,
  HomeDetail as IHomeDetail,
  HomeDetailVariables,
} from "../../lib/graphql/queries";
import { Row, Col, Empty, Image, Skeleton } from "antd";
import { HomeContainer } from "./styles";
import { HeaderInfo, FeaturesInfo } from "./components";
import { ErrorBanner } from "../../lib/components";
type TParams = { id: string };

export const HomeDetail = ({ match }: RouteComponentProps<TParams>) => {
  const { data, loading, error } = useQuery<IHomeDetail, HomeDetailVariables>(
    HOME_DETAIL,
    {
      variables: { id: parseInt(match.params.id) },
    }
  );

  console.log(data?.homeDetail);

  let homeDetailBody = data?.homeDetail ? (
    <Row gutter={[20, 20]}>
      <Col xs={24} lg={14} style={{ marginTop: "2rem" }}>
        {data.homeDetail.property.primaryImageUrl && (
          <Image
            alt={data.homeDetail.property?.propertyType}
            src={data.homeDetail.property.primaryImageUrl}
          />
        )}
      </Col>
      <Col xs={24} lg={10} style={{ marginTop: "2rem" }}>
        <HeaderInfo home={data.homeDetail} />
        <FeaturesInfo home={data.homeDetail} />
      </Col>
    </Row>
  ) : (
    <Skeleton avatar active paragraph={{ rows: 10 }} />
  );

  if (!data?.homeDetail && !loading) {
    return <Empty description="No matching results found!" />;
  }

  const detailError = error ? (
    <ErrorBanner description="Sorry! We weren't able to load the detail. Please try again later!" />
  ) : null;

  return (
    <HomeContainer>
      {detailError}
      {homeDetailBody}
    </HomeContainer>
  );
};
