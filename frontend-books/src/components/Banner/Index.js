import Image from "next/image";
import { BannerContainer } from "./style";
import { FaSearch } from 'react-icons/fa';
import { useRouter } from "next/router";
import { useState } from "react";

function Banner() {
    const [search, setSearch] = useState("");
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    const router = useRouter();
    const handleClick = () => {
        router.push(`/${search}`);
    }
    return (
        <BannerContainer>
            <Image
                src={"/assets/banner.jpg"}
                alt='image'
                layout='fill'
                loader={({ src }) => src}
                objectPosition='center'
                objectFit='cover'
            />
            <div className="search">
                <input name="id" type="number" placeholder="Buscar por ID" value={search} onChange={handleChange} />
                <button onClick={handleClick}><FaSearch /></button>
            </div>
        </BannerContainer>
    );
}

export default Banner;