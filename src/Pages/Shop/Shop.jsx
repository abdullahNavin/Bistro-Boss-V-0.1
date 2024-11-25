import SectionBennar from "../Share/SectionBennar";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import usemenu from "../../Hook/usemenu";
import ShopMenu from "./ShopMenu";
import MenuTab from "./MenuTab";
import { useState } from "react";

const Shop = () => {
    const { menu } = usemenu()
    const [tabIndex, setTabIndex] = useState(0)
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    return (
        <div>
            <SectionBennar
                bgImg={'/src/assets/shop/banner2.jpg'}
                Title={'our shop'}
                contant={'will you like to try a dish'}
                textColor={'text-white'}
                my={true}
            ></SectionBennar>
            <div className="container mx-auto my-4">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className={'text-center my-8'}>
                        <Tab>Salad</Tab>
                        <Tab>Pizza</Tab>
                        <Tab>Soups</Tab>
                        <Tab>Desserts</Tab>
                        <Tab>Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <MenuTab category={salad} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category={pizza} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category={soup} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category={dessert} />
                    </TabPanel>
                    <TabPanel>
                        <MenuTab category={drinks} />
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Shop;