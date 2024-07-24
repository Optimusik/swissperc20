import { ethers, network } from 'hardhat';
import { encryptDataField } from '@swisstronik/utils';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/src/signers';
import { HttpNetworkConfig } from 'hardhat/types';
import deployedAddress from '../utils/deployed-address';

const sendShieldedTransaction = async (
  signer: HardhatEthersSigner,
  destination: string,
  data: string,
  value: number
) => {
  const rpclink = (network.config as HttpNetworkConfig).url;

  const [encryptedData] = await encryptDataField(rpclink, data);

  return await signer.sendTransaction({
    from: signer.address,
    to: destination,
    data: encryptedData,
    value,
  });
};

async function main() {
  const contractAddress = deployedAddress;
  const [signer] = await ethers.getSigners();

  const contractFactory = await ethers.getContractFactory('TestToken');
  const contract = contractFactory.attach(contractAddress);

  const mintTx = await sendShieldedTransaction(
    signer,
    contractAddress,
    contract.interface.encodeFunctionData('mintToken', [signer.address]),
    0
  );
  await mintTx.wait();
  console.log('1 token minted to:', signer.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
