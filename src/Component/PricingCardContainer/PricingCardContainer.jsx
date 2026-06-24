import { use } from "react"
import PricingCard from "../PricingCard/PricingCard";

export default  function PricingCardContainer({pricingPromis}){

    const pricingData = use(pricingPromis);
    console.log(pricingData)
    
    return(
        <>

            <main className="">
                <h1 className="text-3xl font-bold">All Plans</h1>

                <div className="grid lg:grid-cols-3 gap-5 mx-5 justify-between">
                    {
                        pricingData.map(pricingData => <PricingCard key={pricingData.id} pricingData={pricingData}></PricingCard>)
                    }
                </div>
            </main>

        </>
    )

}

