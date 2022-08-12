import { ChainType } from 'src/types';

const typeSubstrate: ChainType = 'substrate';
const typeEthereum: ChainType = 'ethereum';

export const kusamaChains = {
  kusama: {
    id: 'kusama',
    display: 'Kusama',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fkusama.png&w=96&q=75',
    paraChainId: -1,
    ss58Prefix: 2
  },
  statemine: {
    id: 'statemine',
    display: 'Statemine',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fstatemine.png&w=96&q=75',
    paraChainId: 1000,
    ss58Prefix: 2
  },
  karura: {
    id: 'karura',
    display: 'Karura',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fkarura.png&w=96&q=75',
    paraChainId: 2000,
    ss58Prefix: 8
  },
  quartz: {
    id: 'quartz',
    display: 'Quartz',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fquartz.png&w=96&q=75',
    paraChainId: 2095,
    ss58Prefix: 255
  },
  bifrost: {
    id: 'bifrost',
    display: 'Bifrost',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fbifrost.png&w=96&q=75',
    paraChainId: 2001,
    ss58Prefix: 6
  },
  khala: {
    id: 'khala',
    display: 'Khala',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fkhala.png&w=96&q=75',
    paraChainId: 2004,
    ss58Prefix: 30
  },
  kintsugi: {
    id: 'kintsugi',
    display: 'Kintsugi',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fkintsugi.png&w=96&q=75',
    paraChainId: 2092,
    ss58Prefix: 2092
  },
  moonriver: {
    id: 'moonriver',
    display: 'Moonriver',
    type: typeEthereum,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fmoonriver.png&w=96&q=75',
    paraChainId: 2023,
    ss58Prefix: 1285
  },
  heiko: {
    id: 'heiko',
    display: 'Parallel Heiko',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fparallel.png&w=96&q=75',
    paraChainId: 2085,
    ss58Prefix: 110
  },
  kico: {
    id: 'kico',
    display: 'KICO',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fkico.png&w=96&q=75',
    paraChainId: 2107,
    ss58Prefix: 42
  },
  shadow: {
    id: 'shadow',
    display: 'Crust Shadow',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fcrust%20shadow.png&w=96&q=75',
    paraChainId: 2012,
    ss58Prefix: 66
  },
  calamari: {
    id: 'calamari',
    display: 'Calamari',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fcalamari.png&w=96&q=75',
    paraChainId: 2084,
    ss58Prefix: 78
  },
  integritee: {
    id: 'integritee',
    display: 'Integritee',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fintegritee.png&w=96&q=75',
    paraChainId: 2015,
    ss58Prefix: 13
  },
  altair: {
    id: 'altair',
    display: 'Altair',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Faltair.png&w=96&q=75',
    paraChainId: 2088,
    ss58Prefix: 136
  },
  crab: {
    id: 'crab',
    display: 'Darwinia Crab',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fcrab.png&w=96&q=75',
    paraChainId: 2105,
    ss58Prefix: 42
  },
  turing: {
    id: 'turing',
    display: 'Turing',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fturing.png&w=96&q=75',
    paraChainId: 2114,
    ss58Prefix: 51
  },
  shiden: {
    id: 'shiden',
    display: 'Shiden',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fshiden.png&w=96&q=75',
    paraChainId: 2007,
    ss58Prefix: 5
  },
  pichiu: {
    id: 'pichiu',
    display: 'Pichiu',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fpichiu.png&w=96&q=75',
    paraChainId: 2102,
    ss58Prefix: 42
  },
  basilisk: {
    id: 'basilisk',
    display: 'Basilisk',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Fbasilisk.png&w=96&q=75',
    paraChainId: 2090,
    ss58Prefix: 10041
  },
  listen: {
    id: 'listen',
    display: 'Listen',
    type: typeSubstrate,
    icon: 'https://resources.acala.network/_next/image?url=%2Fnetworks%2Flisten.png&w=96&q=75',
    paraChainId: 2118,
    ss58Prefix: 42
  }
};