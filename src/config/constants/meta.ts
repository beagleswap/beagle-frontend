import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'BeagleSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by BeagleSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: 'Home | BeagleSwap',
  },
  '/competition': {
    title: 'Trading Battle | BeagleSwap',
  },
  '/prediction': {
    title: 'Prediction | BeagleSwap',
  },
  '/farms': {
    title: 'Farms | BeagleSwap',
  },
  '/pools': {
    title: 'Pools | BeagleSwap',
  },
  '/lottery': {
    title: 'Lottery | BeagleSwap',
  },
  '/collectibles': {
    title: 'Collectibles | BeagleSwap',
  },
  '/ifo': {
    title: 'Initial Farm Offering | BeagleSwap',
  },
  '/teams': {
    title: 'Leaderboard | BeagleSwap',
  },
  '/profile/tasks': {
    title: 'Task Center | BeagleSwap',
  },
  '/profile': {
    title: 'Your Profile | BeagleSwap',
  },
}
