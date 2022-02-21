import { Flex } from "@chakra-ui/react";
import { useState } from "react/cjs/react.production.min";

const teste = () => {
  const [isteste,setIsteste] = useState();
  return (
    <>
      <Flex>
        <Button type="button">aperte</Button>
      </Flex>
    </>
  );
};
