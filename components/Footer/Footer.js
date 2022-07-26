import React from 'react'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from "@mui/icons-material/Instagram"
import YouTubeIcon from '@mui/icons-material/YouTube'
import Image from 'next/image'

const Footer = () =>{
	return(
		<div id="footer" className="footer">
    <div className="up">
        <ul className="ulf">
        <li className="follotowme">Միացե՛ք մեզ՝</li>
            <li className="inset"><Link href="https://www.facebook.com/MobileArmeniaNew" passHref><a target="_blank"><FacebookIcon/></a></Link></li>
            <li><Link href="https://instagram.co/newmobile" passHref><a target="_blank"><InstagramIcon /></a></Link></li>
            <li><Link href="https://youtube.com/newmobile" passHref ><a target="_blank"><YouTubeIcon /></a></Link></li>
        </ul>
        <ul className="menu_footer">
            <li><Link href="/#">Home</Link></li>
            <li><Link href="/#">Contact</Link></li>
            <li><Link href="/#">Store</Link></li>
            <li><Link href="/#">About me</Link></li>
        </ul>
    </div>
    <div className="middle">
        <ul className="uld">
            <li><span><b>+374 44-25-05-25</b><small>(WhatsApp(+374 44-25-05-25))</small> <br></br><i>Սիրով կպատասխանենք Ձեր բոլոր հարցերին</i></span> </li>
            <li className="worked_time"><span><b>Աշխատանքային ժամերը</b> <br></br><i>Երկ-Շբթ 10:00 -  20:00<br></br>  Կիրակի 11:00 - 19:00</i></span></li>
            <li> <span><b>Սերվիս կենտրոն</b> <br></br><i><Link href="/mysqltnayin/newmobile/" className="service_centre">Որակյալ սպասարկում</Link></i></span></li>
        </ul>
    </div>
    <div className="down">
        <ul className="ul_logo">
            <li>
                <Image src="/images/nmobile_white.png" className="logofooter" alt="Logo" width={70} height={70}/>
            </li>
                {/* <img src={Logo} alt="NewMobileLogo" className="logofooter" /></li> */}
            <li>{(new Date().getFullYear())} newmobile.am  <span>{'\u00A0'}Բոլոր իրավունքները պաշտպանված են</span></li>
        </ul>
        <ul className="cards">
            <li><Image src="/images/visa.png" alt="Visa" width={61} height={19}/></li>
            <li><Image src="/images/mastercard.png" alt="MasterCard" width={49} height={29}/></li>
            <li><Image src="/images/maestro.png" alt="Maestro" width={50} height={30}/></li>
            <li><Image src="/images/arca.png" alt="Arca" width={50} height={31}/></li>
        </ul>
    </div>
</div>
)
}
export default Footer