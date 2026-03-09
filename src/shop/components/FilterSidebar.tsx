import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSearchParams } from "react-router";

export const FilterSidebar = () => {
 
    // Aquí se podrían agregar más estados para otros filtros como categoría, color, etc. usando useSearchParams para mantenerlos en la URL
    const [searchParams, setSearchParams] = useSearchParams();

    // filtro de talla usando checkboxes 
    // (en este caso, solo se muestra el estado para las tallas seleccionadas, 
    // pero se podrían agregar más filtros de manera similar)
    const selectedSize = searchParams.get("size")?.split(",") || []; // Esto asume que las tallas seleccionadas se almacenan como una lista separada por comas en la URL, por ejemplo: ?size=s,m,l

    const handleSizeChange = (size: string) => {
        const newSelectedSizes = selectedSize.includes(size)
            ? selectedSize.filter(s => s !== size) // Si ya está seleccionado, lo quitamos
            : [...selectedSize, size]; // Si no está seleccionado, lo agregamos

        searchParams.set("page", "1"); // Reiniciamos a la página 1 cada vez que se cambia un filtro para evitar problemas de paginación con filtros activos
        searchParams.set("size", newSelectedSizes.join(",")); // Esto convertirá la lista de tallas seleccionadas en una cadena separada por comas para almacenarla en la URL
        setSearchParams(searchParams); // Esto actualizará la URL con los nuevos filtros
    }

  const sizes = [
    { id: "xs", label: "XS" },
    { id: "s", label: "S" },
    { id: "m", label: "M" },
    { id: "l", label: "L" },
    { id: "xl", label: "XL" },
    { id: "xxl", label: "XXL" },
  ];


  return (
    <div className="w-64 space-y-6">
      <div>
        <h3 className="font-semibold text-lg mb-4">Filtros</h3>
      </div>

      {/* Sizes */}
      <div className="space-y-4">
        <h4 className="font-medium">Tallas</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizes.map((size) => (
            <Button
              key={size.id}
              onClick={() => handleSizeChange(size.id)}
              variant={selectedSize.includes(size.id) ? "default" : "outline"}
              size="sm"
              className="h-8"
            >
              {size.label}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-medium">Precio</h4>
        <RadioGroup defaultValue="" className="space-y-3">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="any" id="priceAny" />
            <Label htmlFor="priceAny" className="text-sm cursor-pointer">Cualquier precio</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="0-50" id="price1" />
            <Label htmlFor="price1" className="text-sm cursor-pointer">$0 - $50</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="50-100" id="price2" />
            <Label htmlFor="price2" className="text-sm cursor-pointer">$50 - $100</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="100-200" id="price3" />
            <Label htmlFor="price3" className="text-sm cursor-pointer">$100 - $200</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="200+" id="price4" />
            <Label htmlFor="price4" className="text-sm cursor-pointer">$200+</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

