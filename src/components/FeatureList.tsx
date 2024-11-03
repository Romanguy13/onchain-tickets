const features = [
  {
    name: "Instant Access to Funds",
    description:
      "Event organizers can access ticket revenue in real-time. We never hold your money, we simply connect the merchant to the buyer",
  },
  {
    name: "Effortless Event Management",
    description:
      "Automatic registeration upon ticket purcahse, so attendees can scan their wallet at the door without the need for physical tickets",
  },
  {
    name: "No Hidden Fees",
    description:
      "Our platform leverages USDC on Solana to route 100% of the funds directly to the event organizer, cutting out all the fees",
  },
];

export default function FeatureList() {
  return (
    <div className="mx-auto mt-10 sm:mt-24 grid max-w-2xl grid-cols-1 gap-x-10 gap-y-8 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 mb-8">
      {features.map((feature) => (
        <div key={feature.name}>
          <h3 className="text-lg font-semibold text-gray-900">
            {feature.name}
          </h3>
          <p className="mt-2 text-gray-800">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
