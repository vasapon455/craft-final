import React from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import CartCardStatus from "../components/CartCardStatus";


const OrderTracking = () => {

    const cartData = [
        { id: 1, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1,status:"จัดส่งแล้ว" },
        { id: 2, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"ยกเลิก"  },
        { id: 3, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"กำลังจัดส่ง"  },
        { id: 4, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"จัดส่งไม่สำเร็จ"  },
        { id: 5, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"จัดส่งแล้ว"  },
        { id: 6, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1,  status:"จัดส่งไม่สำเร็จ"   },
        { id: 7, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"ยกเลิก"  },
        { id: 8, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"จัดส่งแล้ว"   },
        { id: 9, image: "shopping/item-example.jpeg", name: "name", price: "xxx บาท",quantity:1, status:"จัดส่งไม่สำเร็จ"  }
      ];

    return <Layout>
        <Section header="Order Tracking"> 
        <section id="cart">
          {cartData.map((data) => (
            <CartCardStatus
              id={data.id}
              image={data.image}
              name={data.name}
              price={data.price}
              quantity={data.quantity}
              status={data.status}
            />
          ))}
        </section>
        </Section>
    </Layout>
}

export default OrderTracking;