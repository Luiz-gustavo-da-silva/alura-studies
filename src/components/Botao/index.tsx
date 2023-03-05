import React from 'react';
import style from './Botao.module.scss';

interface IButao {
    children: React.ReactChild,
    type?: "button" | "submit" | "reset" | undefined,
    onClick?: ()=>void,

}

class Botao extends React.Component <IButao>{
    render() {
        const { type = "button", onClick } = this.props;
        return(
            <button onClick={onClick} type={type} className={style.Botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;