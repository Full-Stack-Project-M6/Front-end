import React, { ReactNode } from "react";

type IProps = {
    children: ReactNode ,
    weight?: number
  };

type IPropsInput = {
    children: string 
  };

export const H1 = ({ children, ...rest }:IProps) => (
  <h1 className="heading-1-700" {...rest}>
    {children}
  </h1>
);

export const H2 = ({ children, ...rest }:IProps) => (
  <h2 className="heading-2-600" {...rest}>
    {children}
  </h2>
);

export const H3 = ({ children, weight = 600, ...rest }:IProps) => (
  <h3
    className={
      weight === 500 ? "heading-3-500" : "heading-3-600"
    }
    {...rest}
  >
    {children}
  </h3>
);

export const H4 = ({ children, weight = 600, ...rest }:IProps) => (
  <h4
    className={
      weight === 500 ? "heading-4-500" : "heading-4-600"
    }
    {...rest}
  >
    {children}
  </h4>
);

export const H5 = ({ children, weight = 600, ...rest }:IProps) => (
  <h5
    className={
      weight === 500 ? "heading-5-500" : "heading-5-600"
    }
    {...rest}
  >
    {children}
  </h5>
);

export const H6 = ({ children, weight = 600, ...rest }:IProps) => (
  <h6
    className={
      weight === 500 ? "heading-6-500" : "heading-6-600"
    }
    {...rest}
  >
    {children}
  </h6>
);

export const Body1 = ({ children, weight = 400, ...rest }:IProps) => (
  <p
    className={
      weight === 600 ? "body-1-600" : "body-1-400"
    }
    {...rest}
  >
    {children}
  </p>
);

export const Body2 = ({ children, weight = 400, ...rest }:IProps) => (
  <p
    className={
      weight === 500 ? "body-2-500" : "body-2-400"
    }
    {...rest}
  >
    {children}
  </p>
);

export const InputPlaceholder = ({ children, ...rest }:IPropsInput) => (
  <input className="input-placeholder" placeholder={children} {...rest} />
);

export const InputLabel = ({ children, ...rest }:IProps) => (
  <label className="input-label" {...rest}>
    {children}
  </label>
);