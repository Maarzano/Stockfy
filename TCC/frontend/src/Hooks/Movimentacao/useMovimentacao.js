import { useEffect, useState } from "react"
import { buscarMovimentacao } from "../../Services/movimentacaoService";

export const useMovientacao = () => {
    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        async function carregarDados() {
            try{
                const dados = await buscarMovimentacao();
                setData(dados);
            }catch(e){
                console.error("Ocorreu um erro ao usar o hook de buscar movimentacoes: ", e);
                setErro(e);
            }finally{
                setLoading(false);
            }
        }
        carregarDados();
    }, []);
    return { loading, erro, data }
}