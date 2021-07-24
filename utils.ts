import { BigNumber } from '@ethersproject/bignumber'
import { JSBI, Fraction, Percent, Price, Token, WETH, ChainId } from '@uniswap/sdk'
import BN from 'bn.js'
import { UrlObject } from 'url'
import { isAddress, toWei, fromWei, Unit } from 'web3-utils'

import Gun from 'gun';

require('gun/lib/open')
require('gun/lib/path')
require('gun/lib/unset')

import 'gun/sea'

import { isIPFS } from './constants'

// const gun = Gun(['https://emblem-gun.herokuapp.com/gun'])
let gun = Gun(['https://emblem-gun.herokuapp.com/gun']);
let API = 'https://gun-api-ev.herokuapp.com'//'http://localhost:3001'//
let PATHS: {root: string, data: never, blockchains: never, users: never}

export function getGun() {
  return gun
}

const SWAP_USER_PATH = 'ev-swap40'
const SWAP_LISTINGS_PATH = `listings-test10`


function getFromGun(path, cb) {  
  gun.get(path + '/', function(ack){
    if(!ack.put){
      console.log('Not Found')
      return cb({})
    } else {
      return cb(ack.put)
    }
  })
}

getRemoteGunPaths(_paths=>{
  PATHS = _paths
})

function getFromGunObject(path): any {
  return gun.get(path + '/')
}

function withinGunCollection(collection, needle) {
  return asList(collection).filter(item=>{return item.id == needle}).length > 0
}

export function asList(collection) {
  return Object.keys(collection).map((key) => { return { "id": key, "val": collection[key] } }).filter(item => { return item.val != "" && item.id != "_" })
}

export function getSwapUsers(_asList, cb) {
  gun.get("~@"+PATHS.root)
    .map()
    .get(PATHS.data)
    .get(PATHS.users)
    .open(users=>{
      // console.log("users", users)
      return cb(getGunCollectionAsList(users))
    })
}

export function addSwapUser(_user, cb) {
  console.log(_user)
  getSwapUsers(false, users=>{
    if (!withinGunCollection(users, _user.is.alias)) {
      getFromGunObject(SWAP_USER_PATH).get(_user.is.alias).put(_user.is.pub, ()=>{
        return addSwapUser(_user, cb)
      });      
    } else {
      return cb(asList(users))
    }    
  })
}

export function addListing(_user, payload, cb) {
  let id = Math.floor(Math.random() * 4294967296);
  console.log(_user)
  _user.get(SWAP_LISTINGS_PATH).get(id).put({id: id, payload: payload}) 
  return cb(true)
}

export function getListings(cb) {
  gun.get("~@"+PATHS.root)
    .map()
    .get(PATHS.data)
    .get(PATHS.blockchains)
    .map()
    .get("contracts")
    .open(item => {
    let forSale = getGunCollectionAsList(item)
                .filter(item=>{return item['For Sale'] == true})
    return cb(forSale)
  })
}

export function getAsks(cb){
  console.log("Asks?")
  let _user: any = gun.user()
  if (_user.is) {
    gun.user().get("asks").open(asks=>{
      asks = getGunCollectionAsList(asks)
      return cb(asks)
    })    
  } else {
    return cb(false)
  }
}

export function getGunCollectionAsList(collection) {
  let list = []
  Object.keys(collection).forEach(k => {
    list.push(collection[k])        
  })
  return list
}

