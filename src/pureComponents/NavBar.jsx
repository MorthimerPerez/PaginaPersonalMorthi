// import CVpdf from "../assets/docs/CV - Muñoz González Daniel Aurelio.pdf"

export default function NavBar(){
    return(
        <div className="flex flex-row justify-between p-5 lg:h-20 ">
            <div className="flex flex-row w-[50%] items-center text-textOrange text-3xl font-bold hover:text-secAmar font-Sifonn">Perez Perez Carlos Morthimer</div>
            <div className="flex flex-row bg-secAmar rounded-full  w-[30%] items-center justify-evenly h-full text-textGray">
                <a className="w-[30%] rounded-full h-[90%] flex flex-row gap-2 justify-center items-center hover:bg-lightRed" href="{}" target="_blank" rel="noreferrer">
                        <p className="font-bold">CV</p>
                </a>
                <a className="w-[30%] rounded-full h-[90%] flex flex-row gap-2 justify-center items-center hover:bg-lightBlue" href="{}" target="_blank" rel="noreferrer">
                        Llave 
                </a>
                <a className="w-[30%] rounded-full h-[90%] flex flex-row gap-2 justify-center items-center hover:bg-lighViolet" href="{}" target="_blank" rel="noreferrer">
                        Contacto
                </a>
            </div>    
        </div>
    );
}