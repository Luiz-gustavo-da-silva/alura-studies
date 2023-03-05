import React from 'react';
import style from './Botao.module.scss';

interface IButao {
    children: React.ReactChild;
    type?: "button" | "submit" | "reset" | undefined;
}

class Botao extends React.Component <IButao>{
    render() {
        const { type = "button" } = this.props;
        return(
            <button type={type} className={style.Botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Botao;