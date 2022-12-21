import { Button, Input } from "@chakra-ui/react";

import { ERC20Interface, useContractFunction } from "@usedapp/core";
import { Contract } from "ethers";
import { useState } from "react";

interface DisapproveProps {
  contractAddress: string;
}

export const Disapprove: React.FC<DisapproveProps> = ({ contractAddress }) => {
  const contract = new Contract(contractAddress, ERC20Interface);
  const { state, send } = useContractFunction(contract, "approve");
  const [spender, setSpender] = useState("");

  return (
    <>
      <Input placeholder="spender address" onChange={e => setSpender(e.target.value)} />
      <Button onClick={() => send(spender, 0)} colorScheme="red">
        Revoke Allowance
      </Button>
      <pre>{JSON.stringify(state, undefined, 4)}</pre>
    </>
  );
};
