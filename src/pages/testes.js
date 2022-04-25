import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { useState, useEffect } from "react";
import swal from "sweetalert";

const Teste = () => {
  const now = new Date();
  const dataFlow = now.getHours() + ":" + now.getMinutes();
  const dataSoma = now.getHours() + ":" + now.getMinutes();
  const dateTest = 22+':'+24;
  const datasoma1 = <Flex bg="red">{dataFlow}</Flex>;
  return (
    <>
      <Box alignItems="center">
        {now.getDay()}
        <br />
        {now.getDate()}
        <br />
        {now.getMonth()}
        <br />
        {now.getFullYear()}
        <br />

        {dataFlow}
        <br />
        {dataFlow === dateTest ? datasoma1 :'' }
      </Box>
    </>
  );
};
export default Teste;
