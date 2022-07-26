import React from 'react'
import Image from 'next/image'
import Logo from './../../public/images/nmobile_black.png'
import Store1 from './../../public/images/store1.JPG'
import Store2 from './../../public/images/store2.png'
import Store3 from './../../public/images/store3.JPG'

export default function Aboutus() {
  return (
      <div className='contentAboutus'>
        <h1>Մեր <span>մասին</span></h1>
        <div className='aboutus'>
            <div className="itemsAboutus">
                <div className="itemAboutus">
                  {/* <Image src="/images/store1.JPG" alt='Store1'></Image> */}
                      <img src={Store1.src} alt="store1" data-aos="fade-up" data-aos-duration="1500"/>
                      <img src={Store3.src} alt="store3" data-aos="fade-down" data-aos-duration="2000"/>
                </div>
                <div className="itemAboutus">
                  <img src={Store2.src} alt="store2" />
                    <p><img src={Logo.src} alt="logo" />-ն իր գործունեությունն իրականացնում է 2018թ.-ից: Հետագայում իր բարեխիղճ և բարձրորակ ծառայությունների մատուցման շնորհիվ ընկերությունը արագորեն նվաճեց հաճախորդների վստահությունը: Տվյալ պահին «Նյու մոբայլ»-ը ներկայացնում է մասնագիտացված խանութ-սրահներ քաղաք Երևանում և Մասիսում: 
Հավատարիմ լինելով՝ ընկերությունը համագործակցում է միայն բաձրորակ ապրանք արտադրող համաշխարհային բրենդների հետ, ինչպիսիք են՝ Samsung, Nokia, Apple, Lenovo, Motorola, HTC, Sony, Canyon , ACME, Remax և այլ ապրանքանիշները: «Նյու մոբայլ» -ն <span>իր հաճախորդներին առաջարկում է միայն որակյալ ապրանք՝ տրամադրելով 1 տարվա պաշտոնական երաշխիք անմիջապես արտադրողից: Ընկերությունն իր հաճախորդին առաջարկում է ոչ միայն բջջային հեռախոսներ, այլ նաև բազմատեսակ տեխնիկա՝ Համակարգիչներ, պլանշետներ և այլն: Ընկերության խանութ-սրահներն աշխատում են շաբաթը 7 օր, ընկերությունը համագործակցում է Հայաստանում գործող գրեթե բոլոր առաջատար բանկերի հետ, ապառիկը ձևակերպվում է տեղում և այս ամենը ուղղված է միայն հաճախորդների հարմարավետ, արագ և շահավետ գնումներ կատարելուն: Չնայած առկա տեխնիկայի բարձրորակ ապրանքատեսականու հսկայական ծավալներին՝ իր որդեգրած քաղաքականության շնորհիվ ընկերությունն օրեցօր աճում և ընդլայնվում է՝ իր հաճախորդներին ներկայանալով տեխնիկայի ավելի լայն ու ժամանակակից տեսականիով:</span></p>
                </div>
            </div>
        </div>
      </div>
  )
}
