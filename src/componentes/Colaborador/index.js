import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corFundo}) => {
    return (
        <div className="colaborador">
            <div className="cabecalho" style={{backgroundColor: corFundo}}>
                <img src={imagem}></img>
            </div>
            <div className="rodape">
                <h3>{nome}</h3>
                <h4>{cargo}</h4>
            </div>

        </div> 
    )
}

export default Colaborador