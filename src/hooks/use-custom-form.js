import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const useCustomForm = ({ schema, defaultValues, onSubmitHandler }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const [isLoadingForm, setIsLoadingForm] = useState(false);

  const onSubmit = async (values) => {
    setIsLoadingForm(true);
    try {
      await onSubmitHandler(values);
    } 
    catch (error) {
        if (error?.response?.status === 422) {
          const errors = error.response.data.errors;
          Object.keys(errors).forEach((field) => {
            form.setError(field, {
              type: "server",
              message: errors[field][0],
            });
          });
        }
    }
    finally {
        setIsLoadingForm(false);
    }
  };

  return { form, isLoadingForm, onSubmit };
};
