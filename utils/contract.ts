import ContractAbi from "../artifacts/contracts/Web3Video.sol/Web3Video.json";
import contractAddress from "../contractInfo/Web3Video.json"
import { ethers } from "ethers";


export default async function getContract() {
  const provider = new ethers.BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();
  const address = contractAddress.contractAddress;
  const contract = new ethers.Contract(
    address,
    ContractAbi.abi,
    signer,
  )
  return contract;
}