// app/globals.d.ts
declare module '*.css' {
  const content: string;
  export default content;
}

// Optional: kalau kamu pakai CSS Modules (.module.css)
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}