export const shouldDeployContract = async (web3, abi, data, from: string) => {
	const deployment = new web3.eth.Contract(abi).deploy({ data });
	const gas = await deployment.estimateGas();
	const {
		options: { address: contractAddress },
	} = await deployment.send({ from, gas });
	return new web3.eth.Contract(abi, contractAddress);
};