import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import LoadingIndicator from "../components/LoadingIndicator";
import Section from "../components/Section";
import { useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();
  const [buy,setBuy] = useState(false)
  

  useEffect(()=>
    navigate("/order-tracking"))


  return (
    <Layout>
      <Section header="สั่งซื้อสินค้าสำเร็จ">
        <p className="sub-heading black">กำลังกลับสู่หน้าแรก</p>

        <LoadingIndicator></LoadingIndicator>
      </Section>
    </Layout>
  );
};

export default CheckOut; 
