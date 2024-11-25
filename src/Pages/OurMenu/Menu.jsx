
import SectionBennar from '../Share/SectionBennar';
import Title from '../Share/Title';
import SharedMenu from '../Share/SharedMenu';
import usemenu from '../../Hook/usemenu';
import RecommandSection from '../Home/RecommandSection';

const Menu = () => {
    const { menu } = usemenu()
    const todaysOffer = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <SectionBennar bgImg={'/src/assets/menu/banner3.jpg'} my={true} Title={'our menu'} textColor={'text-white'} contant={'WOULD YOU LIKE TO TRY A DISH'} ></SectionBennar>
            <Title subHeading={"Don't miss"} heading={"today's offer"}></Title>
            {/* {
                todaysOffer.map(item => <SharedMenu item={item}></SharedMenu>)
            } */}
            <RecommandSection menu={todaysOffer}></RecommandSection>
        </div>
    );
};

export default Menu;