// this will be on home page
export const nftArray = new Array(50).fill(0).map((_, i) => ({ 
  description: 'NFT ' + i + ' description',
  id: i,
  name: 'NFT ' + i,
  url: 'https://picsum.photos/200/300?image=' + i,
}));

// my nft page
export const myNftArray = new Array(10).fill(0).map((_, i) => ({
  description: 'NFT ' + i + ' description',
  id: i,
  name: 'NFT ' + i,
  url: 'https://picsum.photos/200/300?image=' + i,
}));