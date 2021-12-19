import { HARDHAT_PORT, HARDHAT_PRIVATE_KEY } from '@env';
import React, { useState } from 'react';
import localhost from 'react-native-localhost';
import Web3 from 'web3';

import NFT from '../../../artifacts/contracts/NFT.sol/NFT.json';
import NftMarket from '../../../artifacts/contracts/NftMarket.sol/NFTMarket.json';
import { shouldDeployContract } from '../Utils/deploy';


export const ContractContext = React.createContext({});

export default function ContractContextProvider(props: any) {
  const [nftContract, setNftContract] = useState(null);
  const [nftMarketContract, setNftMarketContract] = useState(null);

  const web3 = React.useMemo(
		() =>
			new Web3(
				new Web3.providers.HttpProvider(`http://${localhost}:${HARDHAT_PORT}`)
			),
		[HARDHAT_PORT]
	);

  React.useEffect(() => {
		void (async () => {
			const { address } = await web3.eth.accounts.privateKeyToAccount(
				HARDHAT_PRIVATE_KEY
			);
			const nftContract = await shouldDeployContract(
				web3,
				NFT.abi,
				NFT.bytecode,
				address
			)
      setNftContract(nftContract);
      const nftMarketContract = await shouldDeployContract(
        web3,
        NftMarket.abi,
        NftMarket.bytecode,
        address
      )
      setNftMarketContract(nftMarketContract);
		})();
	}, []);

	return (
		<ContractContext.Provider
			value={{
        nftContract,
        nftMarketContract,
        setNftContract,
        setNftMarketContract
      }}
		>
			{props.children}
		</ContractContext.Provider>
	);
}
