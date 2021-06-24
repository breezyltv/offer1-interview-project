import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import {
  HOMES,
  homes as IHomes,
  homes_homes as IHomesData,
} from "../../lib/graphql/queries";
import { Row, Col, List, Empty } from "antd";
import { LoadingCard } from "../Common";
import { ListingCard, FilterHeader } from "./components";
import { ErrorBanner } from "../../lib/components";
import { HomeContainer } from "./styles";

const PAGE_LIMIT = 8;

const generateLoadingListingCard = (): JSX.Element[] => {
  let listing: JSX.Element[] = [];
  for (let index = 0; index < PAGE_LIMIT; index++) {
    listing.push(
      <Col lg={{ span: 6 }}>
        <LoadingCard key={index} />
      </Col>
    );
  }
  return listing;
};

export const Home = () => {
  const [homesPage, setHomesPage] = useState(1);
  const [homeData, setHomeData] = useState<IHomesData>();
  const { data, loading, error } = useQuery<IHomes>(HOMES, {
    onCompleted: ({ homes }) => {
      setHomeData(homes);
    },
  });
  //console.log(data);

  const listCard = (
    <List
      grid={{
        gutter: 20,
        xs: 1,
        sm: 2,
        md: 2,
        lg: 4,
        xl: 4,
        xxl: 4,
      }}
      dataSource={homeData && homeData.result}
      pagination={{
        position: "bottom",
        current: homesPage,
        total: homeData && homeData.total,
        defaultPageSize: PAGE_LIMIT,
        hideOnSinglePage: true,
        showLessItems: true,
        onChange: (page) => setHomesPage(page),
      }}
      renderItem={(home) => (
        <List.Item>
          <Link key={home.id} to={`/homedetails/${home.id}`}>
            <ListingCard key={home.id} home={home} loadingListings={false} />
          </Link>
        </List.Item>
      )}
    />
  );

  const listingsContent =
    data?.homes.total !== 0 || data?.homes.result.length !== 0 ? (
      <Row gutter={[25, 25]}>
        {loading ? generateLoadingListingCard() : listCard}
      </Row>
    ) : (
      <Empty description="No matching results found or user does not have any listings yet!" />
    );

  if (!data?.homes && !loading) {
    return (
      <Empty description="No matching results found or user does not have any listings yet!" />
    );
  }
  const homeError = error ? (
    <ErrorBanner description="Ohh! Something went wrong. Please try again later!" />
  ) : null;

  return (
    <HomeContainer>
      {homeError}
      <FilterHeader
        homeData={homeData}
        setHomeData={setHomeData}
        originalHomesData={data && data.homes}
      />
      {listingsContent}
    </HomeContainer>
  );
};
