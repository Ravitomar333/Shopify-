import React from 'react';

const textualStyle = {
  maxWidth: '900px',
  margin: '0 auto',
  padding: '40px',
  background: '#18181b',
  borderRadius: '16px',
  border: '1px solid rgba(255, 255, 255, 0.05)',
  lineHeight: '1.8',
  color: '#a1a1aa'
};

const ReturnPolicy = () => {
  return (
    <div style={textualStyle}>
      <h2
        style={{
          color: '#fff',
          marginBottom: '20px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '15px'
        }}
      >
        Return & Refund Policy
      </h2>

      <p style={{ marginBottom: '20px' }}>
        At Shopify, we aim to provide a smooth and reliable shopping
        experience. If you are not satisfied with your purchase, you may
        initiate a return within 30 days of receiving your order, subject to
        the applicable return conditions.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        1. Eligibility for Returns
      </h4>

      <p style={{ marginBottom: '15px' }}>
        To be eligible for a return, the item should be unused, in the same
        condition in which it was received, and preferably kept in its
        original packaging. A valid order confirmation, receipt, or other
        proof of purchase may be required to process the return.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        2. Refund Processing
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Once the returned product is received and inspected, you will be
        notified about the status of your return. If the return is approved,
        the refund will be processed through the original payment method.
        Depending on the payment provider, it may take 5-7 business days for
        the refunded amount to appear in your account.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        3. Exempted Goods
      </h4>

      <p style={{ marginBottom: '15px' }}>
        Certain products may not be eligible for return or refund, including
        perishable items, customized products, digital goods, software, or
        products that have been damaged, altered, or tampered with after
        delivery.
      </p>

      <h4
        style={{
          color: '#f97316',
          marginTop: '25px',
          marginBottom: '10px'
        }}
      >
        4. Shipping & Return Costs
      </h4>

      <p>
        Customers may be responsible for return shipping costs unless the
        product was received damaged, defective, or incorrect. Any applicable
        shipping or restocking charges will be communicated during the return
        process.
      </p>
    </div>
  );
};

export default ReturnPolicy;