"use client";
import PropTypes, { any } from "prop-types";
import React from "react";
import { FormProvider as Form } from "react-hook-form";

FormWrapper.propTypes = {
  children: PropTypes.node,
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default function FormWrapper({
  children,
  onSubmit,
  methods,
}: {
  children: React.ReactNode;
  onSubmit: () => void;
  methods: any;
}) {
  return (
    <Form {...methods}>
      <form className="mt-5" onSubmit={onSubmit}>
        {children}
      </form>
    </Form>
  );
}
