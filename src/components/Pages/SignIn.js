import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";
import Moralis from "moralis";
import { useMoralisWeb3Api } from "react-moralis";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { authenticate, isAuthenticated, user } = useMoralis();

  const Web3Api = useMoralisWeb3Api();
  useEffect(() => {
    ETHData();
  }, [isAuthenticated]);

  let navigate = useNavigate();

  function handleClick() {
    navigate("/writer");
  }

  const ETHData = async () => {
    if (isAuthenticated) {
      Moralis.authenticate().then(function (user) {
        FetchAPI();
        console.log(user.get("ethAddress"));
      });
    }

    const FetchAPI = async () => {
      const options = {
        chain: "polygon",
        address: user.address,
        token_address: "0x861856B01269a03AA786d76B92BBDBDA137A728c"
      };
      const polygonNFTs = await Web3Api.account.getNFTsForContract(options);

      if (polygonNFTs.total > 0) {
        handleClick();
      } else {
        alert("Error");
      }
    };
  };

  const login = async () => {
    if (!isAuthenticated) {
      await authenticate({ signingMessage: "Log in using Moralis" })
        .then(function (user) {
          console.log("logged in user:", user);
          console.log(user.get("ethAddress"));
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
    </div>
  );
}

export default SignIn;
