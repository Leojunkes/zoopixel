import { Button, Flex, Text } from "@chakra-ui/react";
import data from "../../testeProd.json";

const teste = () => {
  const number = ["10", "10", "10", "25", "10"];
  const numberData = data.produtos.map((n) => {
    n.salário;
  });
  const tudo = { ...numberData };
  const initialValue = "";
  const sumWithInitial = number.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  var soma = numberData.reduce(function (soma, i) {
    return soma + i;
  });

  console.log(tudo);

  return (
    <>
      <Flex>
        <Button type="button">aperte</Button>
        <Text>{numberData}</Text>

        <Text>{sumWithInitial}</Text>
      </Flex>
      <Text>{soma}</Text>
    </>
  );
};
export default teste;
