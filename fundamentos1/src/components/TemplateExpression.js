const TemplateExpression = () => {
    const nome = "Murilo"
    const dados = {
        idade: 16,
        profissao: "Jogador Profissional de Roblox"
    }
    return(
        <div>
            <h2>Olá, {nome}! Seja bem vindo(a)</h2>
            <h2>Você é {dados.profissao} e tem {dados.idade} anos</h2>
            <p>{console.log("Usando a React")}</p>
        </div>
    );
};

export default TemplateExpression;