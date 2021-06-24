import { useState } from "react";
import { Typography, Button, Select, Dropdown, Form, Input, Alert } from "antd";
import { FilterSpace, PriceMenu } from "../styles";
import { homes_homes as IHomesData } from "../../../lib/graphql/queries";
const { Text, Title } = Typography;
const { Option } = Select;

interface Props {
  homeData: IHomesData | undefined;
  setHomeData: React.Dispatch<React.SetStateAction<IHomesData | undefined>>;
  originalHomesData: IHomesData | undefined;
}

interface IBedroom {
  key: string;
  label: string;
  value: string;
}

interface IFilter {
  minPrice: string | undefined;
  maxPrice: string | undefined;
  bedroom: IBedroom | undefined;
  city: string | undefined;
}

//const pricesArr = [0, 100000, 200000, 300000, 400000, 500000];

const initIsSearched = {
  city: undefined,
  bedroom: undefined,
  minPrice: undefined,

  maxPrice: undefined,
};

export const FilterHeader = ({
  homeData,
  setHomeData,
  originalHomesData,
}: Props) => {
  const [form] = Form.useForm();
  const [resetInput, setResetInput] = useState();
  const [isSearched, setIsSearched] = useState<IFilter>(initIsSearched);
  const [isSearching, setIsSearching] = useState(false);
  const [errors, setErrors] = useState({ path: "", message: "" });
  //const [priceFilter, setPriceFilter] = useState<IFilter>(initIsSearched);
  const handleDynamicSearch = (value: any) => {
    console.log(value);

    if (originalHomesData) {
      setIsSearching(true);
      //dynamix search with debounce
      setTimeout(() => {
        if (value.trim().toLowerCase()) {
          const homeFilter = originalHomesData.result.filter((home) =>
            home.property.address.city
              .toLowerCase()
              .startsWith(value.toLowerCase())
          );
          setHomeData({
            __typename: "THomes",
            total: homeFilter.length,
            result: homeFilter,
          });
        } else {
          setHomeData(originalHomesData);
        }
        setIsSearching(false);
      }, 500);
    }
  };

  const handleReset = () => {
    form.resetFields();
    //form.setFieldsValue({ minPrice: undefined });
    setResetInput(undefined);
    setErrors({ path: "", message: "" });
    setHomeData(originalHomesData);
  };

  const handlePriceFilter = (data: IFilter) => {
    console.log(data);

    if (!data.maxPrice || !data.minPrice) {
      return;
    }

    const minPrice = parseInt(data.minPrice);
    const maxPrice = parseInt(data.maxPrice);

    console.log(minPrice, maxPrice);

    if (maxPrice < minPrice) {
      console.log("[min max] error", data);
      setErrors({
        path: "price",
        message: "Max and min price is invalid!",
      });
    } else {
      setErrors({ path: "", message: "" });
      //setPriceFilter(data);
      if (originalHomesData && homeData) {
        if (!isSearched.city && !isSearched.bedroom) {
          const priceFilter = originalHomesData.result.filter((home) => {
            if (data.minPrice && data.maxPrice)
              return home.price >= minPrice && home.price <= maxPrice;
          });

          console.log(priceFilter);

          setHomeData({
            __typename: "THomes",
            total: priceFilter.length,
            result: priceFilter,
          });
        }
      }
    }
  };

  const handleBedRoomFilter = (data: IBedroom) => {
    setIsSearched({
      ...isSearched,
      bedroom: data,
    });
    console.log("[handleBedRoomFilter]", isSearched);
    if (data) {
      if (originalHomesData && homeData) {
        if (
          (!isSearched.city && !isSearched.maxPrice) ||
          !isSearched.maxPrice
        ) {
          const bedroomFilter = originalHomesData.result.filter(
            (home) => home.property.numberBedrooms >= parseInt(data.value)
          );
          setHomeData({
            __typename: "THomes",
            total: bedroomFilter.length,
            result: bedroomFilter,
          });
        }
      }
    }
  };

  const priceFilterComp = (
    <PriceMenu>
      <Form form={form} onFinish={handlePriceFilter}>
        <Form.Item
          name="minPrice"
          rules={[
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Enter a valid number",
            },
          ]}
        >
          <Select
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="min"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option
                ? option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                : false
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="0">0+</Option>
            <Option value="100000">100,000+</Option>
            <Option value="200000">200,000+</Option>
            <Option value="300000">300,000+</Option>
            <Option value="400000">400,000+</Option>
            <Option value="500000">500,000+</Option>
            <Option value="600000">600,000+</Option>
            <Option value="700000">700,000</Option>
            <Option value="800000">800,000</Option>
            <Option value="900000">900,000</Option>
            <Option value="1000000">1000,000</Option>
            <Option value="1500000">1500,000</Option>
            {/* {pricesArr.map((item, idx) => (
              <Option key={idx} value={item}>
                {
                  <NumberFormat
                    value={item}
                    displayType={"text"}
                    thousandSeparator={true}
                  />
                }
                +
              </Option>
            ))} */}
          </Select>
        </Form.Item>
        <Form.Item
          name="maxPrice"
          rules={[
            {
              pattern: new RegExp(/^[0-9]+$/),
              message: "Enter a valid number",
            },
          ]}
        >
          <Select
            allowClear
            showSearch
            style={{ width: 200 }}
            placeholder="max"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option
                ? option.children.toLowerCase().indexOf(input.toLowerCase()) >=
                  0
                : false
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="0">0+</Option>
            <Option value="100000">100,000</Option>
            <Option value="200000">200,000</Option>
            <Option value="300000">300,000</Option>
            <Option value="400000">400,000</Option>
            <Option value="500000">500,000</Option>
            <Option value="600000">600,000</Option>
            <Option value="700000">700,000</Option>
            <Option value="800000">800,000</Option>
            <Option value="900000">900,000</Option>
            <Option value="1000000">1000,000</Option>
            <Option value="1500000">1500,000</Option>
          </Select>
        </Form.Item>
        {errors.path === "price" ? (
          <Alert message={errors.message} type="error" />
        ) : null}
        <Form.Item>
          <Button htmlType="submit" type="primary" size="small" block>
            Done
          </Button>
        </Form.Item>
      </Form>
    </PriceMenu>
  );

  const handleClearBedroomFilter = () => {
    setHomeData(originalHomesData);
  };

  const bedroomFilter = (
    <>
      <Form.Item name="bedroom">
        <Select
          allowClear
          labelInValue
          placeholder="Bedrooms"
          style={{ width: 120 }}
          defaultValue={resetInput}
          onChange={handleBedRoomFilter}
          onClear={handleClearBedroomFilter}
        >
          <Option value="1">1+</Option>
          <Option value="2">2+</Option>
          <Option value="3">3+</Option>
          <Option value="4">4+</Option>
          <Option value="5">5+</Option>
        </Select>
      </Form.Item>
    </>
  );

  const cityFilter = (
    <Form.Item name="city">
      <Input.Search
        placeholder="search by city"
        //onSearch={handleDynamicSearch}
        onChange={(e) => handleDynamicSearch(e.target.value)}
        enterButton
        loading={isSearching}
      />
    </Form.Item>
  );

  return (
    <Form form={form}>
      <FilterSpace size={20} align="start">
        <Title level={4}>Filter: </Title>

        {cityFilter}
        <Dropdown
          overlay={priceFilterComp}
          placement="bottomCenter"
          arrow
          trigger={["click"]}
        >
          <Button>Price</Button>
        </Dropdown>

        {bedroomFilter}
        <Form.Item>
          <Button onClick={handleReset}>Reset</Button>
        </Form.Item>
      </FilterSpace>
    </Form>
  );
};
