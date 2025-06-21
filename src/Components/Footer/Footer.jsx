import { floral, lotus, petals, pink, smflower } from "../../assets/export"

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-row justify-center items-center bg-lime-400 p-10">
        <div className="flex flex-row justify-center items-center gap-10 aboutme-p text-l/30 sm:text-2xl/20 tracking-widest">
          <img src={petals} className="w-20" alt="" />
          <h3>MADE WITH LOVE BY AYA JOUNEY BEST WISHES</h3>
          <img src={pink} className="w-20" alt="" />
        </div>
      </div>
    </footer>
  )
}
