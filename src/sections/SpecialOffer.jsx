import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"

import Button from "../components/Button"

const SpecialOffer = () => {
  return (
   <section className="flex flex-wrap items-center max-xl:flex-col-reverse gap-10  max-container">
    <div className="flex-1">
      <img 
      src={offer} 
      alt="offer"
      width={773}
      height={687}
      className="object-container w-full"
      />
    </div>
    <div className="flex flex-1 flex-col">
     
     <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
      
       <br/>
       <span className="text-coral-red ">Special </span> 
       Offer
     </h2> 
     <p className="mt-4 lg:max-w-lg info-text">
      Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selection to increadible savings, we offer unparalleled value that set us apart.
     </p>
     <p className="mt-6 lg:max-w-lg info-text">
       Navigate a realm if possibilities designed to fulfill your unique desisires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
     </p>
     <div className="mt-11 flex flex-wrap gap-4">
     <Button label="Shop now"  iconUrl={arrowRight}/>
     <Button label="Learn more" 
      backgroundColor="bg-white"  
      borderColor="border-slate-gray"  
      textColor="text-gray-gray"
     iconUrl={arrowRight}/>
     </div>
     </div>


   </section>
  )
}

export default SpecialOffer