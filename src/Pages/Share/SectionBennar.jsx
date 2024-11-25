
const SectionBennar = ({ my, bgImg, textColor, contant,Title }) => {
    return (
        <div className={my ? 'my-0' : 'my-11'}>
            <div style={{ backgroundImage: `url(${bgImg})` }} className=" object-fill bg-cover py-32 px-32">
                <div className={`${textColor} py-16 px-16 bg-[#000000c2] text-center`}>
                    <h1 className="uppercase text-2xl font-semibold mb-2">{Title} </h1>
                    <p>{contant}</p>
                </div>
            </div>
        </div>
    );
};

export default SectionBennar;