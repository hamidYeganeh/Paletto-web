import type { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className={`px-4 py-2 rounded bg-primary-500 text-white hover:bg-primary-600 ${
        props.className ?? ""
      }`.trim()}
    />
  );
}
