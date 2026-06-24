import Features from "./Features";

export default function PricingCard({ pricingData }) {
    console.log(pricingData)
    const { plan, price, description, features, duration, popular } = pricingData;
    return (
        <>
            <div className="border bg-amber-50 p-5 text-gray-700 rounded-xl flex flex-col my-3 ">
                <div className="flex justify-between items-center">
                    <span>
                        <h1 className="text-4xl">{plan}</h1>
                        <h4 className="text-2xl">${price}/{duration}</h4>
                    </span>
                    {
                        popular? <p className="text-white text-sm bg-amber-600 rounded-3xl p-2">Popular</p> : ""
                    }
                </div>
                <div className="p-1 my-2 bg-amber-100 text-gray-500 rounded-sm flex-1">
                    <p className="my-2">{description}</p>

                    {
                        features.map((feature, index) => <Features key={index} feature={feature}></Features>)
                    }
                </div>
                <button class="btn btn-outline btn-success w-full mt-2">Subscribe</button>

            </div>

        </>
    )
}