async function getRemoteGunPaths(cb) { 
    const response = await fetch(API + '/path', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    const jsonData = await response.json()
    return cb(jsonData)
}

export function getPaths() {
  // console.log('returning paths', PATHS)
  return PATHS
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions#Escaping
export function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}

export function shortenHex(hex: string, length = 4): string {
  return `${hex.substring(0, length + 2)}…${hex.substring(hex.length - length)}`
}

export const CHAIN_ID_NAMES: { [key: number]: string } = {
  1: 'Ethereum Mainnet',
  3: 'Ropsten',
  4: 'Rinkeby',
  5: 'Görli',
  42: 'Kovan',
  80001: 'Mumbai',
  137: 'Polygon',
  97: 'bnbsc',
  100: 'xDai',
  56: 'Binance Smart Chain',
  250: 'Fantom'
}

export const INFURA_PREFIXES: { [key: number]: string } = {
  1: 'mainnet',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan',
  80001: 'mumbai',
  137: 'matic',
  97: 'bnbsc',
  100: 'xdai',
  56: 'bsc',
  250: 'fantom'
}

export enum ExplorerTXType {
  Account,
  TokenBalance,
  Transaction,
  Token
}

export const EXPLORER_PREFIXES: { [key: number]: string } = {
  1: 'etherscan.io',
  3: 'ropsten.etherscan.io',
  4: 'rinkeby.etherscan.io',
  5: 'goerli.',
  42: 'kovan.',
  80001: 'mumbai-explorer.matic.today',
  137: 'polygonscan.com',
  97: 'bnbsc',
  100: 'blockscout.com/xdai/mainnet',
  56: 'bscscan.com',
  250: 'ftmscan.com'
}

export const NETWORK_SHORTNAMES: { [key: number]: string } = {
  1: 'eth',
  3: 'ropsten',
  4: 'rinkeby',
  5: 'goerli',
  42: 'kovan',
  80001: 'mumbai',
  137: 'matic',
  97: 'bsctest',
  100: 'xdai',
  56: 'bsc',
  250: 'fantom'
}

interface ExplorerTypeData {
  [ExplorerTXType.Account]: [number, string]
  [ExplorerTXType.TokenBalance]: [Token, string]
  [ExplorerTXType.Transaction]: [number, string]
  [ExplorerTXType.Token]: [number, string]
}

export function formatEtherscanLink(type: ExplorerTXType, data: ExplorerTypeData[ExplorerTXType]): string {
  switch (type) {
    case ExplorerTXType.Account: {
      const [chainId, address] = data as ExplorerTypeData[ExplorerTXType.Account]
      return `https://${EXPLORER_PREFIXES[chainId]}/address/${address}`
    }
    case ExplorerTXType.TokenBalance: {
      const [token, address] = data as ExplorerTypeData[ExplorerTXType.TokenBalance]
      return `https://${EXPLORER_PREFIXES[token.chainId]}/token/${token.address}?a=${address}`
    }
    case ExplorerTXType.Transaction: {
      const [chainId, hash] = data as ExplorerTypeData[ExplorerTXType.Transaction]
      return `https://${EXPLORER_PREFIXES[chainId]}/tx/${hash}`
    }
    case ExplorerTXType.Token: {
      const [chainId, hash] = data as ExplorerTypeData[ExplorerTXType.Transaction]
      return `https://${EXPLORER_PREFIXES[chainId]}/token/${hash}`
    }
  }
}

const SAI = new Token(ChainId.MAINNET, '0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359', 18)
export function getTokenDisplayValue(token: Token): string {
  return token.equals(WETH[token.chainId]) ? 'ETH' : token.equals(SAI) ? 'SAI' : token.symbol ?? 'UNKNOWN'
}

export function getPercentChange(referenceRate: Price, newRate: Price, flipOrder = false): Percent {
  // calculate (referenceRate - newRate) / referenceRate or (newRate - referenceRate) / referenceRate
  const difference = new Fraction(
    flipOrder
      ? JSBI.subtract(
          JSBI.multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator),
          JSBI.multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator)
        )
      : JSBI.subtract(
          JSBI.multiply(referenceRate.adjusted.numerator, newRate.adjusted.denominator),
          JSBI.multiply(newRate.adjusted.numerator, referenceRate.adjusted.denominator)
        ),
    JSBI.multiply(referenceRate.adjusted.denominator, newRate.adjusted.denominator)
  )
  const percentChange = difference.multiply(referenceRate.adjusted.invert())
  return new Percent(percentChange.numerator, percentChange.denominator)
}

export function formatQueryParams(params: { [key: string]: string }): string {
  const formatted = Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join('&')
  return formatted === '' ? formatted : `?${formatted}`
}

export function validImage(data: string | string[]) {
  if (data && (data.includes('http') || data.includes('data:image'))) {
    return true
  } else {
    return false
  }
}

export function isETHAddress(address: string) {
  return isAddress(address)
}

export function toContractValue(amount: BN, decimal: Unit | undefined) {
  return toWei(amount, decimal)
}

export function fromContractValue(amount: string | BN, decimal: Unit | undefined) : number {
  return Number(fromWei(amount, decimal))
}
