import Morido from "../assets/imgs/Mimido.jpg"
import Comidita from "../assets/imgs/Comida.jpg"
import Amiwos from "../assets/imgs/Amigos.jpg"

export default function Hobbies(){
    return(
        <div className="flex flex-col justify-center items-center mt-20">
            <div className="w-[60%]">
                <h2 className="text-2xl font-bold font-serif">Mis hobbies:</h2>
            </div>
            <div className="w-[60%] mt-10">
                <h2 className="text-2xl font-bold font-serif">Dormir</h2>
                <p className="text-justify font-sans mt-5">
                    Soy un soñador por naturaleza, me gusta estar bien descansado y la verdad la paso muy mal cuando no he cumplido con todas mis horas de sueño, si me ven por ahí durmiendo, no me despierte ;)
                </p>
            </div>
            <img src={Morido} className="h-[150px] w-[150px] mt-5"/>
            <div className="w-[60%] mt-10">
                <h2 className="text-2xl font-bold font-serif">Comer</h2>
                <p className="text-justify font-sans mt-5">
                    Soy un amante de la comida y de tomar fotos cuando el platillo lo amerita, me gusta salir y descubrir nuevas experiencias culinarias
                </p>
            </div>
            <img src={Comidita} className="h-[150px] w-[150px] mt-5"/>
            <div className="w-[60%] mt-10">
                <h2 className="text-2xl font-bold font-serif">Salir/Hacer cosas con amigos:</h2>
                <p className="text-justify font-sans mt-5">
                    Me gusta mucho salir con mis amigos o realizar actividades fuera de la escuela
                </p>
            </div>
            <img src={Amiwos} className="h-[150px] w-[150px] mt-5 mb-10"/>
        </div>
    );
}