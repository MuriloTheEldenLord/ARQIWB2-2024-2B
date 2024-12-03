const Eventos = () => {
    
    const handleMeuEvento = () => {
        console.log("Clicou no botão!");
    }
    
    return(
        <div>
            <div>
                <button onClick={handleMeuEvento}>Clique aqui</button> 
            </div>
            <br></br>
            <div>
                <button onClick={()=> console.log("Botão foi Clicado!")}>Clique aqui</button>
            </div>
            <br></br>
            <div>
                <button onClick={()=>{
                    if(true){
                        console.log("Isso não devera estar aqui")
                    }
                }}>Clique aqui</button>
            </div>
        </div>
    );
};

export default Eventos;