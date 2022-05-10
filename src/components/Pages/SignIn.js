import React, { useEffect } from 'react';
import { useMoralis } from "react-moralis";
import Moralis from 'moralis';
import { useMoralisWeb3Api } from "react-moralis";




function SignIn() {    

 


    const { authenticate, isAuthenticated, isAuthenticating, user, logout } = useMoralis();

    useEffect(() => {
		ETHData();
  }, [isAuthenticated]);

 const ETHData = async () => {
	if (isAuthenticated) {
		Moralis.authenticate().then(function (user) {
				FetchAPI();
				console.log(user.get('ethAddress'))
		})
    }


  const Web3Api = useMoralisWeb3Api();

  const FetchAPI = async () => {
      const options = {
        chain: "polygon",
        address: user.address,
        token_address: "0x861856B01269a03AA786d76B92BBDBDA137A728c",
      };
      const polygonNFTs = await Web3Api.account.getNFTsForContract(options);
      if( polygonNFTs.total > 0 ) {
       console.log("You have NFTs!");
      } else {
        console.log("You have no NFTs!");
      }
}

  


}

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
			console.log("logged in user:", user);
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

  return (
    <div>
      <h1>Moralis Hello World!</h1>
      <button onClick={login}>Moralis Metamask Login</button>
      <button onClick={logOut} disabled={isAuthenticating}>Logout</button>
    </div>
  );
}

export default SignIn;