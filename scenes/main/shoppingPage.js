import React, { useState } from "react";
import Title from "../../components/common/Typography/title";
import HeaderContainer from "../../components/common/Containers/headerContainer";
import ItemsList from "../../components/combined/itemsList";
import PrimaryContainer from "../../components/common/Containers/primaryContainer";
import ContentContainer from "../../components/common/Containers/contentContainer";
import ScrollableContainer from "../../components/common/Containers/scrollableContainer";
import ViewContainer from "../../components/common/Containers/viewContainer";
import Wallet from "../../components/combined/wallet";
import { useSelector } from "react-redux";
import { selectAccountData } from "../../components/redux_components/accountController";
import Coupon from "../../components/combined/coupon";
import BuyingWindow from "../../components/combined/buyingWindow";

const ShoppingPage = ({ navigation, onSignOut }) => {
  let { account } = useSelector(selectAccountData);
  let ownedCoupons = account.owned_coupons;
  let couponsToBuy = account.coupons_to_buy;
  const [modalVisible, setModalVisible] = useState(false);
  const [couponId, setCouponId] = useState(1);

  const renderOwnedCoupons = () => {
    return ownedCoupons.map((coupon, index) => (
      <Coupon
        key={index}
        id={coupon.id}
        name={coupon.company}
        category={coupon.category}
        description={coupon.description}
        code={coupon.code}
      />
    ));
  };

  const renderCouponsToBuy = () => {
    return couponsToBuy.map((coupon, index) => (
      <Coupon
        key={index}
        id={coupon.id}
        name={coupon.company}
        category={coupon.category}
        description={coupon.description}
        price={coupon.price}
        fit={true}
        even={index % 2 ? false : true}
        setModalVisible={setModalVisible}
        setCouponId={setCouponId}
      />
    ));
  };

  const renderCheckout = (couponId) => {
    const coupon = couponsToBuy.find((item) => item.id == couponId);
    return (
      <BuyingWindow
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        id={coupon.id}
        name={coupon.company}
        category={coupon.category}
        description={coupon.description}
        price={coupon.price}
        points={account.points}
      />
    );
  };

  return (
    <PrimaryContainer>
      <HeaderContainer>
        <Title size="big" color={true} shadow={true}>
          Kupony
        </Title>
      </HeaderContainer>
      <ContentContainer>
        <ScrollableContainer>
          <ViewContainer wider={true}>
            <ItemsList title="Twoje kupony:">{renderOwnedCoupons()}</ItemsList>
            <Wallet amount={account.points} />
            <ItemsList title="Kupony:" fit={true}>
              {renderCouponsToBuy()}
            </ItemsList>
          </ViewContainer>
        </ScrollableContainer>
      </ContentContainer>
      {renderCheckout(couponId)}
    </PrimaryContainer>
  );
};

export default ShoppingPage;
