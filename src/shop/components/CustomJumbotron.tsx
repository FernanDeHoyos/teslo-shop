
interface CustomerJumbotronProps {
  title: string;
  description: string;
}

export const CustomJumbotron = ({ title, description }: CustomerJumbotronProps) => {
  return (
    <>
       <section className="py-10 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="font-montserrat text-2xl lg:text-5xl font-light tracking-tight mb-6">
            {title}
          </h1>
          <p className="font-montserrat text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </section>
    </>
  )
}
