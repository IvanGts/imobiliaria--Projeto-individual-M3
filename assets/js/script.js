import axios from "axios"

const [count, setCount] = useState([])
function getApi(){

axios.get("http://localhost:3000/casas/")
.then((resposta) => 
    // console.log(resposta.data);
    setCount()
    
)
.catch((erro) => console.log(erro));

}

function postApi(){

} 