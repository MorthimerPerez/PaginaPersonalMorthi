import Pusyo from "../assets/imgs/Yo.jpg"
export default function Me(){
    return(
        <div className="flex flex-col justify-center items-center">
            <img src={Pusyo} className="h-[150px] w-[150px]"/>
            <div className="w-[60%]">
                <h2 className="text-2xl font-bold font-serif">Formación académica:</h2>
                <p className="text-justify font-sans mt-5">
                    Egresado de la poderosísima Vocacional 1 “Gonzalo Vazquez Vela” de la carrera técnica en Sistemas Digitales, tuve un desempeño particular, siempre teniendo buena relación con los profesores y compañeros, además de salir con un buen promedio.
                </p>
            </div>
        </div>
    );
}