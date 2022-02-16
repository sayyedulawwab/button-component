import React from "react";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function Button({ variant, disableShadow, disabled, startIcon, endIcon, size, color }) {
  return (
    (variant === "outline" && (
      <button className='px-3 py-2 rounded border border-blue-600 text-blue-600 hover:bg-blue-100 focus:bg-blue-100'>
        Default
      </button>
    )) ||
    (variant === "text" && !disabled && (
      <button className='px-3 py-2 rounded  text-blue-600 hover:bg-blue-100 focus:bg-blue-100'>Default</button>
    )) ||
    (disableShadow && <button className='px-3 py-2 rounded text-white bg-blue-600'>Default</button>) ||
    (variant === "text" && disabled && (
      <button className='px-3 py-2 rounded text-gray-500' disabled>
        Default
      </button>
    )) ||
    (disabled && (
      <button className='px-3 py-2 rounded bg-gray-300 text-gray-500' disabled>
        Default
      </button>
    )) ||
    (startIcon === "local_grocery_store" && (
      <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'>
        <LocalGroceryStoreIcon className='mr-2' style={{ color: "#fff", fontSize: "1em" }} />
        Default
      </button>
    )) ||
    (endIcon === "local_grocery_store" && (
      <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'>
        Default
        <LocalGroceryStoreIcon className='ml-2' style={{ color: "#fff", fontSize: "1em" }} />
      </button>
    )) ||
    (size === "sm" && (
      <button className='px-2 py-1 rounded text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'>Default</button>
    )) ||
    (size === "md" && (
      <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'>Default</button>
    )) ||
    (size === "lg" && (
      <button className='px-4 py-3 rounded text-white bg-blue-600 hover:bg-blue-700 focus:bg-blue-700'>Default</button>
    )) ||
    (color === "default" && (
      <button className='px-3 py-2 rounded text-black bg-gray-300 hover:bg-gray-400 focus:bg-gray-400'>Default</button>
    )) ||
    (color === "primary" && (
      <button className='px-3 py-2 rounded text-white bg-blue-600 hover:bg-blue-800 focus:bg-blue-800'>Default</button>
    )) ||
    (color === "secondary" && (
      <button className='px-3 py-2 rounded text-white bg-slate-600 hover:bg-slate-800 focus:bg-slate-800'>
        Secondary
      </button>
    )) ||
    (color === "danger" && (
      <button className='px-3 py-2 rounded text-white bg-red-600 hover:bg-red-700 focus:bg-red-700'>Danger</button>
    )) || <button className='px-3 py-2 rounded bg-gray-300 hover:bg-gray-400 focus:bg-gray-400'>Default</button>
  );
}

export default Button;
