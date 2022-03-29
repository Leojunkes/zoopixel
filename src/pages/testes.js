import { Button, Flex, Text } from "@chakra-ui/react";
import data from "../../testeProd.json";
import { useState, useEffect } from "react";
import swal from "sweetalert";

const teste = () => {
  const [salario, setSalario] = useState([]);
  var numberData1 = data.produtos;

  useEffect(() => {
    const localStorageSalario = JSON.parse(localStorage.getItem("salary"));

    const salario1 =
      localStorage.getItem("salary") !== null ? localStorageSalario : [];
    console.log(salario);

    setSalario([...salario1]);
  }, []);

  const numberData = data.produtos.map((m) => <>{m.salário}</>);

  const initialValue = "";
  const sumWithInitial = numberData.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
  const testeAlert = () => {
    swal("lindo alerta galera");
  };

  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  console.log(data);

  const number2 = JSON.parse(JSON.stringify(data));
  //const number3 = number2.reduce((a, b) => a + b.points, 0);

  console.log(number2);

  //var soma = number2.reduce(function (soma, i) {
  //  return soma + i;
  //});
  const saveStorage = () => {
    localStorage.setItem("salary", JSON.stringify(salario));
    console.log(salario);
  };

  return (
    <>
      <Flex alignItems="center" flexDirection="column">
        {data.produtos.map((n) => (
          <Text>{n.salário}</Text>
        ))}
        <Button onClick={() => testeButton()} type="button">
          aperte
        </Button>
        <Text>{number2.nome}</Text>
        <Button onClick={saveStorage} type="button">
          salvar
        </Button>

        <Text></Text>
      </Flex>
    </>
  );
};
export default teste;
