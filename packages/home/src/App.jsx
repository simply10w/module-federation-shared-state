import React from "react";
import { Layout, Divider, Row, Col, Button } from "antd";
import { RecoilRoot, useRecoilState } from "recoil";
const Header = React.lazy(() => import("nav/Header"));
const ResetButton = React.lazy(() => import("reset/ResetButton"));
const TheBill = React.lazy(() => import("reset/TheBill"));

import "./index.less";

import ProductCarousel from "./ProductCarousel";

function App() {
  return (
    <RecoilRoot>
      <Layout style={{ minHeight: 800 }}>
        <React.Suspense fallback={<div />}>
          <Header />
        </React.Suspense>
        <Layout.Content style={{ padding: "2em" }}>
          <React.Suspense fallback={<div />}>
            <ResetButton />
          </React.Suspense>
          <Row gutter={6}>
            <Col span={18}>
              <Divider orientation="left">Products You Might Like</Divider>
              <ProductCarousel />
            </Col>
            <Col span={6}>
              <h1>The Bill</h1>
              <React.Suspense fallback={<div />}>
                <TheBill />
              </React.Suspense>
            </Col>
          </Row>
        </Layout.Content>
      </Layout>
    </RecoilRoot>
  );
}

export default App;
