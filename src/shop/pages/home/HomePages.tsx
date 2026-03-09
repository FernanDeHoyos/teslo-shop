import { CustomPagination } from "@/components/custom/CustomPagination"
import { products } from "@/mock/products.mock"
import { CustomJumbotron } from "@/shop/components/CustomJumbotron"
import { ProductsGrid } from "@/shop/components/ProductsGrid"

export const HomePages = () => {
  return (
    <>
     <CustomJumbotron title="Bienvenido a TESLA STYLE" description="Descubre nuestra colección de ropa minimalista y elegante inspirada en el diseño futurista de Tesla." />
      {/* Aquí irían los componentes para mostrar los productos destacados, categorías, etc. */}
      <ProductsGrid products={products} />
      <CustomPagination totalPages={5} />
    </>
  )
}