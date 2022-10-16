# Loanex

[Whitepaper](https://docs.google.com/document/d/1gC4-5ezdbsYf7dtI1o4kmi4wDFVLyPjDY4df8kLPPV4/edit#heading=h.k19oulcve8l0)

[Pitch](https://docs.google.com/presentation/d/17HcIuFA4IpPrRdaeh5Zqan08APi7YPVgKVU3ADe7rUI/edit?usp=sharing)

## Overview

P2P loans with any combination of quantity and type of tokens(ERC20, ERC1155, ERC721). Custom variables management such as interest, time and collateral for the loan.

### Arbitrum contracts

- [Contracts Repo](https://github.com/Nubicuo/nubicuo-contracts)
- Factory Address Contract: <https://goerli.arbiscan.io/address/0x1EBD0dB8c34860de5F1a6E4Da4B9fDD074e9F190>

### Tools

- [Subgraph for Treasure Marketplace](https://thegraph.com/hosted-service/subgraph/treasureproject/marketplace), get info like contract, name, floorPrice, and some stats for the users.

- [Subgraph for Loanex Marketplace](https://.)- Soon!, This is a kind of oracle for match the orders created through the contracts with the users that are looking for a specific item, for the next steps we want to indexed another marketplaces and staking contracts to improve the data for our users.

- [Chainlink Oracle Price feed](https://github.com/Nubicuo/arbi-hackathon/blob/dev/src/hooks/useOracle.js#L16), Using to convert the floorPrice that is in eth or magic(ERC20) to usd fiat reference and get better info to our users.

- [Quicknode RPC](https://github.com/Nubicuo/arbi-hackathon/blob/dev/src/hooks/useOracle.js#L13), To interact with our contracts in Arbitrum Goerli.

## Track

### Metaverse: `GameFi & NFT's`
