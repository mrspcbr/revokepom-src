import { Button, Input, Heading } from "@chakra-ui/react";

import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { useEthers, shortenAddress } from "@usedapp/core";
import { useState } from "react";
import { Disapprove } from "../components/Disapprove";
import { isAddress } from "@ethersproject/address";

const Index = () => {
  const [tokenAddress, setTokenAddress] = useState("");
  const { activateBrowserWallet, account, deactivate, library } = useEthers();

  return (
    <Container height="100vh">
      <DarkModeSwitch/>
      <Button
        top="1rem"
        right="1rem"
        position="absolute"
        colorScheme="blue"
        onClick={account ? deactivate : activateBrowserWallet}
      >
        {account ? shortenAddress(account) : "Connect"}
      </Button>
      {console.log(library)}
      <br/><br/><br/><br/>
      <Heading fontSize="5rem" bgGradient="linear(to-l, #7928CA, #FF0080)" bgClip="text">
        revokePOM
      </Heading>
      <Main>
        <center><p>Enter the Token Address & the Spender Contract that you wish to Revoke.</p></center>
        <Input onChange={e => setTokenAddress(e.target.value)} placeholder="token address" />
        {isAddress(tokenAddress) && <Disapprove contractAddress={tokenAddress} />}
      </Main>
      <CTA/>
    </Container>
  );
};

export default Index;
