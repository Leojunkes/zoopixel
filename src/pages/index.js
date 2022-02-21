import Head from "next/head";
import Image from "next/image";

import { Button, Flex, Input } from "@chakra-ui/react";
import Content from "../components/content";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoo-Pixel</title>
      </Head>
      <Content />
    </>
  );
}
