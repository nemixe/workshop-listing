import '../../styles/globals.css'
import { Ropsten, DAppProvider, useEtherBalance, useEthers, Config } from '@usedapp/core'
import { getDefaultProvider } from 'ethers'

function MyApp({ Component, pageProps }) {
  const [chainId] = useState(Ropsten.chainId)
  const config = {
    readOnlyChainId: chainId,
    readOnlyUrls: {
      [Ropsten.chainId]: getDefaultProvider('ropsten'),
    },
  }
  
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  )
}

export default MyApp
