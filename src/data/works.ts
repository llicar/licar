import sisaLogo from "../assets/images/sisa-logo.png"
import tcollecLogo from "../assets/images/tcollec-logo.png"


import TcollecHome from "../assets/images/tcollec/home.png"
import TcollecSearch from "../assets/images/tcollec/search.png"
import TcollecCatalog from "../assets/images/tcollec/catalog.png"
import TcollecCart from "../assets/images/tcollec/cart.png"
import TcollecProduct from "../assets/images/tcollec/product.png"
import TcollecCheckout from "../assets/images/tcollec/checkout.png"

import sisaAdmissoes from "../assets/images/SISA/admissoes.png"
import sisaConsulta from "../assets/images/SISA/consulta.png"
import sisaDetalhes from "../assets/images/SISA/detalhes.png"
import sisaInicio from "../assets/images/SISA/inicio.png"
import sisaLogin from "../assets/images/SISA/login.png"
import sisaNovaAdmissao from "../assets/images/SISA/nova-admissao.png"
import sisaUniformes from "../assets/images/SISA/uniformes.png"

type TecnologiesTypes= {
    name: string,
    color:string
}

export type WorkTypes = {
    name: string,
    description: string,
    about: string,
    thumb: string,
    stack: TecnologiesTypes[]
    repository: string
    images:string[]
    site?:string
}



const tecnologies:TecnologiesTypes[] = [
    {
        name:'ReactJs',
        color:'#B6CEF0'
    },
    {
        name:'Javascript',
        color:'#DFD28D'
    },
    {
        name:'Nodejs',
        color:'#B4C5BB'
    },
    {
        name:'StyledComponents',
        color:'#ECC0E5'
    },
    {
        name:'MySQL',
        color:'#79A6B0'
    },
    {
        name:'AWS',
        color:'#D8B98A'
    },
    {
        name:'SASS',
        color:'#B073A7'
    },
    {
        name:'TypeScript',
        color:'#698EC3'
    },
]

const worksData: WorkTypes[] = [
    {
        name: "sisa",
        description: "Sistema para gestão de processos de departamento pessoal e RH.",
        about: "Trabalhando no departamento pessoal, percebi a oportunidade de otimizar processos com tecnologia e colocar em prática meus conhecimentos em desenvolvimento de software. Realizei o levantamento de requisitos, ouvi nescessidades dos funcionarios e seus problemas em relação a processos, então propus o desenvolvimento do SISA, um sistema completo que automatiza processos como admissão, controle de ausências e emissão de documentos e outros processos internos da instituição. O SISA utiliza ReactJs no front-end, NodeJs e ExpressJs na API e banco de dados MySQL na nuvem.",
        thumb: sisaLogo,
        stack: [tecnologies[1],tecnologies[0],tecnologies[2],tecnologies[4],tecnologies[3],tecnologies[5]],
        repository:"https://github.com/llicar/SISA",
        images:[sisaLogin,sisaAdmissoes,sisaConsulta,sisaDetalhes,sisaNovaAdmissao,sisaInicio,sisaUniformes],
        site:undefined

    },
    {
        name: "thecollections",
        description: "eCommerce de moda completo, desenvolvido com as tecnologias mais atuais para fins de estudo.",
        about: `Sabe quando você entra em uma loja virtual e fica admirando o layout e o funcionamento da loja? Eu sempre tive essa curiosidade de saber como é criar um ecommerce do zero. Foi assim que eu criei o thecollections, uma loja virtual de roupas que eu desenvolvi com TypeScript, React e SASS. O resultado ficou bem legal! A loja tem um design limpo e elegante, do jeitinho que eu gosto quando faço minhas compras online.`,
        thumb: tcollecLogo,
        stack: [tecnologies[7],tecnologies[0],tecnologies[6]],
        repository:"https://github.com/llicar/thecollections",
        images:[TcollecHome,TcollecSearch,TcollecCatalog,TcollecProduct,TcollecCart,TcollecCheckout],
        site:'https://thecollections.vercel.app/'

    }
]

export default worksData