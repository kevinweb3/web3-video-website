/**
 *
 * @param hash - IPFS hash
 * @returns IPFS link
 */
const IPFS_GATEWAY = 'https://w3s.link/ipfs/'
const getIPFSLink = (hash: string): string => {
  const gateway = IPFS_GATEWAY;

  return `${gateway}${hash}`;
};

export default getIPFSLink;
