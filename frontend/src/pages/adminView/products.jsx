import CommonForm from "@/components/common/form";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { addProductFormElements } from "@/config/config";
import React, { Fragment, useEffect, useState } from "react";
import ProductUploadImage from "../adminView/imageUpload";
import { useDispatch, useSelector } from "react-redux";
import { addNewProduct, deleteProduct, editProduct, fetchAlllProducts } from "@/store/admin/productSlice";
import { toast } from "sonner";
import AdminProdctTile from "./productTile";

const initialFormData = {
  image: null,
  title: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

const Adminproducts = () => {
  const [openCreatesProductDialog, setOpenCreateProductDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoading, setImageLoading] = useState(false);
  const [currentEditedItemId, setCurrentEditedItemId] = useState(null);
  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();
    currentEditedItemId !== null ? 
    dispatch(editProduct({
      id : currentEditedItemId, 
      formData
    })).then((data) => {
      console.log(data, 'edit')

      if(data?.payload?.success){
        dispatch(fetchAlllProducts());
        setFormData(initialFormData);
        setOpenCreateProductDialog(false);
        setCurrentEditedItemId(null);
      }
    }) : 
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      // console.log(data, 'super')
      if (data?.payload?.success) {
        dispatch(fetchAlllProducts());
        setOpenCreateProductDialog(false);
        setImageFile(null);
        setFormData(initialFormData);
        toast("product Added SuccessFully");
      }
    });
  }

  function handleDelete(productId){
    dispatch(deleteProduct(productId)).then((data) => {
      if(data?.payload?.success){
        dispatch(fetchAlllProducts())
      }
    })
  }

  useEffect(() => {
    dispatch(fetchAlllProducts());
  }, [dispatch]);

  // console.log(productList, 'list Products')

  return (
    <Fragment>
      <div className="flex justify-end mb-5">
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => setOpenCreateProductDialog(true)}
        >
          Add New Product
        </button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList && productList.length > 0
          ? productList.map((productItem) => (
              <AdminProdctTile
               key={productItem._id}
                setOpenCreateProductDialog={setOpenCreateProductDialog}
                setCurrentEditedItemId={setCurrentEditedItemId} setFormData={setFormData}
                product={productItem}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
      <Sheet
        open={openCreatesProductDialog}
        onOpenChange={() => {
          setOpenCreateProductDialog(false);
          setCurrentEditedItemId(null)
          setFormData(initialFormData)
        }}
      >
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
               {
            currentEditedItemId !== null ? 'Edit Product' : 'Add New Product'
          }
            </SheetTitle>
          </SheetHeader>
          <div className="p-6 mb-3">
            <ProductUploadImage
              imageFile={imageFile}
              setImageFile={setImageFile}
              uploadedImageUrl={uploadedImageUrl}
              setUploadedImageUrl={setUploadedImageUrl}
              setImageLoading={setImageLoading}
              imageLoading={imageLoading}
              isEditMode={currentEditedItemId !== null}
            />
            <CommonForm
              formControls={addProductFormElements}
              formData={formData}
              setFormData={setFormData}
              buttonText={ currentEditedItemId !== null ? 'Edit' : 'Add'}
              onSubmit={onSubmit}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
};

export default Adminproducts;
