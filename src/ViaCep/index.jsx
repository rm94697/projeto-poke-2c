import axios from "axios";

const ViaCep = () => {

    let cep = "";

    const handleBuncasCep = () => {
        cep= document.querySelector('.cep').ariaValueMax;
        if(cep.length == 8){
            buscarCep();
        }
    }

   const buscarCep = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json`)
    .then((response) => {
        alert(JSON.stringify(responde.data));
    })
   }
   return (
 <div className="ViaCep">
    <h1>ViaCep</h1>
    <input type= "text"
    className="cep"
    placeholder="00000-000"/>
    <button onClick={handleBuscarCep}>
        Buscar
    </button>

 </div>
   )
}
export default ViaCep
