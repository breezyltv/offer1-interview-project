import styled from "styled-components";
import { Space } from "antd";

export const HomeContainer = styled.article`
  max-width: calc(1100px + 5.6rem);
  margin: auto;
  padding: 0 1rem;
`;

export const HeaderInfoSpace = styled(Space)`
  .priceInfo {
    font-weight: 500;
    font-size: 2em;
    margin-right: 1rem;
  }
`;

export const AddressInfoDiv = styled.div`
  font-size: 1.1em;
`;

export const OverviewSpace = styled(Space)``;
export const FeaturesDiv = styled.div`
  margin: 30px 0;
`;
