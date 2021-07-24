import { Button } from '@chakra-ui/core';
import { useWeb3React } from '@web3-react/core';
import React, { Component, useEffect, useState } from 'react';
import { withGun } from 'react-gun';
import { useUser } from '../context';
import { getSwapUsers, getPaths } from '../utils'

type GunProps = {
    gun: any,
    onLoggedIn: any
}

class ComponentThatUsesGun extends Component<GunProps> {
    componentDidMount() {
        // this.setState({});
    }

    render() {
        // if (!this.state) {
        //     return <div>Loading...</div>;
        // }
        return (
            <WithWeb3 {...this.props}/>
        )
    }
}

function WithWeb3(props): JSX.Element {
    const { account, library, chainId } = useWeb3React()
    const [values, setValues] = useState(null)
    const [gun] = useState(props.gun)
    const [loaded, setLoaded] = useState(false)
    const [authenticated, setAuthenticated] = useState(false)
    const [signature, setSignature] = useState(null)
    const [user, setUser] = useUser()
    const [users, setUsers] = useState(null)

    const getUser = async function () {
        setAuthenticated(true)
        let _user
        let alias = account + ":" + getPaths().data
        _user = gun.user().auth(alias, signature, res => {
            // console.log('-------- auth res -------', res)
            if (res.err) {
                gun.user().create(alias, signature, res => {
                    // console.log('-------- create res -------', res)
                    getUser()
                })
            } else {
                setUser(_user)
                setAuthenticated(true)
                return props.onLoggedIn()
            }
        }).recall({sessionStorage: true})
    }

    const auth = () => {
        library
            .getSigner(account)
            .signMessage('Verify: ' + account)
            .then((signature) => {
                setSignature(signature)                
            })
    }

    useEffect(() => {
        if (!loaded) {
            getSwapUsers(true, results=>{
                setUsers(results)
                setLoaded(true)
            })
        }
    })

    useEffect(() => {
        !authenticated && !signature? (
            console.log('not authed')
        ) : !authenticated && signature? (
            getUser()
        ) : (
            console.log('authenticated')
        )
    })

    return (
        !authenticated ? (
            <Button key="login" mr={3} type="button" onClick={() => {
                auth()
            }}>{users && users.filter(_user=>{ return _user.address == account}).length < 1 ? ('Register') : ('Authenticate')}</Button>
        ) : null
    )
}

export default withGun(WithWeb3);
// export default withGun(ComponentThatUsesGun);