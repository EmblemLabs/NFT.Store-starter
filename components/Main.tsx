import { Box, Flex, Text, Input, Button, Link, Image, Stack, Spinner, useColorMode } from '@chakra-ui/core'
import {HStack} from '@chakra-ui/react'
import Loader from 'react-loader'
import Refreshing from './Refreshing'
import { useRouter } from 'next/router'
import { useWeb3React } from '@web3-react/core'
import { useEffect, useState } from 'react'
import { addListing, addSwapUser, getListings, getSwapUsers, getPaths } from '../utils'
import { useUser } from '../context'
import HotBid from "./HotBid";

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

  useEffect(() => {
    if (user && users && (users.filter(_user=>{return _user.id == user.is.alias}).length < 1)) {
      addSwapUser(user, result=>{
        setUsers(result);
        setState({ loaded: true })
      })
    }
  })

  useEffect(()=>{
    if (!listingSub && paths) {
      console.log("Subscribing to Listings")
      setListingSub(true)
      getListings((result)=>{
          setListings(result)               
      })
    }
  })

  useEffect(() => {
    if (!user && !users && !state.loaded) {      
      getSwapUsers(true, result=>{
        setUsers(result);
        setState({ loaded: true })
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
          {user? (
            <>
              <Text>Authenticated User: {user.is.alias}</Text>
              <HStack align="center">
                <Input value={post} onChange={event => setPost(event.target.value)} m={5} type="text" id="post" />
                <Button onClick={()=>{
                    addListing(user, post, (_listings)=>{
                      console.log('listings returned to featured', _listings)
                      // listings.get('listings-test1').map().val((k,v)=>{console.log(k,v)})
                      setPost('')
                    })
                }} mr={5}>Post</Button>
              </HStack>
              
            </>
          ) : (
            <Text>No Authenticated User</Text>
          )}
          
            <Text m={5} as={"h1"}>Registered Users</Text>

          {users? (
            users.map((_user, i)=>{
              return(
                <Text key={i}>{user && user.is.alias == _user.id ? ('Me:') : ('User:')} {_user.id}</Text>
              )
            })
          ) : (
            <Text>No Registered Users</Text>
          )}

          {/* {listings.length > 0 ? (
            <Text m={5} as={"h1"}> Posts </Text>
          ):null}
          {listings ? (
            listings.reverse().map(listing=>{
              return (
                // <Text key={listing.k}>entry: {listing.v.payload}</Text>
                <Image src={listing.image_url} />
              )
            })
          ) : null} */}

          <HotBid classSection="section" listings={listings} />

        </Box>
      </Flex>
    </Loader>
  )
}
