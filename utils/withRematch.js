import React from 'react'
import {connect, Provider} from 'react-redux'

const __NEXT_REMATCH_STORE__ = '__NEXT_REMATCH_STORE__'

const checkServer = () =>
    Object.prototype.toString.call(global.process) === '[object process]'

const getOrCreateStore = (initStore, initialState) => {
    if (checkServer() || typeof window === 'undefined') {
        return initStore(initialState)
    }

    if (!window[__NEXT_REMATCH_STORE__]) {
        window[__NEXT_REMATCH_STORE__] = initStore(initialState)
    }
    return window[__NEXT_REMATCH_STORE__]
}

export default (...args) => Component => {
    const [initStore, ...connectArgs] = args

    const ComponentWithRematch = (props = {}) => {
        const {store, initialProps, initialState} = props;
        const ConnectedComponent = connect.apply(null, connectArgs)(Component)
        return React.createElement(
            Provider,
            {
                store:
                    store && store.dispatch
                        ? store
                        : getOrCreateStore(initStore, initialState)
            },
            React.createElement(ConnectedComponent, initialProps)
        )
    }

    ComponentWithRematch.getInitialProps = async (props = {}) => {
        const isServer = checkServer()
        const store = getOrCreateStore(initStore)


        const initialProps = Component.getInitialProps
            ? await Component.getInitialProps({...props, isServer, store})
            : {}
        return {
            store,
            initialState: store.getState(),
            initialProps,
        }
    }

    return ComponentWithRematch
}
