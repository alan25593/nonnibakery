import { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog/dialog";
import { Button } from "@/components/ui/Button/button";
import { Input } from "@/components/ui/Input/input";
import { Checkbox } from "@/components/ui/Checkbox/checkbox";
import { FiEdit } from "react-icons/fi";
import { Label } from "@/components/ui/Label/label";
import { FaExchangeAlt } from "react-icons/fa";
import type {
  EditProductDialogProps,
  Product,
  ProductFormState,
} from "@/types/type";
import { Textarea } from "@/components/ui/TextArea/textarea";
import { filterList } from "@/app/src/data/data.categorys";
import CurrencyInput from "react-currency-input-field";

export const EditProductDialog: React.FC<EditProductDialogProps> = ({
  product: initialProduct,
  onUpdateProduct,
}) => {
  // Inicializar el estado del formulario, incluyendo imágenes secundarias
  const initialFormState: ProductFormState = {
    ...initialProduct,
    price: initialProduct.price ? initialProduct.price.toString() : "",
    discountPrice: initialProduct.discountPrice
      ? initialProduct.discountPrice.toString()
      : ""
  };

  const [productState, setProductState] =
    useState<ProductFormState>(initialFormState);
  const [isOpen, setIsOpen] = useState(false);
  const [file, setFile] = useState<File | undefined>(undefined);

  const [isFileSizeValid, setIsFileSizeValid] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProductState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    setProductState((prev) => ({
      ...prev,
      sizes: checked
        ? [...prev.sizes, size]
        : prev.sizes.filter((s) => s !== size),
    }));
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    setProductState((prev) => ({
      ...prev,
      category: checked
        ? [...prev.category, category]
        : prev.category.filter((c) => c !== category),
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 25 * 1024 * 1024) {
        setIsFileSizeValid(false);
      } else {
        setIsFileSizeValid(true);
        setFile(selectedFile);
      }
    } else {
      setFile(undefined);
    }
  };


  const handleSave = async () => {
    if (!isFileSizeValid) {
      alert("El archivo supera el tamaño máximo permitido de 25 MB.");
      return;
    }

    setIsLoading(true);

    try {
      // Convertir price y discountPrice a números para respetar los tipos de product (numbers)
      const priceValue = parseFloat(
        productState.price.replace(/\./g, "").replace(",", ".")
      );
      if (isNaN(priceValue)) {
        alert("El precio no es válido.");
        setIsLoading(false);
        return;
      }

      const discountPriceValue = productState.discountPrice
        ? parseFloat(
            productState.discountPrice.replace(/\./g, "").replace(",", ".")
          )
        : null;

      if (
        productState.discountPrice &&
        discountPriceValue !== null &&
        isNaN(discountPriceValue)
      ) {
        alert("El precio con descuento no es válido.");
        setIsLoading(false);
        return;
      }

      const updatedProduct: Product = {
        ...productState,
        id: initialProduct.id, // Asegúrate de incluir el ID
        price: priceValue,
        discountPrice: discountPriceValue,
      };

      // Llamar a onUpdateProduct y obtener el producto actualizado
      const updatedProductFromServer = await onUpdateProduct(
        updatedProduct,
        file
      );

      setProductState({
        ...productState,
        imageUrl: updatedProductFromServer.imageUrl || productState.imageUrl,
      });

      setIsOpen(false);
    } catch (error) {
      console.error("Error al guardar cambios:", error);
      alert(
        "Ocurrió un error al guardar los cambios. Revisa la consola para más detalles."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid =
    productState.title.trim() !== "" &&
    productState.price.trim() !== "" &&
    productState.sizes.length > 0 &&
    isFileSizeValid;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <button className="flex justify-center w-full">
          <FiEdit className="text-purple hover:text-purple/80 transition duration-150 h-4 w-4" />
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-screen overflow-y-auto w-full max-w-4xl xl:max-w-5xl mx-auto h-[90vh]">
        <DialogHeader>
          <DialogTitle>Editar Producto</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Título */}
          <div>
            <Label htmlFor="title">Título</Label>
            <Input
              name="title"
              placeholder="Nombre del producto"
              value={productState.title}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          {/* Precio */}
          <div>
            <Label htmlFor="price">Precio</Label>
            <CurrencyInput
              id="price"
              name="price"
              placeholder="Ejemplo: 2.330,00"
              decimalsLimit={2}
              decimalSeparator=","
              groupSeparator="."
              prefix="$ "
              value={productState.price}
              onValueChange={(value) => {
                setProductState((prev) => ({
                  ...prev,
                  price: value || "",
                }));
              }}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Precio con Descuento */}
          <div>
            <Label htmlFor="discountPrice">Precio con Descuento</Label>
            <CurrencyInput
              id="discountPrice"
              name="discountPrice"
              placeholder="Ejemplo: 1.999,99"
              decimalsLimit={2}
              decimalSeparator=","
              groupSeparator="."
              prefix="$ "
              value={productState.discountPrice || ""}
              onValueChange={(value) => {
                setProductState((prev) => ({
                  ...prev,
                  discountPrice: value || "",
                }));
              }}
              className="w-full p-2 border rounded-md"
            />
          </div>
          {/* Cantidad */}
          <div>
            <Label htmlFor="quantity">Cantidad</Label>
            <Input
              type="number"
              name="quantity"
              placeholder="Cantidad en stock"
              value={productState.quantity ?? ""}
              onChange={handleInputChange}
              className="w-full"
            />
          </div>
          {/* Descripción */}
          <div className="md:col-span-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              name="description"
              value={productState.description || ""}
              onChange={handleInputChange}
              placeholder="Ejemplo: Camiseta deportiva color negro"
              className="w-full"
            />
          </div>
          {/* Imagen Principal */}
          <div className="md:col-span-2">
            <div className="flex items-center">
              <Label>Imagen Principal</Label>
            </div>
            {productState.imageUrl && (
              <div className="flex flex-col items-center pb-2 pt-1">
                <img
                  src={productState.imageUrl}
                  alt="Producto actual"
                  className="max-h-32"
                />
                <div className="flex items-center mt-2">
                  <FaExchangeAlt
                    className="text-xl cursor-pointer text-gray-500 hover:text-purple"
                    onClick={() => document.getElementById("image")?.click()}
                    title="Reemplazar imagen"
                  />
                  <span className="ml-2 text-gray-600 text-sm">
                    {file ? file.name : "Ningún archivo seleccionado"}
                  </span>
                </div>
              </div>
            )}
            <div className="flex items-center space-x-4 mt-2">
              <input
                type="file"
                id="image"
                name="image"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>
          </div>

          {/* Tamaños */}
          <div className="md:col-span-2">
            <Label>Tamaños</Label>
            <div className="flex flex-wrap gap-2 pt-2">
              {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="flex items-center space-x-2">
                  <Checkbox
                    id={`size-${size}`}
                    checked={productState.sizes.includes(size)}
                    onCheckedChange={(checked) =>
                      handleSizeChange(size, checked === true)
                    }
                  />
                  <Label htmlFor={`size-${size}`}>{size}</Label>
                </div>
              ))}
            </div>
          </div>

          {/* Categorías */}
          <div className="md:col-span-2">
            <Label>Categorías</Label>
            <div className="flex flex-wrap gap-2 pt-2">
              {filterList.map((category) => (
                <div
                  key={category.value}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={`category-${category.value}`}
                    checked={productState.category.includes(category.value)}
                    onCheckedChange={(checked) =>
                      handleCategoryChange(category.value, checked === true)
                    }
                  />
                  <Label htmlFor={`category-${category.value}`}>
                    {category.name}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Botones */}
          <div className="md:col-span-2 flex justify-end space-x-4">
            <Button
              className="bg-gray-300"
              onClick={() => setIsOpen(false)}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              onClick={handleSave}
              disabled={!isFormValid || isLoading}
              className={`${
                isFormValid ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {isLoading ? "Guardando..." : "Guardar Cambios"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
