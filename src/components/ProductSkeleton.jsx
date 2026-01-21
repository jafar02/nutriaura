const ProductSkeleton = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        padding: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          height: "180px",
          background:
              "linear-gradient(90deg,#f0f0f0,#e6e6e6,#f0f0f0)",
          borderRadius: "12px",
          marginBottom: "12px",
          animation: "pulse 1.5s infinite",
        }}
      />

      <div
        style={{
          height: "14px",
          width: "80%",
        background:
  "linear-gradient(90deg,#f0f0f0,#e6e6e6,#f0f0f0)",
          borderRadius: "6px",
          marginBottom: "8px",
          animation: "pulse 1.5s infinite",
        }}
      />

      <div
        style={{
          height: "14px",
          width: "60%",
         background:
  "linear-gradient(90deg,#f0f0f0,#e6e6e6,#f0f0f0)",
          borderRadius: "6px",
          animation: "pulse 1.5s infinite",
        }}
      />

      <style>
        {`
          @keyframes pulse {
            0% { opacity: 1 }
            50% { opacity: 0.5 }
            100% { opacity: 1 }
          }
        `}
      </style>
    </div>
  );
};

export default ProductSkeleton;
