import { Link } from 'react-router-dom';


function MenuItens(props) {
    return (
        <Link to={`/${props.href}`} ><i className={`${props.icon}`}></i>{props.label}</Link>
    )
}


export default MenuItens;