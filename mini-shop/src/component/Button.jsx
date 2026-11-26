
import style from "./style/Button.module.css"

function Button({action, type = "text", text = "button", img = "None" }){
    return (
        <button className={style.btn} b-type = {type} onClick={action}>
            {type == "text" ? text :
                                     <img src={img}></img>}
        </button>
    )
}

export default Button