// @refresh reload
import { Suspense } from "solid-js";
import { Body, ErrorBoundary, FileRoutes, Head, Html, Link, Meta, Routes, Scripts, Title } from "solid-start";
import Layout from "./components/layout/Layout";
import "./root.css";
import "../flickity/flickity.css";

export default function Root() {
  const bgColor = ["var(--white)", "aliceblue"];

  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Bare</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta name="theme-color" content="#000000" />
        <Link rel="shortcut icon" type="image/ico" href="/tabIcon.png" />
        <Link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Francois+One" />
      </Head>
      <Body class="bg-pattern" style={`--c1: ${bgColor[0]}; --c2: ${bgColor[1]}`}>
        <Suspense>
          <ErrorBoundary>
            <Layout>
              <Routes>
                <FileRoutes />
              </Routes>
            </Layout>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
        <script src="../flickity/flickity.pkgd.min.js"></script>
      </Body>
    </Html>
  );
}

