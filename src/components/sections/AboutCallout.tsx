import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function AboutCallout() {
  const aboutText = `
    Brightway Coatings was founded on a legacy of hard work, family, and a commitment to excellence. Our story began with Paul, 
    who immigrated from Ukraine at the age of six, started working alongside his father in the family construction services business. 
    After spending 30+ years honing his skills, Paul went on to start his own construction services company, continuing the tradition 
    of quality and craftmanship. Now, as a third generation American, Paul has the privilege of working alongside his son, Tim, in the 
    same way he once worked with his father. Tim grew up in the business, and together they launched Brightway Coatings, focusing on 
    providing high-quality concrete coatings for residential and commercial customers. At Brightway Coatings, we're more than just a 
    business, we're a family.
  `;
  

  return (
    <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* About Content */}
            <div>
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                  A Family Legacy of Craftsmanship
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {aboutText}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                  <Link href="/about">
                    Our Complete Story
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="tel:9045409693">
                    Meet the Team: 904-540-9693
                  </a>
                </Button>
              </div>
            </div>
            
            {/* Stats & Visual */}
            <div className="flex justify-center">
              {/* Father & Son Image */}
              <div className="w-full max-w-md aspect-square">
                <img
                  src="/images/Home Page/tim-and-paul.png"
                  alt="Tim and Paul - Father and son team behind Brightway Coatings Jacksonville"
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
