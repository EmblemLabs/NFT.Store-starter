import { Box, Flex, Text, Input, Button, Link, Image, Stack, Spinner, useColorMode } from '@chakra-ui/core'
import {HStack} from '@chakra-ui/react'
import Loader from 'react-loader'
import Refreshing from './Refreshing'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { addListing, addSwapUser, getListings, getSwapUsers, getPaths, getAsks, getGunCollectionAsList } from '../utils'
import { useUser } from '../context'
import HotBid from "./HotBid";
import Popular from "./Popular";

export default function Main() {
  const { query } = useRouter()
  const { account, chainId } = useWeb3React()
  const [state, setState] = useState({ loaded: false })
  const [loadingApi, setLoadingApi] = useState(false)
  const [user, setUser] = useUser()
  const [users, setUsers] = useState(null)
  const [post, setPost] = useState('')
  const [listings, setListings] = useState([])
  const [listingSub, setListingSub] = useState(false)
  const [paths, setPaths] = useState(getPaths())
  const [asks, setAsks] = useState(null)

  const [acct, setAcct] = useState('')
  useEffect(() => {
    if (account && acct != account) {
      setAcct(account)
      setState({ loaded: false })
      setUser(null)
      setListings([])
      setListingSub(false)
    }
  }, [account, acct])

  // useEffect(() => {
  //   if (user && users && (users.filter(_user=>{return _user.id == user.is.alias}).length < 1)) {
  //     addSwapUser(user, result=>{
  //       setUsers(result);
  //       setState({ loaded: true })
  //     })
  //   }
  // })

  useEffect(()=>{
    if (!listingSub && paths) {
      // console.log("Subscribing to Listings")
      setListingSub(true)
      getListings((result)=>{
          setListings(result)               
      })
    }
  })

  useEffect(() => {
    if (!user && !users && !state.loaded && paths) {      
      getSwapUsers(true, result=>{
        setUsers(result);
        setState({ loaded: true })
      })   
    }
  })

  useEffect(() => {
    if (user && !asks) {      
      getAsks(result=>{
        // console.log("asks", result)
        setAsks(result);
        // setState({ loaded: true })
      })   
    }
  })

  

  useEffect(() => {
    if (!user && users && !state.loaded) {
      setState({ loaded: true })
    }
  })

  const [chain, setChain] = useState(chainId)
  useEffect(() => {
    if (chainId && chain != chainId) {
      setChain(chainId)
      setState({ loaded: false })      
    }
  }, [chainId, chain])

  return (
    <Loader loaded={state.loaded}>
      {loadingApi ? <Refreshing /> : ''}
      
      <Flex w="100%" justify="center" flexWrap="wrap" mt={10}>
        <Box w={"100%"}  textAlign="center">

          {users && users.length > 0 ? (
            <Popular users={users} handleClick={(_asks)=>{
              // console.log("Bubbling Up", _asks)
              setAsks(getGunCollectionAsList(_asks))
            }}/>
          ) : null }
          {asks && asks.length > 0 ?  (
            <HotBid classSection="section" listings={asks} title="My Favorites" />
          ) : null }
          {listings.length > 0 ?  (
            <HotBid classSection="section" listings={listings} />
          ) : null }

          

        </Box>
      </Flex>
    </Loader>
  )
}
