import React, {useCallback, useEffect} from 'react';
import Page from "../components/Page";
import ProductCard from "../components/Product/ProductCard";

import {Button} from "@mui/material";
import axios from "axios";
import {actions, useEth} from "../contexts/EthContext";
import Web3 from "web3";
import Dai from "../contracts/Dai.json";
import artifact from "../contracts/PaymentProcessor.json";

const API_URL = 'http://localhost:5000';
const items = [
    {id:1, price: Web3.utils.toHex('100')}
]



const Home = () => {

    const { state: { contract,networkID, address } } = useEth();

    //Test

    const web3 = new Web3(Web3.givenProvider || "ws://localhost:7545");


    let dai
    useEffect(() => {
        const tryInit = async () => {
            try {
                const { abi } = Dai;
                dai = new web3.eth.Contract(abi, address);
            } catch (err) {
                console.error(err);
            }
        };

        tryInit();
    }, []);


const buy = async  (item) => {
    const response1 = await axios.get(`${API_URL}/api/payment/${1}`);
    const tx1 = await dai.methods.approve(address, item.price);
    await tx1.wait;
    console.log(response1.data)
    const tx2 =  await contract.methods.pay(item.price, response1.data.id);
    await  tx2.wait

    await new Promise(resolve => setTimeout(resolve, 5000))
    const response2 = await axios.get(`${API_URL}/api/orders/${response1.data.id}`);
    console.log(response2)
}
return(
    <Page>
        <Button onClick={() => buy(items[0])}>
            Buy item
        </Button>

    </Page>
)}
export default Home;