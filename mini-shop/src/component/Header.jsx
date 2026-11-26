import { Link, useNavigate } from "react-router"
import logoImg from "./assets/logo.webp"
import style from "./style/Header.module.css"
import Button from "./Button"

function Header(){

    const navigate = useNavigate()

    function toBasket(){
        navigate("/basket")
    }

    return (
        <header>
            <img className={style.logo} src={logoImg}/>
            <h1 className={style.title}>MiniShop</h1>
            <Button action={toBasket} type="img" img={logoImg}></Button>
        </header>
    )
}

export default Header