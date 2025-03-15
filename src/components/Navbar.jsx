import Button from "./Button"
import ToggleBtn from "./ToggleBtn"


const Navbar = () => {
  return (
    <div className="flex h-7 justify-between">
      <div className="h-5">
        <img className="h-[30px] w-[100px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh6ctVyagVj-Ae2hDTF6JRH1Ytsu-va5yfag&s" alt="logo" />
      </div>
      <div className="w-1/3 h-5 flex justify-between">
      <input className="border outline-0 h-7 px-2 py-1 " type="text" placeholder="Search" />
      <div>
      <Button />
      </div>
      <ToggleBtn />
      </div>
    </div>
    
  )
}

export default Navbar
