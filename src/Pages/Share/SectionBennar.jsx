
const SectionBennar = ({my,bgImg,textColor,bgColor,contant}) => {
    return (
        <div className={my ? 'my-0' : 'my-11'}>
            <div style={{ backgroundImage: `url(${bgImg})` }} className=" object-fill bg-cover py-32 px-32">
                <div className={`${textColor} py-16 px-16 ${bgColor} text-center`}>
                    <h1 className="uppercase text-2xl font-semibold mb-2">Book now </h1>
                    <p>{contant}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionBennar;