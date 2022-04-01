import { useEffect, useState} from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import NFTBalance from "components/NFTBalance";
import NFTTokenIds from "components/NFTTokenIds";
import { Menu, Layout} from "antd";
import SearchCollections from "components/SearchCollections";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Text from "antd/lib/typography/Text";
import NFTMarketTransactions from "components/NFTMarketTransactions";
const { Header, Footer } = Layout;



const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Common Pixel",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#01204f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Common Pixel", 
    //fontFamily: "Arial",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();



  const [inputValue, setInputValue] = useState("explore");

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <div style={{ 
      //backgroundImage: 'url("https://lh3.googleusercontent.com/3glNULcA0fDNqA_xNG_pfhlRbNYpJGgU8XRSJbcjtmJ-CM5EgwZdEkvKkL-Uhuxn5DMiUQSHMoaMH-qQFwUtwyH9_0eJ2FlQ9AaXLtQQoZuENfLe9ryhbxxc51dSjYKHQTMsqJa-P5I=w2400")',
      //backgroundRepeat: 'no-repeat',
      //width: '0px',
      
      
    }}>
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}>
          <Logo />
          <SearchCollections setInputValue={setInputValue}/>
          <Menu
            theme="dark"
            mode="vertical"
            style={{
              display: "flex",
              fontSize: "15px",
              fontWeight: "500",
              marginLeft: "50px",
              width: "100%",
            }}
            defaultSelectedKeys={["nftMarket"]}
          >
            <Menu.Item key="nftMarket" onClick={() => setInputValue("explore")} >
              <NavLink to="/NFTMarketPlace">🛒 Explore Market</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">🖼 Your Collection</NavLink>
            </Menu.Item>
            <Menu.Item key="transactions">
              <NavLink to="/Transactions">📑 Your Transactions</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/NFTMarketPlace">
              <NFTTokenIds inputValue={inputValue} setInputValue={setInputValue}/>
            </Route>
            <Route path="/Transactions">
              <NFTMarketTransactions />
            </Route>
          </Switch>
          <Redirect to="/NFTMarketPlace" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center" }}>
        <Text style={{ display: "block" }}>
          Welcome to NFT Crib Marketplace ⭐️ 
        </Text>

        <Text style={{ display: "block" }}>
          🙋 You have questions? Ask them on the {""}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://nftcrib.zendesk.com"
          >
            NFT Crib forum
          </a>
        </Text>

        <Text style={{ display: "block" }}>
          📖 Access the game here!{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://moralis.io?utm_source=boilerplatehosted&utm_medium=todo&utm_campaign=ethereum-boilerplat"
          >
            NFT_Crib
          </a>
        </Text>
      </Footer>
    </Layout>
    </div>
  );
};

//<img src="https://lh3.googleusercontent.com/aXXdXOU47qjGYw3V2CwCBcpD4kCkt5eUN55pkuhKsIgyGzPxzpEdcn0F-4aeKpkGBZL7oZWWyDtUr4zLmDhnjQP6dsW1SO7y_d1mngfQrUbuecv3IQ_f-oJqytIbqiccme2OnXbqnJg=w2400"></img>
export const Logo = () => (
  <div style={{ display: "flex" }}>
    <img src="https://lh3.googleusercontent.com/YDUr2TzF3iq0bFu7zMEsJEqknFoVZ5dXb7zDuerXdMWP3w6rnqYwyBbW4JlzQlURcnA_gw0dd09aZRzSNRfki1AFNJwjbGfSbOuwypxGyq7XcXqL8pkPWVWwoOgHaLCdD0vNJiAmONU=w2400"  width="290" height="70"></img>

    


    {/* <svg
      width="60"
      height="38"
      viewBox="0 0 50 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      
    >
      <img src="https://lh3.googleusercontent.com/aXXdXOU47qjGYw3V2CwCBcpD4kCkt5eUN55pkuhKsIgyGzPxzpEdcn0F-4aeKpkGBZL7oZWWyDtUr4zLmDhnjQP6dsW1SO7y_d1mngfQrUbuecv3IQ_f-oJqytIbqiccme2OnXbqnJg=w2400"></img>
      <path
        d="https://lh3.googleusercontent.com/aXXdXOU47qjGYw3V2CwCBcpD4kCkt5eUN55pkuhKsIgyGzPxzpEdcn0F-4aeKpkGBZL7oZWWyDtUr4zLmDhnjQP6dsW1SO7y_d1mngfQrUbuecv3IQ_f-oJqytIbqiccme2OnXbqnJg=w2400"
        fill="black"
      />
      <path
        d="https://lh3.googleusercontent.com/aXXdXOU47qjGYw3V2CwCBcpD4kCkt5eUN55pkuhKsIgyGzPxzpEdcn0F-4aeKpkGBZL7oZWWyDtUr4zLmDhnjQP6dsW1SO7y_d1mngfQrUbuecv3IQ_f-oJqytIbqiccme2OnXbqnJg=w2400"
        fill="#041836"
      />
      <path
        d="https://lh3.googleusercontent.com/aXXdXOU47qjGYw3V2CwCBcpD4kCkt5eUN55pkuhKsIgyGzPxzpEdcn0F-4aeKpkGBZL7oZWWyDtUr4zLmDhnjQP6dsW1SO7y_d1mngfQrUbuecv3IQ_f-oJqytIbqiccme2OnXbqnJg=w2400"
        fill="#B7E803"
      />
    </svg> */}

  </div>
);

export default App;
